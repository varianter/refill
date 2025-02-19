import type { Discipline } from "../discipline";
import type { SpeakerName } from "../speakers";

type Bulletpoints = {
  bulletpointsDescription: string;
  BulletpointsList: string[];
};

export type TalkDescription = string | Bulletpoints;
export type TalkDescriptionList = (string | Bulletpoints)[];

export interface ScheduleEvent {
  id: string;
  title: string;
  from: string;
  to: string;
}

export interface CommonEvent extends ScheduleEvent {
  type: "common";
  location: string;
  speaker?: SpeakerName | SpeakerName[];
  talkDescription: TalkDescriptionList;
}

export interface Talk extends ScheduleEvent {
  type: "talk";
  location: string;
  discipline: Discipline;
  speaker: SpeakerName | SpeakerName[];
  talkDescription: TalkDescriptionList;
}

export interface Break extends ScheduleEvent {
  type: "break";
}
export type ScheduleEntry = Talk | CommonEvent | Break;

export type Track = ScheduleEntry[];

export type Block = {
  title: string;
  start: string;
  end: string;
  tracks: Track[];
};

export type Schedule = Block[];
