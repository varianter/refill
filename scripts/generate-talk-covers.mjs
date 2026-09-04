import esbuild from "esbuild";
import satori from "satori";
import sharp from "sharp";
import { readFile, mkdir, writeFile, rm } from "fs/promises";
import { existsSync } from "fs";
import path from "path";
import React from "react";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const OUT_DIR = path.join(ROOT, "talks-cover");
const PEOPLE_DIR = path.join(ROOT, "public/assets/img/people");
const PLACEHOLDER = path.join(ROOT, "public/assets/img/placeholder/refill26.png");
const BACKGROUND = path.join(ROOT, "public/assets/img/og-talk-background.png");
const FONT_PATH = path.join(ROOT, "public/fonts/Britti-Sans-Regular.otf");

// Non-person "speakers" (podcasts, venues, placeholders) mapped the same way
// as src/utils/speakerImages.ts — these don't have a photo under /people/.
const SPECIAL_IMAGE_MAP = {
  "": PLACEHOLDER,
  TBA: PLACEHOLDER,
  "Klar tale": path.join(ROOT, "public/assets/img/podcasts/Idiotraadet.png"),
  "Mikael Brevik & Stian Møllersen": path.join(
    ROOT,
    "public/assets/img/podcasts/Kortslutning.jpg",
  ),
  "Lesehesten Utvikling": path.join(
    ROOT,
    "public/assets/img/podcasts/Lesehesten.png",
  ),
  Chiruto: path.join(ROOT, "public/assets/img/venues/Chiruto.png"),
};

// 16:9, scaled up from the OG resolution (1200x630) for crisp, high-res output.
const WIDTH = 5760;
const HEIGHT = 3240;
const SCALE = WIDTH / 1200;

const bundlePath = path.join(ROOT, ".astro-cover-tmp.cjs");
esbuild.buildSync({
  entryPoints: [path.join(ROOT, "src/utils/schedule/schedule.ts")],
  bundle: true,
  format: "cjs",
  platform: "node",
  outfile: bundlePath,
});
const { schedule } = await import(bundlePath);
await rm(bundlePath, { force: true });

function hasOgImage(entry) {
  return (
    entry.type !== "break" &&
    entry.speaker !== undefined &&
    entry.talkDescription !== undefined
  );
}

