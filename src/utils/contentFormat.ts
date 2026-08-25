import type { ColorPair } from "./colors";
import { colorPairs } from "./colors";

export enum ContentFormat {
  PanelDebate = "Panel debate",
  Podcast = "Podcast",
}

export function getContentFormatColorPair(format: ContentFormat): ColorPair {
  switch (format) {
    case ContentFormat.PanelDebate:
      return colorPairs.purpleAccent;
    case ContentFormat.Podcast:
      return colorPairs.blueAccent;
  }
}
