export function getColumn(location: string) {
  if (location === "Palmsalen") {
    return 1;
  } else if (location === "Aulan") {
    return 2;
  } else {
    return 3;
  }
}

export type Column = 1 | 2 | 3 | "unset";