function slugify(title) {
  return title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function stripDiacritics(value) {
  return value.normalize("NFD").replace(/[̀-ͯ]/g, "");
}

const imageCache = new Map();

async function loadSpeakerImageDataUri(name) {
  if (imageCache.has(name)) return imageCache.get(name);

  let filePath = SPECIAL_IMAGE_MAP[name];

  if (!filePath) {
    const base = name.replaceAll(" ", "-");
    const candidates = [base, stripDiacritics(base)];
    const extensions = ["jpg", "jpeg", "png"];

    for (const candidate of candidates) {
      for (const ext of extensions) {
        const p = path.join(PEOPLE_DIR, `${candidate}.${ext}`);
        if (existsSync(p)) {
          filePath = p;
          break;
        }
      }
      if (filePath) break;
    }
  }

  if (!filePath) {
    console.warn(`No photo found for speaker "${name}", using placeholder.`);
    filePath = PLACEHOLDER;
  }

  const ext = path.extname(filePath).slice(1);
  const mime = ext === "png" ? "image/png" : "image/jpeg";
  const buffer = await readFile(filePath);
  const dataUri = `data:${mime};base64,${buffer.toString("base64")}`;
  imageCache.set(name, dataUri);
  return dataUri;
}

async function loadBackgroundBuffer() {
  return sharp(BACKGROUND)
    .resize(WIDTH, HEIGHT, { fit: "cover" })
    .png()
    .toBuffer();
}

function rem(value) {
  return `${value * SCALE}rem`;
}
function px(value) {
  return `${Math.round(value * SCALE)}px`;
}

function OGWide({ title, speakerName, speakerImages, from, to, location }) {
  const photoSize = Math.round(180 * SCALE);

  // The background is composited separately with sharp rather than embedded
  // as a data URI here — at high resolutions the base64 payload blows past
  // librsvg's XML parser buffer limit when satori's SVG is rasterized.
  return React.createElement(
    "div",
    {
      style: {
        position: "relative",
        display: "flex",
        width: `${WIDTH}px`,
        height: `${HEIGHT}px`,
      },
    },
    React.createElement(
      "div",
      {
        style: {
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          padding: rem(3),
        },
      },
      React.createElement(
        "div",
        {
          style: {
            display: "flex",
            flexDirection: "column",
            gap: rem(1.5),
            width: px(620),
          },
        },
        React.createElement(
          "div",
          { style: { display: "flex", gap: rem(1) } },
          ...speakerImages.map((src, i) =>
            React.createElement("img", {
              key: i,
              src,
              width: photoSize,
              height: photoSize,
              style: { objectFit: "cover", borderRadius: px(12) },
            }),
          ),
        ),
        React.createElement(
          "p",
          {
            style: {
              fontSize: rem(3),
              lineHeight: rem(3.25),
              color: "#FAFAFA",
              fontWeight: 800,
              margin: 0,
            },
          },
          title,
        ),
        React.createElement(
          "p",
          {
            style: {
              fontSize: rem(2),
              lineHeight: rem(2.5),
              color: "#3ACA40",
              fontWeight: 400,
              margin: 0,
            },
          },
          speakerName,
        ),
      ),
      React.createElement(
        "div",
        { style: { display: "flex", gap: rem(1) } },
        React.createElement(
          "p",
          {
            style: {
              fontSize: rem(1.5),
              lineHeight: rem(2),
              color: "#FAFAFA",
              fontWeight: 800,
              padding: `${rem(0.5)} ${rem(1.25)}`,
              borderRadius: rem(2.5),
              border: `${px(2)} solid #FAFAFA`,
              margin: 0,
            },
          },
          `${from}-${to}`,
        ),
        React.createElement(
          "p",
          {
            style: {
              fontSize: rem(1.5),
              lineHeight: rem(2),
              color: "#FAFAFA",
              fontWeight: 400,
              padding: `${rem(0.5)} ${rem(1.25)}`,
              borderRadius: rem(2.5),
              border: `${px(2)} solid #FAFAFA`,
              margin: 0,
            },
          },
          location,
        ),
      ),
    ),
  );
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true });

  const talks = [];
  for (const block of schedule) {
    for (const track of block.tracks) {
      for (const entry of track) {
        if (hasOgImage(entry) && entry.speaker !== "") {
          talks.push(entry);
        }
      }
    }
  }

  function toMinutes(time) {
    const [h, m] = time.split(":").map(Number);
    return h * 60 + m;
  }

  // Stable sort by start time so filenames list in schedule order;
  // talks sharing a slot (parallel tracks) keep their original relative order.
  talks.sort((a, b) => toMinutes(a.from) - toMinutes(b.from));

  const indexPad = String(talks.length).length;

  console.log(`Generating ${talks.length} talk cover images...`);

  const backgroundBuffer = await loadBackgroundBuffer();
  const fontData = await readFile(FONT_PATH);

  for (const [index, talk] of talks.entries()) {
    const { id, title, speaker, from, to, location } = talk;
    const speakerNames = Array.isArray(speaker) ? speaker : [speaker];
    const speakerImages = await Promise.all(
      speakerNames.map((name) => loadSpeakerImageDataUri(name)),
    );
    const speakerName = speakerNames.join(" & ");

    const svg = await satori(
      OGWide({
        title,
        speakerName,
        speakerImages,
        from,
        to,
        location,
      }),
      {
        width: WIDTH,
        height: HEIGHT,
        fonts: [
          { name: "Britti", data: fontData, weight: 400 },
          { name: "Britti", data: fontData, weight: 800 },
        ],
      },
    );

    const foreground = await sharp(Buffer.from(svg)).png().toBuffer();
    const png = await sharp(backgroundBuffer)
      .composite([{ input: foreground, top: 0, left: 0 }])
      .png()
      .toBuffer();
    const order = String(index + 1).padStart(indexPad, "0");
    const filename = `${order}-${id}-${slugify(title)}.png`;
    const outPath = path.join(OUT_DIR, filename);
    await writeFile(outPath, png);
    console.log(`Wrote ${path.relative(ROOT, outPath)}`);
  }

  console.log("Done.");
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
