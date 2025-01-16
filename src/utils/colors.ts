export const colors = {
  yellow: "#FFD02F",

  green: "#3ACA40",
  greenLight: "#B4F3B6",
  greenSubtle: "#DAFBDC",

  blue: "#3840FF",
  blueAccent: "#8FC3FF",
  blueLight: "#B7E6FF",

  redAccent: "#FF8183",

  background: {
    primary: "#fafafa",
    dark: "#2D2D2D",
  },

  text: {
    primary: "#0A0B0B",
    primaryOnDark: "#FAFAFA",
    tertiary: "#5E5E5E",
  },
};

export type ColorPair = {
  color: string;
  textColor: string;
};

type ColorNames =
  | "yellow"
  | "green"
  | "greenLight"
  | "greenSubtle"
  | "blue"
  | "blueAccent"
  | "blueLight"
  | "redAccent";

export const colorPairs: Record<ColorNames, ColorPair> = {
  yellow: {
    color: colors.yellow,
    textColor: colors.text.primary,
  },
  green: {
    color: colors.green,
    textColor: colors.text.primary,
  },
  greenLight: {
    color: colors.greenLight,
    textColor: colors.text.primary,
  },
  greenSubtle: {
    color: colors.greenSubtle,
    textColor: colors.text.primary,
  },
  blue: {
    color: colors.blue,
    textColor: colors.text.primaryOnDark,
  },
  blueAccent: {
    color: colors.blueAccent,
    textColor: colors.text.primary,
  },
  blueLight: {
    color: colors.blueLight,
    textColor: colors.text.primary,
  },
  redAccent: {
    color: colors.redAccent,
    textColor: colors.text.primary,
  },
};
