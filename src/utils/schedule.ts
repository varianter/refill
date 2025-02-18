import { Discipline } from "../utils/discipline";
import { SpeakerName } from "./speakers";

interface ScheduleEvent {
  id: string;
  title: string;
  from: string;
  to: string;
}

export interface CommonEvent extends ScheduleEvent {
  type: "common";
  location: string;
  speaker?: SpeakerName | SpeakerName[];
}

export interface Talk extends ScheduleEvent {
  type: "talk";
  location: string;
  discipline: Discipline;
  speaker: SpeakerName | SpeakerName[];
}

export interface Break extends ScheduleEvent {
  type: "break";
}
export type ScheduleEntry = Talk | CommonEvent | Break;

export type Track = ScheduleEntry[];

type Block = {
  title: string;
  start: string;
  end: string;
  tracks: Track[];
};

type Schedule = Block[];

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

const { Design, Development, StrategyAndProduct } = Discipline;
const {
  None,
  VegardIngebrigtsenFeste,
  MalinCKarlsen,
  ChristianBrevik,
  AnitaSteinstad,
  StinaJanson,
  TomasJanson,
  HildegunnVada,
  OlePetterKlæstad,
  NikolaiNormanAndersen,
  TrulsHenrikJakobsen,
  ThomasLyngtunHansen,
  KristofferNordström,
  RolfAndersStorset,
  EliseKristiansen,
  AndreasHartveit,
  JonasLillevold,
  MariusKrakeli,
  JacobBerglund,
  TonjeEvanger,
  LizaHansson,
  JuliaKuhley,
  YoeriOtten,
  VikasGupta,
  DavidDinka,
  MikaelBrevik,
} = SpeakerName;

