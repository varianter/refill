import MikaelBrevik from "../../public/assets/img/people/Mikael-Brevik.jpg";
import DavidDinka from "../../public/assets/img/people/David-Dinka.jpg";
import VikasGupta from "../../public/assets/img/people/Vikas-Gupta.jpg";
import YoeriOtten from "../../public/assets/img/people/Yoeri-Otten.jpg";
import JuliaKuhley from "../../public/assets/img/people/Julia-Kuhley.jpg";
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
import HildegunnVada from "../../public/assets/img/people/Hildegunn-Vada.jpg";
import TomasJanson from "../../public/assets/img/people/Tomas-Janson.jpg";
import LizaHanssonAndStinaJanson from "../../public/assets/img/people/Liza-Hansson-&-Stina-Janson.jpg";
import DavidDeLeon from "../../public/assets/img/people/David-De-Leon.jpg";
import AndreaHvattum from "../../public/assets/img/people/Andrea-Hvattum.png";
import KirstiStrømstad from "../../public/assets/img/people/Kirsti-Strømstad.jpg";
import VeraHayeBjerga from "../../public/assets/img/people/Vera-Haye-Bjerga.jpg";
import NinjaWidenAndChristofferJohannesson from "../../public/assets/img/people/Ninja-Widén-&-Christoffer-Johannesson.png";
import { SpeakerName } from "./speakers";

export const speakerImages: Record<SpeakerName, ImageMetadata> = {
  [SpeakerName.None]: MikaelBrevik,
  [SpeakerName.MikaelBrevik]: MikaelBrevik,
  [SpeakerName.DavidDinka]: DavidDinka,
  [SpeakerName.VikasGupta]: VikasGupta,
  [SpeakerName.YoeriOtten]: YoeriOtten,
  [SpeakerName.JuliaKuhley]: JuliaKuhley,
  [SpeakerName.LizaHanssonAndStinaJanson]: LizaHanssonAndStinaJanson,
  [SpeakerName.TonjeEvanger]: TonjeEvanger,
  [SpeakerName.JacobBerglund]: JacobBerglund,
  [SpeakerName.MariusKrakeli]: MariusKrakeli,
  [SpeakerName.AnitaSteinstad]: AnitaSteinstad,
  [SpeakerName.JonasLillevold]: JonasLillevold,
  [SpeakerName.AndreasHartveit]: AndreasHartveit,
  [SpeakerName.ChristianBrevik]: ChristianBrevik,
  [SpeakerName.MalinCKarlsen]: MalinCKarlsen,
  [SpeakerName.AndersHammervold]: AndersHammervold,
  [SpeakerName.EliseKristiansen]: EliseKristiansen,
  [SpeakerName.OlePetterKlæstad]: OlePetterKlæstad,
  [SpeakerName.RolfAndersStorset]: RolfAndersStorset,
  [SpeakerName.KristofferNordström]: KristofferNordström,
  [SpeakerName.ThomasLyngtunHansen]: ThomasLyngtunHansen,
  [SpeakerName.TrulsHenrikJakobsen]: TrulsHenrikJakobsen,
  [SpeakerName.NikolaiNormanAndersen]: NikolaiNormanAndersen,
  [SpeakerName.VegardIngebrigtsenFeste]: VegardIngebrigtsenFeste,
  [SpeakerName.HildegunnVada]: HildegunnVada,
  [SpeakerName.TomasJanson]: TomasJanson,
  [SpeakerName.DavidDeLeon]: DavidDeLeon,
  [SpeakerName.AndreaHvattum]: AndreaHvattum,
  [SpeakerName.KirstiStrømstad]: KirstiStrømstad,
  [SpeakerName.VeraHayeBjerga]: VeraHayeBjerga,
  [SpeakerName.NinjaWidenAndChristofferJohannesson]:
    NinjaWidenAndChristofferJohannesson,
};

export function getSpeakerImageSrc(name: SpeakerName) {
  return speakerImages[name];
}
