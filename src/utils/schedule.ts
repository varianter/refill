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

type Block = {
  title: string;
  start: string;
  end: string;
  tracks: Track[];
};

type Schedule = Block[];

export const schedule: Schedule = [
  {
    title: "Reception & opening keynote",
    start: "08:00",
    end: "09:45",
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
    title: "Lunch",
    start: "09:45",
    end: "10:00",
    tracks: [
      [
        {
          id: "4",
          title: "Break",
          location: "",
          from: "09:45",
          to: "10:00",
        },
      ],
    ],
  },
  {
    title: "Block 1",
    start: "10:00",
    end: "10:40",
    tracks: [
      [
        {
          id: "5",
          title:
            "Designing with the mind in mind - Creating digital products that align with the human behaviour",
          location: "Palmsalen",
          from: "10:00",
          to: "10:20",
          color: colorPairs.orange,
          speaker: "Vegard Ingebrigtsen Feste",
        },
        {
          id: "6",
          title: "Client Side Solutions Can Have DevOps Too",
          location: "Aulan",
          from: "10:00",
          to: "10:40",
          color: colorPairs.darkBlue,
          speaker: "Mikael Brevik",
        },
        {
          id: "7",
          title:
            "How building future scenarios shaped the product strategy of Feide",
          location: "No. 314",
          from: "10:00",
          to: "10:20",
          color: colorPairs.teal100,
          speaker: "Tonje Evanger & Hildegunn Vada",
        },
      ],
      [
        {
          id: "8",
          title: "The designers Anti to-do list",
          location: "Palmsalen",
          from: "10:20",
          to: "10:40",
          color: colorPairs.orange,
          speaker: "Ole Petter Klæstad",
        },
        {
          id: "",
          title: "",
          location: "",
          from: "",
          to: "",
        },
        {
          id: "10",
          title: "The Design Systems Graveyard",
          location: "No. 314",
          from: "10:20",
          to: "10:40",
          color: colorPairs.teal100,
          speaker: "Kristoffer Nordström",
        },
      ],
    ],
  },
  {
    title: "Short technical break",
    start: "10:40",
    end: "10:50",
    tracks: [
      [
        {
          id: "11",
          title: "Short technical break",
          location: "",
          from: "10:40",
          to: "10:50",
        },
      ],
    ],
  },
  {
    title: "Block 2",
    start: "10:50",
    end: "11:30",
    tracks: [
      [
        {
          id: "12",
          title: "Design meets Sustainable Business – an experiment",
          location: "Palmsalen",
          from: "10:50",
          to: "11:10",
          color: colorPairs.orange,
          speaker: "Anita Steinstad",
        },
        {
          id: "13",
          title:
            "What we learned rebuilding the largest Nordic electronic retail website in Next.js?",
          location: "Aulan",
          from: "10:50",
          to: "11:30",
          color: colorPairs.darkBlue,
          speaker: "Tomas Janson",
        },
        {
          id: "14",
          title: `Workshop: hvor man lærer hands on hvordan man kan bruke "MVP arket" til å definere MVP`,
          location: "No. 314",
          from: "10:50",
          to: "11:30",
          color: colorPairs.teal100,
          speaker: "Andreas Hartveit",
        },
      ],
      [
        {
          id: "15",
          title: "The designers Anti to-do list",
          location: "Palmsalen",
          from: "11:10",
          to: "11:30",
          color: colorPairs.orange,
          speaker: "Vikas Gupta",
        },
        {
          id: "",
          title: "",
          location: "",
          from: "",
          to: "",
        },
        {
          id: "14",
          title: "",
          location: "",
          from: "",
          to: "",
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
          id: "18",
          title: "Lunch break",
          location: "",
          from: "11:30",
          to: "12:30",
        },
      ],
    ],
  },
  {
    title: "Block 3",
    start: "12:30",
    end: "13:10",
    tracks: [
      [
        {
          id: "19",
          title:
            "Ten Reasons Your Application Isn't Accessible and What You Can Do About It",
          location: "Palmsalen",
          from: "12:30",
          to: "12:50",
          color: colorPairs.darkBlue,
          speaker: "Elise Kristiansen",
        },
        {
          id: "20",
          title: "Help! They Call Me Senior",
          location: "Aulan",
          from: "12:30",
          to: "12:40",
          color: colorPairs.orange,
          speaker: "Julia Kuhley",
        },
        {
          id: "21",
          title:
            "Digital Drivkraft: Driving Transformation in Technology, Processes, and Governance for the National Road Database",
          location: "No. 314",
          from: "12:30",
          to: "12:50",
          color: colorPairs.teal100,
          speaker: "Malin C. Karlsen",
        },
      ],
      [
        {
          id: "22",
          title: "Why does Fetch make you wait twice?",
          location: "Palmsalen",
          from: "12:50",
          to: "13:00",
          color: colorPairs.darkBlue,
          speaker: "Truls Henrik Jakobsen",
        },
        {
          id: "23",
          title: "Dark Patterens and The Pickpockets of the internet",
          location: "Aulan",
          from: "12:40",
          to: "13:00",
          color: colorPairs.orange,
          speaker: "Jonas Lillevold",
        },
        {
          id: "24",
          title: "TBA",
          location: "No. 314",
          from: "12:50",
          to: "13:10",
          color: colorPairs.teal100,
        },
      ],
      [
        {
          id: "25",
          title:
            "The Junior Revolution: Cultivating Tomorrow’s Senior Consultants Today",
          location: "Palmsalen",
          from: "13:00",
          to: "13:10",
          color: colorPairs.darkBlue,
          speaker: "Thomas Lyngtun Hansen",
        },
        {
          id: "26",
          title: "TBA",
          location: "Aulan",
          from: "13:00",
          to: "13:10",
          color: colorPairs.orange,
        },
        {
          id: "24",
          title: "TBA",
          location: "No. 314",
          from: "12:50",
          to: "13:10",
          color: colorPairs.teal100,
        },
      ],
    ],
  },
  {
    title: "Short technical break",
    start: "13:10",
    end: "13:20",
    tracks: [
      [
        {
          id: "28",
          title: "Short technical break",
          location: "",
          from: "13:10",
          to: "13:20",
        },
      ],
    ],
  },
  {
    title: "Block 4",
    start: "13:20",
    end: "14:00",
    tracks: [
      [
        {
          id: "29",
          title: "Test side-effects and behaviour, don't mock them!",
          location: "Palmsalen",
          from: "13:20",
          to: "14:00",
          color: colorPairs.darkBlue,
          speaker: "Christian Brevik",
        },
        {
          id: "30",
          title: "Design for Data Quality",
          location: "Aulan",
          from: "13:20",
          to: "14:00",
          color: colorPairs.orange,
          speaker: "Rolf Anders Storset",
        },
        {
          id: "31",
          title:
            "From Necessity to Opportunity: Universal Design as a Product Strategy",
          location: "No. 314",
          from: "13:20",
          to: "13:30",
          color: colorPairs.teal100,
          speaker: "Marius Krakeli",
        },
      ],
    ],
  },
  {
    title: "Break",
    start: "14:00",
    end: "14:30",
    tracks: [
      [
        {
          id: "32",
          title: "Break",
          location: "",
          from: "14:00",
          to: "14:30",
        },
      ],
    ],
  },
  {
    title: "Block 5",
    start: "14:30",
    end: "15:10",
    tracks: [
      [
        {
          id: "33",
          title: "TBA",
          location: "Palmsalen",
          from: "14:30",
          to: "16:00",
          color: colorPairs.orange,
        },
        {
          id: "34",
          title: "Designing systems with CSS",
          location: "Aulan",
          from: "14:30",
          to: "15:10",
          color: colorPairs.darkBlue,
          speaker: "Jacob Berglund",
        },
        {
          id: "35",
          title:
            "Kundresor som ett strategiskt verktyg för deras mest affärskritsika kundresor",
          location: "No. 314",
          from: "14:30",
          to: "14:50",
          color: colorPairs.teal100,
          speaker: "Liza Hansson & Länsförsäkringar",
        },
      ],
    ],
  },
  {
    title: "Short technical break",
    start: "15:10",
    end: "15:20",
    tracks: [
      [
        {
          id: "36",
          title: "Short technical break",
          location: "",
          from: "15:10",
          to: "15:20",
        },
      ],
    ],
  },
  {
    title: "Block 6",
    start: "15:20",
    end: "16:00",
    tracks: [
      [
        {
          id: "37",
          title:
            "Collaborative Storytelling in UX: Bridging Design, Development and Strategy for Lasting Impact.",
          location: "Palmsalen",
          from: "15:20",
          to: "16:00",
          color: colorPairs.orange,
          speaker: "Andrea Hvattum",
        },
        {
          id: "38",
          title: "Why you should put secrets in git",
          location: "Aulan",
          from: "15:20",
          to: "15:40",
          color: colorPairs.darkBlue,
          speaker: "Nikolai Norman Andersen",
        },
        {
          id: "39",
          title: "Strategy for a digitalised world",
          location: "No. 314",
          from: "15:20",
          to: "16:00",
          color: colorPairs.teal100,
          speaker: "David Dinka",
        },
      ],
      [
        {
          id: "",
          title: "",
          location: "",
          from: "",
          to: "",
        },
        {
          id: "41",
          title: "Let's ditch Javascript, and start using WebAssembly",
          location: "Aulan",
          from: "15:40",
          to: "16:00",
          color: colorPairs.darkBlue,
          speaker: "Yoeri Otten",
        },
        {
          id: "",
          title: "",
          location: "",
          from: "",
          to: "",
        },
      ],
    ],
  },
  {
    title: "Break",
    start: "16:00",
    end: "16:30",
    tracks: [
      [
        {
          id: "43",
          title: "Break",
          location: "",
          from: "16:00",
          to: "16:30",
        },
      ],
    ],
  },
  {
    title: "Networking & closing",
    start: "16:30",
    end: "17:00",
    tracks: [
      [
        {
          id: "44",
          title: "The Big Tech Quiz Of The Year",
          location: "Palmsalen",
          from: "16:30",
          to: "17:00",
          speaker: "Mikael Brevik",
        },
      ],
      [
        {
          id: "45",
          title: "After-party 🥳",
          location: "Orangeriet",
          from: "17:00",
          to: "",
        },
      ],
    ],
  },
];
