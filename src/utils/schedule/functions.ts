import { schedule } from "./schedule";
import type { Block, CommonEvent, ScheduleEvent, Talk } from "./types";

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

export function getTalkById(talkId: string): Talk | undefined {
  const allTalks: Talk[] = schedule
    .flatMap((block) => block.tracks.flat())
    .filter((scheduleEntry) => scheduleEntry.type === "talk");

  return allTalks.find((t) => t.id === talkId);
}

function getCurrentTime(): string {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  return `${hours}:${minutes}`;
}

export function findTalkByTimeAndLocation(location: string) {
  const currentTime = timeToMinutes(getCurrentTime());

  const activeBlocks = schedule.filter(
    (block) =>
      timeToMinutes(block.start) <= currentTime &&
      timeToMinutes(block.end) >= currentTime,
  );

  const availableEvents = activeBlocks.flatMap((block) => block.tracks).flat();

  return (
    (availableEvents.find(
      (event) =>
        event.type !== "break" &&
        event.location === location &&
        timeToMinutes(event.from) <= currentTime &&
        timeToMinutes(event.to) >= currentTime,
    ) as Talk | CommonEvent) ?? null
  );
}
