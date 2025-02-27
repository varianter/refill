import { readFile } from "fs/promises";
import type { JSX } from "react";
import satori from "satori";
import sharp from "sharp";
import path from "path";

const fontPath = path.resolve(
  process.cwd(),
  "public/fonts/Britti-Sans-Regular.otf",
);

export async function SVG(component: JSX.Element) {
  return await satori(component, {
    width: 1200,
    height: 630,
    fonts: [
      {
        name: "Britti",
        data: await readFile(fontPath),
        weight: 400,
      },
      {
        name: "Britti",
        data: await readFile(fontPath),
        weight: 800,
      },
    ],
  });
}

export async function PNG(component: JSX.Element): Promise<Buffer> {
  return await sharp(Buffer.from(await SVG(component)))
    .png()
    .toBuffer();
}
