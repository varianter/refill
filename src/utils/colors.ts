export const colors = {
  yellow: "#FFD02F",

  green: "#3ACA40",
  greenLight: "#B4F3B6",
  greenSubtle: "#DAFBDC",

  darkBlue: "#2F02F6",
  blue: "#3840FF",
  blueAccent: "#8FC3FF",
  blueLight: "#B7E6FF",

  teal50: "#D7FFF7",

  purpleAccent: "#DDD6FF",

  redAccent: "#FF8183",

  orange200: "#FFC9BC",

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
  | "darkBlue"
  | "blue"
  | "blueAccent"
  | "blueLight"
  | "teal50"
  | "purpleAccent"
  | "redAccent"
  | "orange200";

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
  darkBlue: {
    color: colors.darkBlue,
    textColor: colors.text.primaryOnDark,
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
  teal50: {
    color: colors.teal50,
    textColor: colors.text.primary,
  },
  purpleAccent: {
    color: colors.purpleAccent,
    textColor: colors.text.primary,
  },
  redAccent: {
    color: colors.redAccent,
    textColor: colors.text.primary,
  },
  orange200: {
    color: colors.orange200,
    textColor: colors.text.primary,
  },
};
