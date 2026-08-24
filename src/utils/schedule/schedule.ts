import { Discipline } from "../discipline";
import { SpeakerName } from "../speakers";
import type { Schedule } from "./types";

const { Design, Development, StrategyAndProduct } = Discipline;
const {
  TBA,
  MikaelBrevik,
  TonjeEvanger,
  AnnaEkblom,
  Malin,
  TormodLiseth,
  OlePetterKlæstad,
  JuliaKuhley,
  Stian,
  JacobBerglund,
  Elise,
  Svanhild,
  Nikolai,
} = SpeakerName;

export const schedule: Schedule = [
  {
    title: "Åpning m/ Mikael og Tonje",
    start: "10:00",
    end: "10:05",
    tracks: [
      [
        {
          type: "common",
          id: "1",
          title: "Åpning m/ Mikael og Tonje",
          location: "Storsal",
          from: "10:00",
          to: "10:05",
          speaker: [MikaelBrevik, TonjeEvanger],
        },
      ],
    ],
  },
  {
    title: "Keynote: Anna Ekblom om «Positiv friksjon og meningsutveksling»",
    start: "10:05",
    end: "10:50",
    tracks: [
      [
        {
          type: "common",
          id: "2",
          title:
            "Keynote: Anna Ekblom om «Positiv friksjon og meningsutveksling»",
          location: "Storsal",
          from: "10:05",
          to: "10:50",
          speaker: AnnaEkblom,
          talkDescription: ["TBA"],
          speakerDescription: ["TBA"],
        },
      ],
    ],
  },
  {
    title: "Pause",
    start: "10:50",
    end: "11:05",
    tracks: [
      [
        {
          type: "break",
          id: "3",
          title: "Pause",
          from: "10:50",
          to: "11:05",
        },
      ],
    ],
  },
  {
    title: "Block 1",
    start: "11:05",
    end: "12:00",
    tracks: [
      [
        {
          type: "talk",
          id: "4",
          title: "Produktledelse er (heller) ikke the new snake oil",
          location: "Storsal",
          from: "11:05",
          to: "11:23",
          discipline: StrategyAndProduct,
          speaker: Malin,
          talkDescription: [
            "Produktledelses-vinden blåser kraftig gjennom Norge, og prosjektet er erklært dødt, uaktuelt, old-school, kontra-produktivt, you name it. Det tror jeg er feil! Kom og hør hvorfor :)",
          ],
        },
        {
          type: "talk",
          id: "7",
          title: "React Won. So Why does the web feel so broken?",
          location: "Kinosal",
          from: "11:05",
          to: "12:00",
          discipline: Development,
          speaker: MikaelBrevik,
          talkDescription: ["TBA"],
        },
        {
          type: "common",
          id: "8",
          title: "Debatt: Design og AI",
          location: "Bibliotek",
          from: "11:05",
          to: "12:00",
          talkDescription: ["TBA"],
        },
        {
          type: "talk",
          id: "5",
          title: "Temp-love",
          location: "Storsal",
          from: "11:23",
          to: "11:41",
          discipline: Development,
          speaker: TormodLiseth,
          talkDescription: [
            "Forbannelsen fra filmmusikk-verdenen har kommet til tech. Hvilke alternativ har man når interaktive mockups og generiske prototyper blir grunnlaget for utvikling?",
          ],
        },
        {
          type: "talk",
          id: "6",
          title: "Friction as a feature",
          location: "Storsal",
          from: "11:41",
          to: "12:00",
          discipline: Design,
          speaker: [OlePetterKlæstad, JuliaKuhley],
          talkDescription: [
            "Core theme: friction as a productive force in the design process",
            {
              bulletpointsDescription: "This talk explores:",
              BulletpointsList: [
                '"Interrogator agent" — an agent that asks probing questions to surface hidden assumptions and problems, helping designers think more critically before jumping to solutions',
                "Prompting and getting a solution too quickly can bypass valuable reflection",
                "System 1 vs. System 2 thinking angle",
              ],
            },
          ],
        },
      ],
    ],
  },
  {
    title: "Lunsj",
    start: "12:00",
    end: "13:00",
    tracks: [
      [
        {
          type: "break",
          id: "9",
          title: "Lunsj",
          from: "12:00",
          to: "13:00",
        },
      ],
    ],
  },
  {
    title: "Block 2",
    start: "13:00",
    end: "13:45",
    tracks: [
      [
        {
          type: "talk",
          id: "10",
          title: "Programming for fun in the age of AI",
          location: "Storsal",
          from: "13:00",
          to: "13:15",
          discipline: Development,
          speaker: Stian,
          talkDescription: [
            "Programming stupid things for fun is... well, fun. Now a days we could get agents to do the programming, and we would be left with all the fun.",
            "Would we though? Is the fun in the result or the process? Is programming for shits and giggles even more important now than ever? If so, why?",
          ],
        },
        {
          type: "common",
          id: "13",
          title: "Workshop: Kommunikasjon & Personlighetstyper",
          location: "Kinosal",
          from: "13:00",
          to: "13:45",
          speaker: TBA,
          talkDescription: ["TBA"],
        },
        {
          type: "common",
          id: "14",
          title: "Lesehesten Live",
          location: "Bibliotek",
          from: "13:00",
          to: "13:45",
          speaker: TBA,
          talkDescription: ["TBA"],
        },
        {
          type: "talk",
          id: "11",
          title: "Variants Varde",
          location: "Storsal",
          from: "13:15",
          to: "13:30",
          discipline: Development,
          speaker: JacobBerglund,
          talkDescription: [
            "Varde är väldigt _opininated_ å denna talken blir spicy.",
          ],
        },
        {
          type: "talk",
          id: "12",
          title: "Reckless use of AI is unethical",
          location: "Storsal",
          from: "13:30",
          to: "13:45",
          discipline: Development,
          speaker: Elise,
          talkDescription: ["TBA"],
        },
      ],
    ],
  },
  {
    title: "Pause",
    start: "13:45",
    end: "14:00",
    tracks: [
      [
        {
          type: "break",
          id: "15",
          title: "Pause",
          from: "13:45",
          to: "14:00",
        },
      ],
    ],
  },
  {
    title: "Block 3",
    start: "14:00",
    end: "14:45",
    tracks: [
      [
        {
          type: "talk",
          id: "16",
          title: "Eksperimentering i Ruter-appen for å redusere …",
          location: "Storsal",
          from: "14:00",
          to: "14:20",
          discipline: Design,
          speaker: Svanhild,
          talkDescription: ["TBA"],
        },
        {
          type: "common",
          id: "18",
          title: "Discomfort Zone: 4 impro lyntaler",
          location: "Kinosal",
          from: "14:00",
          to: "14:45",
          speaker: TBA,
          talkDescription: ["TBA"],
        },
        {
          type: "common",
          id: "19",
          title: "Idiotrådet",
          location: "Bibliotek",
          from: "14:00",
          to: "14:45",
          speaker: TBA,
          talkDescription: ["TBA"],
        },
        {
          type: "talk",
          id: "17",
          title: "How to Keep Secrets from your Agent",
          location: "Storsal",
          from: "14:20",
          to: "14:40",
          discipline: Development,
          speaker: Nikolai,
          talkDescription: ["TBA"],
        },
      ],
    ],
  },
  {
    title: "Bollepause (Andreas)",
    start: "14:45",
    end: "15:05",
    tracks: [
      [
        {
          type: "break",
          id: "20",
          title: "Bollepause (Andreas)",
          from: "14:45",
          to: "15:05",
        },
      ],
    ],
  },
  {
    title: "Block 4",
    start: "15:05",
    end: "15:50",
    tracks: [
      [
        {
          type: "common",
          id: "21",
          title: "FishBowl og diskusjon – Unpopular Opinion style",
          location: "Kinosal",
          from: "15:05",
          to: "15:50",
          speaker: TBA,
          talkDescription: ["TBA"],
        },
        {
          type: "common",
          id: "22",
          title: "Kortslutning Live",
          location: "Bibliotek",
          from: "15:05",
          to: "15:50",
          speaker: TBA,
          talkDescription: ["TBA"],
        },
      ],
    ],
  },
  {
    title: "Pause",
    start: "15:50",
    end: "16:00",
    tracks: [
      [
        {
          type: "break",
          id: "23",
          title: "Pause",
          from: "15:50",
          to: "16:00",
        },
      ],
    ],
  },
  {
    title: "TownHall Live + Øl",
    start: "16:00",
    end: "17:00",
    tracks: [
      [
        {
          type: "common",
          id: "24",
          title: "TownHall Live + Øl",
          location: "Storsal",
          from: "16:00",
          to: "17:00",
          speaker: TBA,
          talkDescription: ["TBA"],
        },
      ],
    ],
  },
  {
    title: "Middag og quiz",
    start: "17:00",
    end: "18:30",
    tracks: [
      [
        {
          type: "common",
          id: "25",
          title: "Middag og quiz",
          location: "Skraa",
          from: "17:00",
          to: "18:30",
          speaker: TBA,
          talkDescription: ["TBA"],
        },
      ],
    ],
  },
  {
    title: "Sosialt",
    start: "18:30",
    end: "",
    tracks: [
      [
        {
          type: "common",
          id: "26",
          title: "Sosialt",
          location: "Chiruto",
          from: "18:30",
          to: "",
          speaker: TBA,
          talkDescription: ["TBA"],
        },
      ],
    ],
  },
];
