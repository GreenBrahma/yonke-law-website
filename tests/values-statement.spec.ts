import { test, expect } from "@playwright/test";

/* ============================================================
   Values Statement — §6 acceptance criteria, with MEASURED numbers.

   Runs against the HTTP dev server (see playwright.config.ts). The
   mask + background are same-origin, so canvas readback is untainted
   and shape-outside loads over http (not silently dropped as it would
   be under file:// without --allow-file-access-from-files).
   ============================================================ */

const PAGE = "/about/i-stand-for";

test("values statement meets §6 acceptance criteria (measured)", async ({
  page,
}) => {
  await page.goto(PAGE, { waitUntil: "networkidle" });

  // Fonts must be settled before measuring line boxes.
  await page.evaluate(() => (document as any).fonts.ready);

  const protocol = await page.evaluate(() => location.protocol);
  console.log(`\n=== ENVIRONMENT ===`);
  console.log(`location.protocol: ${protocol}  (must be http:, not file:)`);
  expect(protocol).toBe("http:");

  const M = await page.evaluate(async () => {
    const MASK = "/images/values-wrap-shape.png";
    const BG = "/images/values-hero-bg.jpg";

    const load = (src: string) =>
      new Promise<HTMLImageElement>((res, rej) => {
        const im = new Image();
        im.crossOrigin = "anonymous";
        im.onload = () => res(im);
        im.onerror = rej;
        im.src = src;
      });

    const relLum = (r: number, g: number, b: number) => {
      const f = (c: number) => {
        c /= 255;
        return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
      };
      return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
    };
    const pct = (arr: number[], p: number) => {
      if (!arr.length) return 0;
      const s = [...arr].sort((a, b) => a - b);
      return s[Math.min(s.length - 1, Math.floor(p * (s.length - 1)))];
    };

    const stageEl = document.querySelector(
      '[data-testid="vs-stage"]'
    ) as HTMLElement;
    const sRect = stageEl.getBoundingClientRect();
    const u = sRect.width / 1080; // reference-px -> css-px

    // ----- headline word font sizes -----
    const spans = Array.from(
      document.querySelectorAll('[data-testid="vs-headline"] span')
    );
    const headlineFontSizes = spans.map(
      (s) => getComputedStyle(s as HTMLElement).fontSize
    );

    // ----- body copy line rects, grouped per visual line, per paragraph -----
    const paras = Array.from(
      document.querySelectorAll('[data-testid="vs-copy"] p')
    );
    type Line = {
      para: number;
      idxInPara: number;
      isParaLast: boolean;
      leftS: number;
      rightS: number;
      topS: number;
      bottomS: number;
      text: string;
    };
    const lines: Line[] = [];

    paras.forEach((p, pi) => {
      // collect line-fragment rects from every text node in the paragraph
      const walker = document.createTreeWalker(p, NodeFilter.SHOW_TEXT);
      const raw: { l: number; r: number; t: number; b: number }[] = [];
      let n: Node | null;
      while ((n = walker.nextNode())) {
        const rng = document.createRange();
        rng.selectNodeContents(n);
        for (const rc of Array.from(rng.getClientRects())) {
          if (rc.height > 60 || rc.width <= 0) continue; // drop container rects
          raw.push({ l: rc.left, r: rc.right, t: rc.top, b: rc.bottom });
        }
      }
      // group fragments into visual lines by their top (tolerance ~ half line)
      raw.sort((a, b) => a.t - b.t);
      const groups: { l: number; r: number; t: number; b: number }[] = [];
      for (const rc of raw) {
        const g = groups.find((g) => Math.abs(g.t - rc.t) < 12);
        if (g) {
          g.l = Math.min(g.l, rc.l);
          g.r = Math.max(g.r, rc.r);
          g.t = Math.min(g.t, rc.t);
          g.b = Math.max(g.b, rc.b);
        } else {
          groups.push({ ...rc });
        }
      }
      groups.sort((a, b) => a.t - b.t);
      groups.forEach((g, gi) => {
        lines.push({
          para: pi,
          idxInPara: gi,
          isParaLast: gi === groups.length - 1,
          leftS: g.l - sRect.left,
          rightS: g.r - sRect.left,
          topS: g.t - sRect.top,
          bottomS: g.b - sRect.top,
          text: "",
        });
      });
    });

    // ----- mask: rightmost opaque column per native row (threshold 0.10) -----
    const maskImg = await load(MASK);
    const mc = document.createElement("canvas");
    mc.width = maskImg.naturalWidth; // 960
    mc.height = maskImg.naturalHeight; // 1540
    const mctx = mc.getContext("2d")!;
    mctx.drawImage(maskImg, 0, 0);
    const mdata = mctx.getImageData(0, 0, mc.width, mc.height).data;
    const maskRightCol = new Int32Array(mc.height).fill(-1);
    const A = 0.1 * 255;
    for (let y = 0; y < mc.height; y++) {
      for (let x = mc.width - 1; x >= 0; x--) {
        if (mdata[(y * mc.width + x) * 4 + 3] >= A) {
          maskRightCol[y] = x;
          break;
        }
      }
    }
    // float box occupies stage region: left 60u, top 60u, size 960u x 1540u
    const maskRightXstage = (yS: number) => {
      const row = Math.round(((yS - 60 * u) / (1540 * u)) * mc.height);
      if (row < 0 || row >= mc.height) return 60 * u; // outside mask -> min left
      const col = maskRightCol[row];
      return 60 * u + (col + 1) * (960 / mc.width) * u; // +1: right edge of opaque px
    };

    // ----- background luminance canvas at stage size -----
    const bgImg = await load(BG);
    const bc = document.createElement("canvas");
    bc.width = Math.round(sRect.width);
    bc.height = Math.round(sRect.height);
    const bctx = bc.getContext("2d")!;
    bctx.drawImage(bgImg, 0, 0, bc.width, bc.height);
    const bdata = bctx.getImageData(0, 0, bc.width, bc.height).data;
    const bgLum90 = (l: Line) => {
      const lums: number[] = [];
      const x0 = Math.max(0, Math.floor(l.leftS));
      const x1 = Math.min(bc.width - 1, Math.ceil(l.rightS));
      const y0 = Math.max(0, Math.floor(l.topS));
      const y1 = Math.min(bc.height - 1, Math.ceil(l.bottomS));
      for (let y = y0; y <= y1; y += 2) {
        for (let x = x0; x <= x1; x += 2) {
          const i = (y * bc.width + x) * 4;
          lums.push(relLum(bdata[i], bdata[i + 1], bdata[i + 2]));
        }
      }
      return pct(lums, 0.9);
    };

    // ----- per-line derived metrics -----
    const perLine = lines.map((l) => {
      const maskRight = maskRightXstage((l.topS + l.bottomS) / 2);
      const intersectsMike = l.leftS < maskRight - 0.5; // clears if left >= mask opaque right
      const lum90 = bgLum90(l);
      const contrast = 1.05 / (lum90 + 0.05); // white (L=1) vs bg
      return {
        para: l.para,
        idxInPara: l.idxInPara,
        isParaLast: l.isParaLast,
        leftS: +l.leftS.toFixed(1),
        rightS: +l.rightS.toFixed(1),
        maskRight: +maskRight.toFixed(1),
        intersectsMike,
        lum90: +lum90.toFixed(4),
        contrast: +contrast.toFixed(2),
      };
    });

    // ----- signature -----
    const sigEl = document.querySelector(
      '[data-testid="vs-sig"]'
    ) as HTMLElement;
    const sigR = sigEl.getBoundingClientRect();
    const sigTopS = sigR.top - sRect.top;
    const sigBottomS = sigR.bottom - sRect.top;
    const sigDistFromBottom = sRect.height - sigBottomS;
    const lastLineBottom = Math.max(...lines.map((l) => l.bottomS));
    const gapAboveSig = sigTopS - lastLineBottom;

    // ----- DOM copy count (rendered text only, not the RSC payload) -----
    const domCopyCount = (
      (document.body.innerText.match(/I chose these three words/g) || []).length
    );

    return {
      u,
      stageW: +sRect.width.toFixed(1),
      stageH: +sRect.height.toFixed(1),
      headlineFontSizes,
      perLine,
      sigDistFromBottom: +sigDistFromBottom.toFixed(1),
      sigFullyVisible: sigTopS >= 0 && sigBottomS <= sRect.height,
      gapAboveSig: +gapAboveSig.toFixed(1),
      domCopyCount,
    };
  });

  // ---------------- REPORT ----------------
  console.log(`\n=== SCALE ===`);
  console.log(
    `stage ${M.stageW}x${M.stageH}px  ->  --u = ${M.u.toFixed(4)}px/ref-px`
  );

  console.log(`\n=== DEDUPE ===`);
  console.log(`"I chose these three words" in rendered DOM: ${M.domCopyCount}`);

  console.log(`\n=== HEADLINE WORD FONT-SIZES (must be identical) ===`);
  console.log(M.headlineFontSizes.join("  |  "));

  console.log(
    `\n=== PER-LINE: right-edge x (stage-local) | left x | mask-right | intersects Mike | bg-lum(p90) | contrast ===`
  );
  for (const l of M.perLine) {
    const tag = l.isParaLast ? " [para-final/ragged]" : "";
    console.log(
      `P${l.para} L${l.idxInPara}: right=${l.rightS
        .toString()
        .padStart(6)}  left=${l.leftS.toString().padStart(6)}  maskR=${l.maskRight
        .toString()
        .padStart(6)}  mikeHit=${l.intersectsMike ? "YES" : "no "}  lum90=${l.lum90
        .toFixed(4)
        .padStart(6)}  contrast=${l.contrast.toFixed(2).padStart(6)}:1${tag}`
    );
  }

  // Right-edge drift over justified (non-paragraph-final) lines
  const justified = M.perLine.filter((l) => !l.isParaLast);
  const rights = justified.map((l) => l.rightS);
  const drift = Math.max(...rights) - Math.min(...rights);
  console.log(`\n=== RIGHT-EDGE DRIFT (justified lines only) ===`);
  console.log(
    `min=${Math.min(...rights)}  max=${Math.max(
      ...rights
    )}  drift=${drift.toFixed(2)}px   (paragraph-final lines are ragged by design)`
  );

  const mikeHits = M.perLine.filter((l) => l.intersectsMike).length;
  console.log(`\n=== MIKE ALPHA OVERLAP ===`);
  console.log(`line rects intersecting exclusion mask (encloses Mike): ${mikeHits}`);

  const minContrast = Math.min(...M.perLine.map((l) => l.contrast));
  console.log(`\n=== CONTRAST ===`);
  console.log(`worst line contrast (p90 sampling): ${minContrast.toFixed(2)}:1`);

  console.log(`\n=== SIGNATURE ===`);
  console.log(
    `distance from bottom edge: ${M.sigDistFromBottom}px (expect ~${(
      112 * M.u
    ).toFixed(1)})   gap above: ${M.gapAboveSig}px   fullyVisible=${M.sigFullyVisible}\n`
  );

  // ---------------- ASSERTIONS (§6) ----------------
  expect(M.domCopyCount, "copy appears exactly once in DOM").toBe(1);
  expect(new Set(M.headlineFontSizes).size, "identical headline font-size").toBe(
    1
  );
  expect(drift, "right-edge drift on justified lines").toBeLessThanOrEqual(1.5);
  expect(mikeHits, "lines intersecting Mike's alpha").toBe(0);
  expect(minContrast, "min per-line contrast >= 7:1 (AAA)").toBeGreaterThanOrEqual(
    7
  );
  expect(M.sigFullyVisible, "signature fully visible").toBe(true);
  expect(
    Math.abs(M.sigDistFromBottom - 112 * M.u),
    "signature 112ref-px above bottom"
  ).toBeLessThanOrEqual(6);
  expect(M.gapAboveSig, "gap above signature 24-60 ref-px").toBeGreaterThanOrEqual(
    24 * M.u - 2
  );
  expect(M.gapAboveSig).toBeLessThanOrEqual(60 * M.u + 2);
});

