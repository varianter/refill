import { colors, type ColorPair } from "../../utils/colors";
import { getDisciplineColorPair } from "../../utils/discipline";
import { getColumn } from "../../utils/getColumm";
import type {
  ScheduleEntry,
  TalkDescriptionList,
} from "../../utils/schedule/types";

export const getSpeaker = (event: ScheduleEntry) => {
  return event.type !== "break" ? event.speaker : undefined;
};

export const getLocation = (event: ScheduleEntry): string => {
  return event.type !== "break" ? event.location : "";
};

export const getTalkDescription = (
  event: ScheduleEntry,
): TalkDescriptionList => {
  return event.type !== "break" ? event.talkDescription : [];
};

export const getColorPair = (event: ScheduleEntry): ColorPair | undefined => {
  return event.type === "talk"
    ? getDisciplineColorPair(event.discipline)
    : undefined;
};

export const getBorderColor = (
  colorPair: ColorPair | undefined,
): string | undefined => {
  if (colorPair?.color === colors.teal100) {
    return colors.tealDark;
  }
  return colorPair?.color;
};

export const getCardColumn = (colorPair: ColorPair | undefined) => {
  return colorPair ? getColumn(colorPair) : "unset";
};
