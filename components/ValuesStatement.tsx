import { Oswald, Cormorant_Garamond } from "next/font/google";
import styles from "./ValuesStatement.module.css";

/* ============================================================
   ValuesStatement — Mike Yonke's brand statement as a true
   editorial contour-wrap layout (live HTML text, not an image).

   Spec: public/images/YL-TEC-IP-Values-Poster-Build-Prompt.md
   - Copy is verbatim (§4) and rendered EXACTLY ONCE in the DOM.
   - Exclusion mask drives shape-outside (§1). Do not regenerate.
   - Measured values live in the CSS module (§3).
   - Layout toggles with CSS only; the sole width-gated element is
     Mike's visible <img> (in the wrap layout he is baked into the bg).
   ============================================================ */

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-oswald",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["600"],
  style: ["italic"],
  variable: "--font-cormorant",
  display: "swap",
});

export default function ValuesStatement() {
  return (
    <div className={`${oswald.variable} ${cormorant.variable} ${styles.root}`}>
      <div className={styles.canvas}>
        <div className={styles.stage} data-testid="vs-stage">
          <div className={styles.frame}>
            {/* Empty float carrying the exclusion shape. No visual output. */}
            <div className={styles.wrap} data-testid="vs-wrap" aria-hidden="true" />

            <h2
              className={styles.headline}
              data-testid="vs-headline"
              aria-label="Relentless. Devoted. Unyielding."
            >
              <span>Relentless.</span>
              <span>Devoted.</span>
              <span>Unyielding.</span>
            </h2>

            <div className={styles.dividerRow} aria-hidden="true">
              <span className={styles.dividerTab} />
              <span className={styles.dividerLine} />
            </div>

            {/* Mike's visible cutout — shown only in the stacked layout. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/mike-cutout.png"
              alt="Mike Yonke, founding partner of Yonke Law, photographed in a sunlit forest."
              width={800}
              height={1307}
              className={styles.cutout}
              data-testid="vs-cutout"
            />

            {/* Verbatim body copy (§4). Rendered once. Bold only the value words. */}
            <div className={styles.copy} data-testid="vs-copy">
              <p>
                I chose these three words because they mean everything to me, and
                I take them seriously. They are more than words on a website or a
                slogan beneath a logo—they are my commitment to you, and they
                represent how everyone at Yonke Law treats every case we handle.
                When someone comes to us after an injury, they are often dealing
                with pain, stress, uncertainty, and questions about what happens
                next. My job is not only to guide them through that process, but
                to stand beside them with strength, focus, and purpose from
                beginning to end.
              </p>
              <p>
                <strong>Relentless</strong> means I do not stop at the easiest
                answer or the fastest resolution. I prepare thoroughly,
                investigate deeply, and push for the full value of every case
                rather than accepting less simply to move on.{" "}
                <strong>Devoted</strong> means I never lose sight of the person
                behind the case. You are not a file, a claim number, or a case
                sitting on a desk—you are someone whose life has been disrupted,
                and you deserve to be heard, respected, and fully represented.{" "}
                <strong>Unyielding</strong> means that when I take your case, I
                stand firm. Whether in negotiation or in the courtroom, I do not
                back down from doing what is necessary to protect your rights and
                pursue the outcome you deserve.
              </p>
              <p>
                At Yonke Law, these words are not marketing language. They are a
                standard. They shape how we prepare, how we communicate, how we
                advocate, and how we show up for the people who place their trust
                in us. If you choose Yonke Law, you can expect a team that takes
                your case personally, treats it with the seriousness it deserves,
                and fights for you with conviction every step of the way.
              </p>
            </div>

            <div className={styles.sig} data-testid="vs-sig">
              — Mike Yonke
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