test("stacks cleanly below 1024px with no horizontal overflow", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 1600 });
  await page.goto(PAGE, { waitUntil: "networkidle" });
  const r = await page.evaluate(() => {
    const de = document.documentElement;
    const wrap = document.querySelector('[data-testid="vs-wrap"]') as HTMLElement;
    const cutout = document.querySelector(
      '[data-testid="vs-cutout"]'
    ) as HTMLElement;
    const copy = document.querySelector('[data-testid="vs-copy"]') as HTMLElement;
    return {
      overflow: de.scrollWidth - de.clientWidth,
      wrapFloat: wrap ? getComputedStyle(wrap).float : "n/a",
      wrapDisplay: wrap ? getComputedStyle(wrap).display : "n/a",
      cutoutDisplay: cutout ? getComputedStyle(cutout).display : "n/a",
      copyAlign: copy ? getComputedStyle(copy).textAlign : "n/a",
    };
  });
  console.log(`\n=== MOBILE (<1024) ===`);
  console.log(JSON.stringify(r, null, 2));
  expect(r.overflow, "no horizontal overflow").toBeLessThanOrEqual(0);
  expect(r.wrapDisplay, "float hidden on mobile").toBe("none");
  expect(r.cutoutDisplay, "cutout visible on mobile").not.toBe("none");
  expect(r.copyAlign, "copy left-aligned on mobile").toBe("left");
});
