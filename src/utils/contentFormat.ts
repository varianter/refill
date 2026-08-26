import type { ColorPair } from "./colors";
import { colorPairs } from "./colors";

export enum ContentFormat {
  PanelDebate = "Panel debate",
  Podcast = "Podcast",
  Workshop = "Workshop",
  Talks = "Talks",
}

export function getContentFormatColorPair(format: ContentFormat): ColorPair {
  switch (format) {
    case ContentFormat.PanelDebate:
      return colorPairs.purpleAccent;
    case ContentFormat.Podcast:
      return colorPairs.blueAccent;
    case ContentFormat.Workshop:
      return colorPairs.teal100;
    case ContentFormat.Talks:
      return colorPairs.orange200;
  }
}
