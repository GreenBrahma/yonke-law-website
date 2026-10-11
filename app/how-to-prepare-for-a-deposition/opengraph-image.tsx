import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

/* -------------------------------------------------------
   Open Graph image for /how-to-prepare-for-a-deposition
   The park photo of Mike, cropped to 1200x630 at build time.
   ------------------------------------------------------- */

export const alt = "Mike, a Kansas City injury lawyer, standing in a park.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const photo = await readFile(
    join(process.cwd(), "public", "images", "Mike Yonke - Standing in Park.png")
  );
  const src = `data:image/png;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div style={{ display: "flex", width: "100%", height: "100%", background: "#1C1C1E" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt=""
          width={1200}
          height={630}
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
        />
      </div>
    ),
    size
  );
}
