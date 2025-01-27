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
          title: "Keynotes",
          location: "Palmsalen",
          from: "09:00",
          to: "09:45",
          color: colorPairs.yellow,
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
          title: "Design track",
          location: "Palmsalen",
          from: "10:00",
          to: "11:30",
          color: colorPairs.blueAccent,
        },
        {
          title: "Developer track",
          location: "Aulan",
          from: "10:00",
          to: "11:30",
          color: colorPairs.redAccent,
        },
        {
          title: "Project managment track",
          location: "No. 314",
          from: "10:00",
          to: "11:30",
          color: colorPairs.greenSubtle,
        },
      ],
      [
        {
          title: "Lunch break",
          location: "Orangeriet",
          from: "11:30",
          to: "12:30",
          color: colorPairs.purpleAccent,
        },
      ],
    ],
  },
  {
    title: "Session 2",
    start: "12:30",
    end: "14:00",
    tracks: [
      [
        {
          title: "Design track",
          location: "Palmsalen",
          from: "12:30",
          to: "14:00",
          color: colorPairs.blueAccent,
        },
        {
          title: "Developer track",
          location: "Aulan",
          from: "12:30",
          to: "14:00",
          color: colorPairs.redAccent,
        },
        {
          title: "Project managment track",
          location: "No. 314",
          from: "12:30",
          to: "14:00",
          color: colorPairs.greenSubtle,
        },
      ],
      [
        {
          title: "Refreshments, mingling & ???",
          location: "Orangeriet",
          from: "14:00",
          to: "14:30",
          color: colorPairs.purpleAccent,
        },
      ],
    ],
  },
  {
    title: "Session 3",
    start: "14:30",
    end: "16:00",
    tracks: [
      [
        {
          title: "Design track",
          location: "Palmsalen",
          from: "14:30",
          to: "16:00",
          color: colorPairs.blueAccent,
        },
        {
          title: "Developer track",
          location: "Aulan",
          from: "14:30",
          to: "16:00",
          color: colorPairs.redAccent,
        },
        {
          title: "Project managment track",
          location: "No. 314",
          from: "14:30",
          to: "16:00",
          color: colorPairs.greenSubtle,
        },
      ],
    ],
  },
  {
    title: "Networking & closing",
    start: "16:00",
    end: "17:30",
    tracks: [
      [
        {
          title: "Refreshments, mingling & ???",
          location: "Palmsalen",
          from: "16:00",
          to: "16:30",
          color: colorPairs.purpleAccent,
        },
      ],
      [
        {
          title: "Shared track",
          location: "Palmsalen",
          from: "16:30",
          to: "17:10",
          color: colorPairs.yellow,
        },
      ],
      [
        {
          title: "After-party 🥳",
          location: "Palmsalen",
          from: "17:30",
          to: "",
          color: colorPairs.purpleAccent,
        },
      ],
    ],
  },
];
