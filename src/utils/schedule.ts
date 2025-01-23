type Talk = {
  title: string;
  where: string;
  from: string;
  to: string;
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

export const session: Session = {
  title: "Reception & opening keynote",
  start: "08:00",
  end: "10:00",
  tracks: [
    [
      {
        title: "Coffee & networking",
        where: "Orangeriet",
        from: "08:00",
        to: "08:45",
      },
    ],
    [
      {
        title: "Opening remarks",
        where: "Palmsalen",
        from: "08:45",
        to: "09:00",
      },
    ],
    [
      {
        title: "Design meets Sustainable Business – an experiment",
        where: "Palmsalen",
        from: "09:00",
        to: "09:45",
        speaker: "Anita Steinstad",
      },
    ],
  ],
};

export const schedule: Schedule = [
  {
    title: "Reception & opening keynote",
    start: "08:00",
    end: "10:00",
    tracks: [
      [
        {
          title: "Coffee & networking",
          where: "Orangeriet",
          from: "08:00",
          to: "08:45",
        },
      ],
      [
        {
          title: "Opening remarks",
          where: "Palmsalen",
          from: "08:45",
          to: "09:00",
        },
      ],
      [
        {
          title: "Design meets Sustainable Business – an experiment",
          where: "Palmsalen",
          from: "09:00",
          to: "09:45",
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
          where: "Palmsalen",
          from: "10:00",
          to: "10:20",
        },
        {
          speaker: "Mikael Brevik",
          title: "Client Side Solutions Can Have DevOps Too",
          where: "Aulan",
          from: "Aulan",
          to: "10:40",
        },
        {
          speaker: "Mikael Brevik",
          title: "Client Side Solutions Can Have DevOps Too",
          where: "Aulan",
          from: "Aulan",
          to: "10:40",
        },
      ],
      [
        {
          title: "",
          where: "",
          from: "",
          to: "",
        },
      ],
      [
        {
          title: "",
          where: "",
          from: "",
          to: "",
          speaker: "",
        },
      ],
    ],
  },
];
