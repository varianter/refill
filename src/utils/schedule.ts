import { colorPairs, type ColorPair } from "./colors";

type Talk = {
  id: string;
  title: string;
  location: string;
  from: string;
  to: string;
  color?: ColorPair;
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
          id: "1",
          title: "Coffee & networking",
          location: "Orangeriet",
          from: "08:00",
          to: "08:45",
        },
      ],
      [
        {
          id: "2",
          title: "Opening remarks",
          location: "Palmsalen",
          from: "08:45",
          to: "09:00",
        },
      ],
      [
        {
          id: "3",
          title: "Keynotes",
          location: "Palmsalen",
          from: "09:00",
          to: "09:45",
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
          id: "4",
          title: "Design track",
          location: "Palmsalen",
          from: "10:00",
          to: "11:30",
          color: colorPairs.orange,
        },
        {
          id: "5",
          title: "Developer track",
          location: "Aulan",
          from: "10:00",
          to: "11:30",
          color: colorPairs.darkBlue,
        },
        {
          id: "6",
          title: "Project management track",
          location: "No. 314",
          from: "10:00",
          to: "11:30",
          color: colorPairs.purple,
        },
      ],
    ],
  },
  {
    title: "Lunch",
    start: "11:30",
    end: "12:30",
    tracks: [
      [
        {
          id: "7",
          title: "Lunch break",
          location: "Orangeriet",
          from: "11:30",
          to: "12:30",
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
          id: "8",
          title: "Design track",
          location: "Palmsalen",
          from: "12:30",
          to: "14:00",
          color: colorPairs.orange,
        },
        {
          id: "9",
          title: "Developer track",
          location: "Aulan",
          from: "12:30",
          to: "14:00",
          color: colorPairs.darkBlue,
        },
        {
          id: "10",
          title: "Project management track",
          location: "No. 314",
          from: "12:30",
          to: "14:00",
          color: colorPairs.purple,
        },
      ],
    ],
  },
  {
    title: "Refreshments, mingling & ???",
    start: "14:00",
    end: "14:30",
    tracks: [
      [
        {
          id: "11",
          title: "Refreshments, mingling & ???",
          location: "Orangeriet",
          from: "14:00",
          to: "14:30",
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
          id: "12",
          title: "Design track",
          location: "Palmsalen",
          from: "14:30",
          to: "16:00",
          color: colorPairs.orange,
        },
        {
          id: "13",
          title: "Developer track",
          location: "Aulan",
          from: "14:30",
          to: "16:00",
          color: colorPairs.darkBlue,
        },
        {
          id: "14",
          title: "Project management track",
          location: "No. 314",
          from: "14:30",
          to: "16:00",
          color: colorPairs.purple,
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
          id: "15",
          title: "Refreshments, mingling & ???",
          location: "Palmsalen",
          from: "16:00",
          to: "16:30",
        },
      ],
      [
        {
          id: "16",
          title: "Shared track",
          location: "Palmsalen",
          from: "16:30",
          to: "17:10",
        },
      ],
      [
        {
          id: "17",
          title: "After-party 🥳",
          location: "Palmsalen",
          from: "17:30",
          to: "",
        },
      ],
    ],
  },
];
