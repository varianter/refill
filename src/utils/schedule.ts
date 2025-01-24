import { colorPairs, type ColorPair } from "./colors";

type Talk = {
  title: string;
  location: string;
  from: string;
  to: string;
  color: ColorPair;
  speaker?: string;
};

export type Track = Talk[];

type Session = {
  title: string;
  start: string;
  end: string;
  tracks: Track[];
};

type Schedule = Session[];

export const schedule: Schedule = [
  {
    title: "Reception & opening keynote",
    start: "08:00",
    end: "10:00",
    tracks: [
      [
        {
          title: "Coffee & networking",
          location: "Orangeriet",
          from: "08:00",
          to: "08:45",
          color: colorPairs.purpleAccent,
        },
      ],
      [
        {
          title: "Opening remarks",
          location: "Palmsalen",
          from: "08:45",
          to: "09:00",
          color: colorPairs.purpleAccent,
        },
      ],
      [
        {
          title: "Design meets Sustainable Business – an experiment",
          location: "Palmsalen",
          from: "09:00",
          to: "09:45",
          color: colorPairs.yellow,
          speaker: "Anita Steinstad",
        },
      ],
    ],
  },
  {
    title: "Session 1",
    start: "10:00",
    end: "11:30",
    tracks: [
      [
        {
          speaker: "Vegard Ingebrigtsen Feste",
          title:
            "Designing with the mind in mind - Creating digital products that align with the human behaviour",
          location: "Palmsalen",
          from: "10:00",
          to: "10:20",
          color: colorPairs.blueAccent,
        },
        {
          speaker: "Mikael Brevik",
          title: "Client Side Solutions Can Have DevOps Too",
          location: "Aulan",
          from: "10:00",
          to: "10:40",
          color: colorPairs.redAccent,
        },
        {
          speaker: "Mikael Brevik",
          title: "Client Side Solutions Can Have DevOps Too",
          location: "No. 314",
          from: "10:00",
          to: "10:40",
          color: colorPairs.greenSubtle,
        },
      ],
    ],
  },
];
