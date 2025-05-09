import { schedule } from "./schedule";
import type {
  Block,
  CommonEvent,
  Schedule,
  ScheduleEvent,
  SpeakerEvent,
  Talk,
} from "./types";

function timeToMinutes(time: string): number {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
}

export function getSlotsAvaliable(block: Block): number {
  const blockStart = timeToMinutes(block.start);
  const blockEnd = timeToMinutes(block.end);
  const availableTime = blockEnd - blockStart;

  let shortestDuration = Infinity;

  block.tracks.flat().forEach((talk) => {
    const talkStart = timeToMinutes(talk.from);
    const talkEnd = timeToMinutes(talk.to);
    const talkDuration = talkEnd - talkStart;

    if (talkDuration < shortestDuration) {
      shortestDuration = talkDuration;
    }
  });

  const numTalks = Math.floor(availableTime / shortestDuration);

  return numTalks;
}

export function getShortestTalkDuration(block: Block): number {
  let shortestDuration = Infinity;

  block.tracks.flat().forEach((talk) => {
    const talkStart = timeToMinutes(talk.from);
    const talkEnd = timeToMinutes(talk.to);
    const talkDuration = talkEnd - talkStart;

    if (talkDuration < shortestDuration) {
      shortestDuration = talkDuration;
    }
  });

  return shortestDuration;
}

export function getTimesShortestFitInEvent(
  talk: ScheduleEvent,
  shortestDuration: number,
): number {
  const talkStart = timeToMinutes(talk.from);
  const talkEnd = timeToMinutes(talk.to);
  const talkDuration = talkEnd - talkStart;

  return Math.floor(talkDuration / shortestDuration);
}

export function getTalkById(talkId: string) {
  const allTalks: (Talk | CommonEvent)[] = schedule
    .flatMap((block) => block.tracks.flat())
    .filter((scheduleEntry) => scheduleEntry.type !== "break");

  return allTalks.find((t) => t.id === talkId);
}

function getDateToday() {
  return new Date();
}

export function getCurrentTimeInMinutes(): number {
  const now = getDateToday();
  return now.getHours() * 60 + now.getMinutes();
}

function isSameDate(date1: Date, date2: Date): boolean {
  return (
    date1.getDate() === date2.getDate() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getFullYear() === date2.getFullYear()
  );
}

export function isTalkActive(
  speakerEvent: SpeakerEvent,
  currentTime: number,
): boolean {
  const conferanceDate = new Date(2025, 3, 4);
  const today = getDateToday();

  if (
    !isSameDate(conferanceDate, today) ||
    speakerEvent.speaker === undefined
  ) {
    return false;
  }
  return (
    timeToMinutes(speakerEvent.from) <= currentTime &&
    timeToMinutes(speakerEvent.to) > currentTime
  );
}

function filterSpeakerEventByLocation(
  speakerEvent: SpeakerEvent[],
  location: string,
): SpeakerEvent[] {
  return speakerEvent.filter((talk) => talk.location === location);
}

function getAllSpeakerEventsFromSchedule(schedule: Schedule) {
  return schedule.flatMap((block) =>
    block.tracks.flatMap((track) =>
      track.filter(
        (entry): entry is SpeakerEvent =>
          entry.type === "talk" || entry.type === "common",
      ),
    ),
  );
}

function findCurrentSpeakerEvent(
  speakerEvent: SpeakerEvent[],
  currentTime: number,
): Talk | CommonEvent | undefined {
  return speakerEvent.find((speakerEvent) =>
    isTalkActive(speakerEvent, currentTime),
  );
}

export function findSpeakerEventByTimeAndLocation(
  location: string,
): SpeakerEvent | undefined {
  const currentTime = getCurrentTimeInMinutes();
  const allSpeakerEvents = getAllSpeakerEventsFromSchedule(schedule);
  const locationSpeakerEvent = filterSpeakerEventByLocation(
    allSpeakerEvents,
    location,
  );
  const currentSpeakerEvent = findCurrentSpeakerEvent(
    locationSpeakerEvent,
    currentTime,
  );
  return currentSpeakerEvent;
}
