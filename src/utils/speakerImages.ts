import MikaelBrevik from "../../public/assets/img/people/Mikael-Brevik.jpg";
import DavidDinka from "../../public/assets/img/people/David-Dinka.jpg";
import VikasGupta from "../../public/assets/img/people/Vikas-Gupta.jpg";
import YoeriOtten from "../../public/assets/img/people/Yoeri-Otten.jpg";
import JuliaKuhley from "../../public/assets/img/people/Julia-Kuhley.jpg";
import LizaHansson from "../../public/assets/img/people/Liza-Hansson.jpg";
import TonjeEvanger from "../../public/assets/img/people/Tonje-Evanger.jpg";
import JacobBerglund from "../../public/assets/img/people/Jacob-Berglund.jpg";
import MariusKrakeli from "../../public/assets/img/people/Marius-Krakeli.jpg";
import AnitaSteinstad from "../../public/assets/img/people/Anita-Steinstad.jpg";
import JonasLillevold from "../../public/assets/img/people/Jonas-Lillevold.jpg";
import AndreasHartveit from "../../public/assets/img/people/Andreas-Hartveit.jpg";
import ChristianBrevik from "../../public/assets/img/people/Christian-Brevik.jpg";
import MalinCKarlsen from "../../public/assets/img/people/Malin-C.-Karlsen.jpg";
import AndersHammervold from "../../public/assets/img/people/Anders-Hammervold.jpg";
import EliseKristiansen from "../../public/assets/img/people/Elise-Kristiansen.jpg";
import OlePetterKlæstad from "../../public/assets/img/people/Ole-Petter-Klæstad.jpg";
import RolfAndersStorset from "../../public/assets/img/people/Rolf-Anders-Storset.jpg";
import KristofferNordström from "../../public/assets/img/people/Kristoffer-Nordström.jpg";
import ThomasLyngtunHansen from "../../public/assets/img/people/Thomas-Lyngtun-Hansen.jpg";
import TrulsHenrikJakobsen from "../../public/assets/img/people/Truls-Henrik-Jakobsen.jpg";
import NikolaiNormanAndersen from "../../public/assets/img/people/Nikolai-Norman-Andersen.jpg";
import VegardIngebrigtsenFeste from "../../public/assets/img/people/Vegard-Ingebrigtsen-Feste.jpg";

type SpeakerImage = {
  name: string;
  src: ImageMetadata;
};

export const speakerImages: SpeakerImage[] = [
  {
    name: "Mikael Brevik",
    src: MikaelBrevik,
  },
  {
    name: "David Dinka",
    src: DavidDinka,
  },
  {
    name: "Vikas Gupta",
    src: VikasGupta,
  },
  {
    name: "Yoeri Otten",
    src: YoeriOtten,
  },
  {
    name: "Julia Kuhley",
    src: JuliaKuhley,
  },
  {
    name: "Liza Hansson",
    src: LizaHansson,
  },
  {
    name: "Tonje Evanger",
    src: TonjeEvanger,
  },
  {
    name: "Jacob Berglund",
    src: JacobBerglund,
  },
  {
    name: "Marius Krakeli",
    src: MariusKrakeli,
  },
  {
    name: "Anita Steinstad",
    src: AnitaSteinstad,
  },
  {
    name: "Jonas Lillevold",
    src: JonasLillevold,
  },
  {
    name: "Andreas Hartveit",
    src: AndreasHartveit,
  },
  {
    name: "Christian Brevik",
    src: ChristianBrevik,
  },
  {
    name: "Malin C. Karlsen",
    src: MalinCKarlsen,
  },
  {
    name: "Anders Hammervold",
    src: AndersHammervold,
  },
  {
    name: "Elise Kristiansen",
    src: EliseKristiansen,
  },
  {
    name: "Ole Petter Klæstad",
    src: OlePetterKlæstad,
  },
  {
    name: "Rolf Anders Storset",
    src: RolfAndersStorset,
  },
  {
    name: "Kristoffer Nordström",
    src: KristofferNordström,
  },
  {
    name: "Thomas Lyngtun Hansen",
    src: ThomasLyngtunHansen,
  },
  {
    name: "Truls Henrik Jakobsen",
    src: TrulsHenrikJakobsen,
  },
  {
    name: "Nikolai Norman Andersen",
    src: NikolaiNormanAndersen,
  },
  {
    name: "Vegard Ingebrigtsen Feste",
    src: VegardIngebrigtsenFeste,
  },
  {
    name: "Ole Petter Klæstad",
    src: OlePetterKlæstad,
  },
];

export function getSpeakerImageSrc(name: string) {
  return speakerImages.find((img) => {
    return img.name === name;
  });
}
