import { colorPairs, type ColorPair } from "./colors";

export function getColumn(colorPair: ColorPair) {
  if (colorPair === colorPairs.darkBlue) {
    return 1;
  } else if (colorPair === colorPairs.orange) {
    return 2;
  } else {
    return 3;
  }
}

export type Column = 1 | 2 | 3 | "unset";
