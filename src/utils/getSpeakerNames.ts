import type { Speaker } from "./schedule/types";

export function getSpeakerNames(speakerNames: Speaker) {
  return Array.isArray(speakerNames) ? speakerNames.join(" & ") : speakerNames;
}
