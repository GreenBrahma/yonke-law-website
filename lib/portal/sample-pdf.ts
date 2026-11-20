/**
 * Builds a small one-page PDF for the demonstration case's shared documents,
 * so "open" shows a real file that is plainly marked as a sample. Real cases
 * will stream the actual document from Filevine instead.
 */
const esc = (s: string) => s.replace(/[^\x20-\x7E]/g, "").replace(/([\\()])/g, "\\$1");

export function samplePdf(title: string, lines: string[]): Uint8Array {
  const text: string[] = [
    "BT",
    "/F1 20 Tf 72 720 Td",
    `(${esc(title)}) Tj`,
    "/F1 11 Tf 0 -28 Td",
    "(SAMPLE DOCUMENT - People First demonstration case) Tj",
    "0 -30 Td",
  ];
  for (const l of lines) text.push(`(${esc(l)}) Tj`, "0 -18 Td");
  text.push("ET");
  const stream = text.join("\n");

  const objects = [
    "<< /Type /Catalog /Pages 2 0 R >>",
    "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
    "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>",
    `<< /Length ${stream.length} >>\nstream\n${stream}\nendstream`,
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
  ];

  let out = "%PDF-1.4\n";
  const offsets: number[] = [];
  objects.forEach((body, i) => {
    offsets.push(out.length);
    out += `${i + 1} 0 obj\n${body}\nendobj\n`;
  });
  const xref = out.length;
  out += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  for (const o of offsets) out += `${String(o).padStart(10, "0")} 00000 n \n`;
  out += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF\n`;
  return new TextEncoder().encode(out);
}
