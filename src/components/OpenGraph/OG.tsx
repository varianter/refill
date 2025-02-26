import type { Speaker } from "../../utils/schedule/types";
import type { SpeakerName } from "../../utils/speakers";

type OGProps = {
  title: string;
  speaker: Speaker;
};

export const OG = ({ title, speaker }: OGProps) => {
  const baseUrl = import.meta.env.ORIGIN_URL || "http://localhost:4321";

  const peopleUrl = "/assets/img/people/";
  const backgroundImageUrl = "/assets/img/hero.jpg";
  const width = 400;
  const height = 300;
  const imgProps = {
    width: width,
    height: height,
  };

  function isMultipleSpeakers(speaker: Speaker) {
    return Array.isArray(speaker);
  }

  function convertNameToImgName(name: SpeakerName) {
    return name.replaceAll(" ", "-") + ".jpg";
  }

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        gap: "2rem",
        width: "100%",
        padding: "4rem",
        paddingTop: "10rem",
      }}
    >
      <img
        style={{
          position: "absolute",
          width: "1260px",
          objectFit: "cover",
        }}
        src={`${baseUrl}${backgroundImageUrl}`}
        width={1260}
        height={630}
      />
      {isMultipleSpeakers(speaker) ? (
        speaker.map((name) => {
          return (
            <img
              src={`${baseUrl}${peopleUrl}${convertNameToImgName(name)}`}
              {...imgProps}
            />
          );
        })
      ) : (
        <img
          src={`${baseUrl}${peopleUrl}${convertNameToImgName(speaker)}`}
          {...imgProps}
          style={{ objectFit: "cover", borderRadius: "0.75rem" }}
        />
      )}
      <p style={{ fontSize: "4rem", lineHeight: "4rem" }}>{title}</p>
    </div>
  );
};
