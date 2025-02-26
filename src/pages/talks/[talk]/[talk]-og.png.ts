import type { APIRoute, InferGetStaticPropsType } from "astro";
import { PNG } from "../../../components/OpenGraph/createImage";
import { schedule } from "../../../utils/schedule/schedule";
import { getSpeakerImageSrc } from "../../../utils/speakerImages";
import type { Speaker } from "../../../utils/schedule/types";
import { OG } from "../../../components/OpenGraph/OG";

export const prerender = true;

export async function getStaticPaths() {
  return schedule.flatMap((block) =>
    block.tracks.flatMap((track) =>
      track
        .filter((talk) => talk.type === "talk")
        .map((talk) => ({
          params: { talk: talk.id },
          props: {
            title: talk.title,
            heroImage: getSpeakersImage(talk.speaker),
          },
        })),
    ),
  );
}

type Props = InferGetStaticPropsType<typeof getStaticPaths>;

export const GET: APIRoute = async function get({ params }) {
  const { talk: id } = params;

  // Find the talk using the ID from the schedule
  const talk = schedule
    .flatMap((block) =>
      block.tracks.flatMap((track) =>
        track.filter((talk) => talk.type === "talk" && talk.id === id),
      ),
    )
    .shift(); // Assuming `id` is unique, we pick the first match

  if (!talk || talk?.type != "talk") {
    return new Response("Not Found", { status: 404 });
  }

  const { title, speaker } = talk;

  // Generate the PNG image based on the OG component
  const png = await PNG(OG({ title, speaker }));

  // Return the image with correct content type
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
