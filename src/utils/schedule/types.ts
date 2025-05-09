import type { Discipline } from "../discipline";
import type { SpeakerName } from "../speakers";

type Bulletpoints = {
  bulletpointsDescription: string;
  BulletpointsList: string[];
};

export type Description = string | Bulletpoints;
export type DescriptionList = (string | Bulletpoints)[];

export interface ScheduleEvent {
  id: string;
  title: string;
  from: string;
  to: string;
}

export type Speaker = SpeakerName | SpeakerName[];

export interface CommonEvent extends ScheduleEvent {
  type: "common";
  location: string;
  speaker?: Speaker;
  talkDescription?: DescriptionList;
  speakerDescription?: DescriptionList;
}

export interface Talk extends ScheduleEvent {
  type: "talk";
  location: string;
  discipline: Discipline;
  speaker: Speaker;
  talkDescription?: DescriptionList;
  speakerDescription?: DescriptionList;
}

export interface Break extends ScheduleEvent {
  type: "break";
}
export type ScheduleEntry = Talk | CommonEvent | Break;
export type SpeakerEvent = Talk | CommonEvent;

export type Track = ScheduleEntry[];

export type Block = {
  title: string;
  start: string;
  end: string;
  tracks: Track[];
};

export type Schedule = Block[];
