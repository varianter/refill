import { colors, type ColorPair } from "../../utils/colors";
import type { ContentFormat } from "../../utils/contentFormat";
import { getDisciplineColorPair } from "../../utils/discipline";
import { getColumn } from "../../utils/getColumm";
import type {
  ScheduleEntry,
  DescriptionList,
} from "../../utils/schedule/types";

export const getSpeaker = (event: ScheduleEntry) => {
  return event.type !== "break" ? event.speaker : undefined;
};

export const getLocation = (event: ScheduleEntry): string => {
  return event.type !== "break" ? event.location : "";
};

export const getTalkDescription = (event: ScheduleEntry): DescriptionList => {
  return event.type !== "break" && event.talkDescription
    ? event.talkDescription
    : [];
};

export const getColorPair = (event: ScheduleEntry): ColorPair | undefined => {
  return event.type === "talk"
    ? getDisciplineColorPair(event.discipline)
    : undefined;
};

export const getContentFormat = (
  event: ScheduleEntry,
): ContentFormat | undefined => {
  return event.type === "common" ? event.format : undefined;
};

export const shouldBeLink = (event: ScheduleEntry): boolean => {
  return (
    event.type !== "break" &&
    event.speaker !== undefined &&
    event.talkDescription !== undefined
  );
};

export const getBorderColor = (
  colorPair: ColorPair | undefined,
): string | undefined => {
  if (colorPair?.color === colors.teal100) {
    return colors.tealDark;
  }
  return colorPair?.color;
};

export const getCardColumn = (location: string) => {
  return getColumn(location);
};
