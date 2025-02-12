import type { ColorPair } from "./colors";
import { colorPairs } from "./colors";

export enum Discipline {
  Design,
  Development,
  StrategyAndProduct,
}

export function getDisciplineName(discipline: Discipline): string {
  switch (discipline) {
    case Discipline.Design:
      return "Design";
    case Discipline.Development:
      return "Development";
    case Discipline.StrategyAndProduct:
      return "Strategy & product";
  }
}

export function getDisciplineColorPair(discipline: Discipline): ColorPair {
  switch (discipline) {
    case Discipline.Design:
      return colorPairs.orange;
    case Discipline.Development:
      return colorPairs.darkBlue;
    case Discipline.StrategyAndProduct:
      return colorPairs.teal100;
  }
}
