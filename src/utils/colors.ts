export const colors = {
  yellow: "#FFD02F",

  green: "#3ACA40",
  greenLight: "#B4F3B6",

  blue: "#3840FF",
  blueLight: "#B7E6FF",

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

type ColorNames = "yellow" | "green" | "greenLight" | "blue" | "blueLight";

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
  blue: {
    color: colors.blue,
    textColor: colors.text.primaryOnDark,
  },
  blueLight: {
    color: colors.blueLight,
    textColor: colors.text.primary,
  },
};
