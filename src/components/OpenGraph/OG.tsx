import type { Speaker } from "../../utils/schedule/types";
import type { SpeakerName } from "../../utils/speakers";
import { getSpeakerImageSrc } from "../../utils/speakerImages";

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
    const imgFormat = getSpeakerImageSrc(name).format;
    return `${name.replaceAll(" ", "-")}.${imgFormat}`;
  }

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        gap: "2rem",
        width: "100%",
        height: "100%",
        padding: "4rem",
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
      <div style={{ display: "flex", gap: "2rem" }}>
        {isMultipleSpeakers(speaker) ? (
          speaker.map((name) => {
            return (
              <img
                src={`${baseUrl}${peopleUrl}${convertNameToImgName(name)}`}
                {...imgProps}
                style={{
                  objectFit: "cover",
                  borderRadius: "0.75rem",
                  width: "200px",
                }}
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
      </div>
      <p style={{ fontSize: "4rem", lineHeight: "4rem" }}>{title}</p>
    </div>
  );
};