export const schedule: Schedule = [
  {
    title: "Reception & opening keynote",
    start: "08:00",
    end: "09:45",
    tracks: [
      [
        {
          type: "common",
          id: "1",
          title: "Coffee & networking",
          location: "Orangeriet",
          from: "08:00",
          to: "08:45",
        },
      ],
      [
        {
          type: "common",
          id: "2",
          title: "Opening remarks",
          location: "Palmsalen",
          from: "08:45",
          to: "09:00",
        },
      ],
      [
        {
          type: "common",
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
          type: "break",
          id: "4",
          title: "Break",
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
          type: "talk",
          id: "5",
          title:
            "Designing with the mind in mind - Creating digital products that align with the human behaviour",
          location: "Palmsalen",
          from: "10:00",
          to: "10:20",
          discipline: Design,
          speaker: VegardIngebrigtsenFeste,
        },
        {
          type: "talk",
          id: "6",
          title: "Client Side Solutions Can Have DevOps Too",
          location: "Aulan",
          from: "10:00",
          to: "10:40",
          discipline: Development,
          speaker: MikaelBrevik,
        },
        {
          type: "talk",
          id: "7",
          title:
            "How building future scenarios shaped the product strategy of Feide",
          location: "No. 314",
          from: "10:00",
          to: "10:20",
          discipline: StrategyAndProduct,
          speaker: [TonjeEvanger, HildegunnVada],
        },
        {
          type: "talk",
          id: "8",
          title: "The designers Anti to-do list",
          location: "Palmsalen",
          from: "10:20",
          to: "10:40",
          discipline: Design,
          speaker: OlePetterKlæstad,
        },
        {
          type: "talk",
          id: "10",
          title: "The Design Systems Graveyard",
          location: "No. 314",
          from: "10:20",
          to: "10:40",
          discipline: StrategyAndProduct,
          speaker: KristofferNordström,
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
          type: "break",
          id: "11",
          title: "Short technical break",
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
          type: "talk",
          id: "12",
          title: "Design meets Sustainable Business – an experiment",
          location: "Palmsalen",
          from: "10:50",
          to: "11:10",
          discipline: Design,
          speaker: AnitaSteinstad,
        },
        {
          type: "talk",
          id: "13",
          title:
            "What we learned rebuilding the largest Nordic electronic retail website in Next.js?",
          location: "Aulan",
          from: "10:50",
          to: "11:30",
          discipline: Development,
          speaker: TomasJanson,
        },
        {
          type: "talk",
          id: "14",
          title: `Workshop: hvor man lærer hands on hvordan man kan bruke "MVP arket" til å definere MVP`,
          location: "No. 314",
          from: "10:50",
          to: "11:30",
          discipline: StrategyAndProduct,
          speaker: AndreasHartveit,
        },
        {
          type: "talk",
          id: "15",
          title: "Exploring the 7 Powers in Strategic Design",
          location: "Palmsalen",
          from: "11:10",
          to: "11:30",
          discipline: Design,
          speaker: VikasGupta,
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
          type: "break",
          id: "18",
          title: "Lunch break",
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
          type: "talk",
          id: "19",
          title:
            "Ten Reasons Your Application Isn't Accessible and What You Can Do About It",
          location: "Palmsalen",
          from: "12:30",
          to: "12:50",
          discipline: Development,
          speaker: EliseKristiansen,
        },
        {
          type: "talk",
          id: "20",
          title: "Help! They Call Me Senior",
          location: "Aulan",
          from: "12:30",
          to: "12:40",
          discipline: Design,
          speaker: JuliaKuhley,
        },
        {
          type: "talk",
          id: "21",
          title:
            "Digital Drivkraft: Driving Transformation in Technology, Processes, and Governance for the National Road Database",
          location: "No. 314",
          from: "12:30",
          to: "12:50",
          discipline: StrategyAndProduct,
          speaker: MalinCKarlsen,
        },
        {
          type: "talk",
          id: "22",
          title: "Why does Fetch make you wait twice?",
          location: "Palmsalen",
          from: "12:50",
          to: "13:00",
          discipline: Development,
          speaker: TrulsHenrikJakobsen,
        },
        {
          type: "talk",
          id: "23",
          title: "Dark Patterens and The Pickpockets of the internet",
          location: "Aulan",
          from: "12:40",
          to: "13:00",
          discipline: Design,
          speaker: JonasLillevold,
        },
        {
          type: "talk",
          id: "24",
          title: "TBA",
          location: "No. 314",
          from: "12:50",
          to: "13:10",
          discipline: StrategyAndProduct,
          speaker: None,
        },
        {
          type: "talk",
          id: "25",
          title:
            "The Junior Revolution: Cultivating Tomorrow’s Senior Consultants Today",
          location: "Palmsalen",
          from: "13:00",
          to: "13:10",
          discipline: Development,
          speaker: ThomasLyngtunHansen,
        },
        {
          type: "talk",
          id: "24",
          title: "TBA",
          location: "Aulan",
          from: "13:00",
          to: "13:10",
          discipline: Design,
          speaker: None,
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
          type: "break",
          id: "28",
          title: "Short technical break",
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
          type: "talk",
          id: "29",
          title: "Test side-effects and behaviour, don't mock them!",
          location: "Palmsalen",
          from: "13:20",
          to: "14:00",
          discipline: Development,
          speaker: ChristianBrevik,
        },
        {
          type: "talk",
          id: "30",
          title: "Design for Data Quality",
          location: "Aulan",
          from: "13:20",
          to: "14:00",
          discipline: Design,
          speaker: RolfAndersStorset,
        },
        {
          type: "talk",
          id: "31",
          title:
            "From Necessity to Opportunity: Universal Design as a Product Strategy",
          location: "No. 314",
          from: "13:20",
          to: "13:30",
          discipline: StrategyAndProduct,
          speaker: MariusKrakeli,
        },
        {
          type: "talk",
          id: "41",
          title: "TBA",
          location: "No. 314",
          from: "13:30",
          to: "14:00",
          discipline: StrategyAndProduct,
          speaker: None,
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
          type: "break",
          id: "32",
          title: "Break",
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
          type: "talk",
          id: "33",
          title: "TBA",
          location: "Palmsalen",
          from: "14:30",
          to: "15:10",
          discipline: Design,
          speaker: None,
        },
        {
          type: "talk",
          id: "34",
          title: "Designing systems with CSS",
          location: "Aulan",
          from: "14:30",
          to: "15:10",
          discipline: Development,
          speaker: JacobBerglund,
        },
        {
          type: "talk",
          id: "35",
          title:
            "Customer journeys as a strategic tool for their most business-critical customer journeys.",
          location: "No. 314",
          from: "14:30",
          to: "14:50",
          discipline: StrategyAndProduct,
          speaker: [LizaHansson, StinaJanson],
        },
        {
          type: "talk",
          id: "42",
          title: "TBA",
          location: "No. 314",
          from: "13:30",
          to: "14:00",
          discipline: StrategyAndProduct,
          speaker: None,
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
          type: "break",
          id: "36",
          title: "Short technical break",
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
          type: "talk",
          id: "37",
          title: "TBA",
          location: "Palmsalen",
          from: "15:20",
          to: "16:00",
          discipline: Design,
          speaker: None,
        },
        {
          type: "talk",
          id: "38",
          title: "Why you should put secrets in git",
          location: "Aulan",
          from: "15:20",
          to: "15:40",
          discipline: Development,
          speaker: NikolaiNormanAndersen,
        },
        {
          type: "talk",
          id: "39",
          title: "Strategy for a digitalised world",
          location: "No. 314",
          from: "15:20",
          to: "16:00",
          discipline: StrategyAndProduct,
          speaker: DavidDinka,
        },
        {
          type: "talk",
          id: "40",
          title: "Let's ditch Javascript, and start using WebAssembly",
          location: "Aulan",
          from: "15:40",
          to: "16:00",
          discipline: Development,
          speaker: YoeriOtten,
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
          type: "break",
          id: "43",
          title: "Break",
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
          type: "common",
          id: "44",
          title: "The Big Tech Quiz Of The Year",
          location: "Palmsalen",
          from: "16:30",
          to: "17:00",
          speaker: MikaelBrevik,
        },
      ],
      [
        {
          type: "common",
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
