import type { Speaker } from "../../utils/schedule/types";
import type { SpeakerName } from "../../utils/speakers";
import { getSpeakerImageSrc } from "../../utils/speakerImages";

type OGProps = {
  title: string;
  speaker: Speaker;
  from: string;
  to: string;
};

export const OG = ({ title, speaker, from, to }: OGProps) => {
  const baseUrl = import.meta.env.ORIGIN_URL || "http://localhost:4321";

  const peopleUrl = "/assets/img/people/";
  const backgroundImageUrl = "/assets/img/og-talk.jpg";
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
        gap: "2rem",
        width: "100%",
        height: "100%",
        padding: "3rem",
      }}
    >
      <img
        style={{
          position: "absolute",
          width: "1260px",
        }}
        src={`${baseUrl}${backgroundImageUrl}`}
        width={1260}
        height={630}
      />
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <div style={{ display: "flex", gap: "2rem" }}>
          {isMultipleSpeakers(speaker) ? (
            speaker.map((name) => {
              return (
                <img
                  src={`${baseUrl}${peopleUrl}${convertNameToImgName(name)}`}
                  {...imgProps}
                  style={{
                    objectFit: "cover",
                    width: "200px",
                  }}
                />
              );
            })
          ) : (
            <img
              src={`${baseUrl}${peopleUrl}${convertNameToImgName(speaker)}`}
              {...imgProps}
              style={{ objectFit: "cover" }}
            />
          )}
        </div>
        <p
          style={{
            fontSize: "1.5rem",
            lineHeight: "2rem",
            padding: "0.25rem 0.75rem",
            borderRadius: "2.5rem",
            border: "1px solid #0A0B0B",
            width: "150px",
          }}
        >
          {from}-{to}
        </p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "2.25rem",
          width: "518px",
        }}
      >
        <p style={{ fontSize: "3rem", lineHeight: "3.25rem" }}>{title}</p>
        <p style={{ fontSize: "2.25rem", lineHeight: "3.25rem" }}>{speaker}</p>
      </div>
    </div>
  );
};
