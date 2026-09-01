import { ContentFormat } from "../contentFormat";
import { Discipline } from "../discipline";
import { SpeakerName } from "../speakers";
import type { Schedule } from "./types";

const { Design, Development, StrategyAndProduct } = Discipline;
const { PanelDebate, Podcast, Workshop, Talks } = ContentFormat;
const {
  TBA,
  GodKommunikasjonPraksis,
  MikaelBrevik,
  TonjeEvanger,
  AnnaEkblom,
  MalinCKarlsen,
  TormodLiseth,
  OlePetterKlæstad,
  JuliaKuhley,
  Stian,
  MikaelBrevikAndStianMøllersen,
  JacobBerglund,
  EliseKristiansen,
  SvanhildEgge,
  NikolaiNormanAndersen,
  OddMortenSveås,
  LesehestenUtvikling,
  MariusKrakeli,
  Chiruto,
  AnitaSteinstad,
  HenrikkeØijordHaugan,
  RolfAndersStorset,
  AndreasHartveit,
} = SpeakerName;

export const schedule: Schedule = [
  {
    title: "Velkommen til Refill 2026",
    start: "10:00",
    end: "10:05",
    tracks: [
      [
        {
          type: "common",
          id: "1",
          title: "Velkommen til Refill 2026",
          location: "Felles (Storsal)",
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
          location: "Felles (Storsal)",
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
          id: "17",
          title: "How to Keep Secrets from your Agent",
          location: "Kinosal",
          from: "11:05",
          to: "11:30",
          discipline: Development,
          speaker: NikolaiNormanAndersen,
          talkDescription: [
            "Agents are taking your job, but can you at least keep your secrets? The last thing we want is agents and LLMs reading our secret values into context and sending them to someone else's computer. In this talk I will get into how to safely store secrets and how we can let our agents use these secrets without actually seeing them and potentially not even being able to access them at all.",
            "I will introduce you to how you can use encryption, key management and practical patterns like stdin-based handoff to let agents use secrets without dragging the plaintext into prompts, logs, chats or onto remote servers. There are some caveats, make sure you come and learn what they are!",
          ],
        },
        {
          type: "common",
          id: "8",
          title: "Debatt: Design og AI",
          location: "Bibliotek",
          from: "11:05",
          to: "12:00",
          discipline: Design,
          format: PanelDebate,
          speaker: [RolfAndersStorset, AndreasHartveit],
          talkDescription: [
            "Uavhengig av om vi ønsker det eller ikke, dyttes vi alle mot å gjøre oss opp en mening om hvordan nye teknologiske fremskritt påvirker arbeidet vårt. Den kommer gjerne frampå lunsjbordet, i Slack-tråder, eller i den gode uformelle samtalen. Men hvor står egentlig Variant-designeren når vi må sette ord på det?",
            "I denne debatten tar vi den uformelle samtalen opp på scenen. Gjennom en tett fasilitert debatt utforsker vi hvordan design og designerrollen endres av den teknologiske revolusjonen vi står, eller ikke står, midt i. Hvilke framtider drømmer vi om, hvilke behov har vi, og hva er det vi egentlig ligger våkne og bekymrer oss for?",
            "Her finnes ingen feil svar, og målet er ikke å finne fram til en felles konsensus. Målet er å bli litt klokere på mangfoldet av tanker som finnes i gruppen vår, enten de er filosofiske, etiske eller helt praktiske.",
            "Vi går sammen inn og sammen ut av en samtale om faget vi er glad i. Ta med meningene dine, vi lover å ta godt vare på dem.",
          ],
        },
        {
          type: "talk",
          id: "7",
          title: "React Won. So Why does the web feel so broken?",
          location: "Kinosal",
          from: "11:30",
          to: "11:55",
          discipline: Development,
          speaker: MikaelBrevik,
          talkDescription: ["TBA"],
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
          title: "Programmering for moro skyld i KI-alderen",
          location: "Kinosal",
          from: "13:00",
          to: "13:15",
          discipline: Development,
          speaker: Stian,
          talkDescription: [
            "Å programmere teite ting for moro skyld er... vel, moro. I disse dager kan vi få agenter til å gjøre programmeringen, og i teorien skal vi sitte igjen med alt det morsomme.",
            "Men gjør vi egentlig det? Finner vi det morsomme i resultatet eller prosessen? Er programmering for underholdning viktigere nå? Hvis så, hvorfor?",
          ],
        },
        // Removed for now, might want to re-add later
        // {
        //   type: "common",
        //   id: "18",
        //   title: "Discomfort Zone: 4 impro lyntaler",
        //   location: "Storsal",
        //   from: "13:00",
        //   to: "13:45",
        //   speaker: TBA,
        //   format: Talks,
        //   talkDescription: ["TBA"],
        // },
        {
          type: "common",
          id: "19",
          title: "Idiotrådet",
          location: "Bibliotek",
          from: "13:00",
          to: "13:45",
          speaker: GodKommunikasjonPraksis,
          format: PanelDebate,
          talkDescription: [
            "Vi er alle omgitt av idioter. Kollegaen som må vinne enhver diskusjon. Sjefen som endrer mening fem ganger på ti minutter. Vennen som analyserer en middagsavtale som om det var et regnskap.",
            "Men hva om de ikke er idioter, de bare kommuniserer på en annen måte enn deg?",
            "Idiotrådet er en live diskusjon inspirert av «Omgitt av idioter» og Thomas Eriksons fire personlighetstyper. Panelet tar for seg virkelige (anonymiserte) situasjoner sendt inn av deg og dine kolleger, diskuterer hvilke adferdstyper som er i spill, hvem som egentlig er idioten og om det finnes en vei ut av kaoset.",
            "Tenk «Lørdagsrådet», men med atferdspsykologi på menyen.",
            "Ta med deg de mest friksjonsrike historiene dine som vi kan ta oss noen friheter med på scenen.",
          ],
        },
        {
          type: "talk",
          id: "11",
          title: "Variants Varde: kanske ett designsystem",
          location: "Kinosal",
          from: "13:15",
          to: "13:30",
          discipline: [Development, Design],
          speaker: JacobBerglund,
          talkDescription: [
            "Varde är destillatet av allt jag tror på när det kommer till CSS, design tokens och färgsystem. Detta handlar om min filosofi runt det hela, vilka val jag tagit och varför.",
          ],
        },
        {
          type: "talk",
          id: "12",
          title: "Reckless use of AI is unethical",
          location: "Kinosal",
          from: "13:30",
          to: "13:45",
          discipline: Development,
          speaker: EliseKristiansen,
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
          title: "Eksperimentering i Ruter-appen for å redusere snikandel",
          location: "Kinosal",
          from: "14:00",
          to: "14:20",
          discipline: Design,
          speaker: SvanhildEgge,
          talkDescription: [
            "Ruter taper 500 mill kr årlig på sniking, der nesten 40% av snikerene har betalingsvilje men likevel ender opp uten billett. Hvordan kan vi bruke eksperimentering i Ruter-appen for å få flere av disse til å kjøpe ny billett når den gamle utløper, og dermed få ned antall snik?",
          ],
        },
        {
          type: "talk",
          id: "27",
          title: "Systemisk design møter friksjon",
          location: "Kinosal",
          from: "14:20",
          to: "14:30",
          discipline: Design,
          speaker: [AnitaSteinstad, HenrikkeØijordHaugan],
          talkDescription: [
            "Vi jobber alltid inne i noen andres system. Og alt vi lager er en intervensjon. Også koden.",
            'Så hvorfor jakter vi alltid på å fjerne friksjon? Noen ganger er poenget å legge den til. Tidlig, der det gjør vondt nå, så resten av systemet slipper å ta smellen senere.',
            'Og nei, dette er ikke et fag vi prøver å selge deg. "Design" i systemisk design utelukker ingen. Utvikler, prosjektleder, strateg, leder: dette er for deg også.',
            "Friksjonen møter du uansett. Spørsmålet er hva du gjør med den.",
            "Bli med på lyntalen og finn ut hva systemisk design faktisk er, og få en snikpremiere på verktøykassen vi bygger i Variant.",
          ],
        },
        {
          type: "common",
          id: "13",
          title: "Workshop for idioter",
          location: "Storsal",
          from: "14:00",
          to: "14:45",
          speaker: GodKommunikasjonPraksis,
          format: Workshop,
          talkDescription: [
            "Du trodde kanskje du lærte alt du trengte i Idiotrådet. Der tok du feil.",
            "I denne workshopen går vi dypere inn i personlighetstypene fra «Omgitt av idioter», og denne gangen er det din tur til å bryne deg på dem. I løpet av 45 minutter får du verktøyene til å bedre forstå hvorfor folk rundt deg kommuniserer og handler som de gjør, hva du kan gjøre med det i ulike situasjoner, og kanskje det mest spennende: hva det sier om deg selv.",
            "Passer perfekt for deg som vil ha mer enn bare innsikt og vil prøve det ut i praksis.",
          ],
        },
        {
          type: "common",
          id: "14",
          title: "Lesehesten Live",
          location: "Bibliotek",
          from: "14:00",
          to: "14:45",
          speaker: LesehestenUtvikling,
          format: Podcast,
          talkDescription: ["TBA"],
        },
      ],
    ],
  },
  {
    title: "Pause",
    start: "14:45",
    end: "15:05",
    tracks: [
      [
        {
          type: "break",
          id: "20",
          title: "Pause",
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
          type: "talk",
          id: "4",
          title: "Produktledelse er (heller) ikke the new snake oil",
          location: "Kinosal",
          from: "15:05",
          to: "15:20",
          discipline: StrategyAndProduct,
          speaker: MalinCKarlsen,
          talkDescription: [
            "Produktledelses-vinden blåser kraftig gjennom Norge, og prosjektet er erklært dødt, uaktuelt, old-school, kontra-produktivt, you name it. Det tror jeg er feil! Kom og hør hvorfor :)",
          ],
        },
        {
          type: "common",
          id: "21",
          title: "FishBowl og diskusjon – Unpopular Opinion style",
          location: "Storsal",
          from: "15:05",
          to: "15:50",
          speaker: TBA,
          format: PanelDebate,
          talkDescription: [
            "Upopulære meninger er sendt inn og nå skal de diskuteres. Møt opp, trekk tema fra hatten og bli med på diskusjonen!",
            "Reglene er enkle: Vil du si noe må du inn i panelet. Og der sitter du til neste rullering."
          ],
        },
        {
          type: "common",
          id: "22",
          title: "Kortslutning Live",
          location: "Bibliotek",
          from: "15:05",
          to: "15:50",
          speaker: MikaelBrevikAndStianMøllersen,
          talkDescription: ["Live-innspilling av podcasten Kortslutning."],
        },
        {
          type: "talk",
          id: "5",
          title: "Temp-love",
          location: "Kinosal",
          from: "15:20",
          to: "15:35",
          discipline: Development,
          speaker: TormodLiseth,
          talkDescription: [
            "Forbannelsen fra filmmusikk-verdenen har kommet til tech.",
            "“Temp-love” brukes om forkjærligheten regissører har til musikken man legger til, før komponisten har laget den ordentlige. Vibekodede proof-of-concepts gir noe av den samme utfordringen.",
            "Kan vi lære noe av film-verdenen her, som kan hjelpe oss i møtet med temp-love?",
          ],
        },
        {
          type: "talk",
          id: "6",
          title: "Friction as a feature",
          location: "Kinosal",
          from: "15:35",
          to: "15:50",
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
    title: "Townhall + Forfriskninger",
    start: "16:00",
    end: "17:00",
    tracks: [
      [
        {
          type: "common",
          id: "24",
          title: "Townhall + Forfriskninger",
          location: "Felles (Storsal)",
          from: "16:00",
          to: "17:00",
          speaker: [MikaelBrevik, OddMortenSveås],
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
          speaker: MariusKrakeli,
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
          speaker: Chiruto,
          talkDescription: ["TBA"],
        },
      ],
    ],
  },
];
