export function getColumn(location: string) {
  if (location === "Storsal") {
    return 1;
  } else if (location === "Kinosal") {
    return 2;
  } else if (location === "Bibliotek") {
    return 3;
  } else {
    return "unset";
  }
}

export type Column = 1 | 2 | 3 | "unset";
