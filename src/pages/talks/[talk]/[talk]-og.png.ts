import type { APIRoute, InferGetStaticPropsType } from "astro";
import { PNG } from "../../../components/OpenGraph/createImage";
import { OG } from "../../../components/OpenGraph/OG";
import { schedule } from "../../../utils/schedule/schedule";
import { getSpeakerImageSrc } from "../../../utils/speakerImages";
import type { Speaker } from "../../../utils/schedule/types";

export async function getStaticPaths() {
  return schedule.flatMap((block) =>
    block.tracks.flatMap((track) =>
      track
        .filter((talk) => talk.type === "talk")
        .map((talk) => ({
          params: { id: talk.id },
          props: {
            title: talk.title,
            heroImage: getSpeakersImage(talk.speaker),
          },
        })),
    ),
  );
}

type Props = InferGetStaticPropsType<typeof getStaticPaths>;

export const GET: APIRoute = async function get({ props }) {
  const { title, heroImage } = props as Props;
  const png = await PNG(OG());
  return new Response(png, {
    headers: {
      "Content-Type": "image/png",
    },
  });
};

const getSpeakersImage = (speakers: Speaker) => {
  return Array.isArray(speakers)
    ? speakers.map((speaker) => {
        return getSpeakerImageSrc(speaker).src;
      })
    : getSpeakerImageSrc(speakers).src;
};
