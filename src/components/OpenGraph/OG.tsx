import type { Speaker } from "../../utils/schedule/types";
import type { SpeakerName } from "../../utils/speakers";
import { getSpeakerImageSrc } from "../../utils/speakerImages";

type OGProps = {
  title: string;
  speaker: Speaker;
  from: string;
  to: string;
  location: string;
};

export const OG = ({ title, speaker, from, to, location }: OGProps) => {
  const baseUrl = "http://localhost:3001";

  const peopleUrl = "/people/";
  const backgroundImageUrl = "/og-talk-background.png";
  const photoSize = 180;

  function isMultipleSpeakers(speaker: Speaker) {
    return Array.isArray(speaker);
  }

  function convertNameToImgName(name: SpeakerName) {
    const imgFormat = getSpeakerImageSrc(name).format;
    return `${name.replaceAll(" ", "-")}.${imgFormat}`;
  }

  const speakerName = isMultipleSpeakers(speaker)
    ? (speaker as SpeakerName[]).join(" & ")
    : speaker;

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        width: "1200px",
        height: "630px",
      }}
    >
      <img
        style={{ position: "absolute", top: 0, left: 0 }}
        src={`${baseUrl}${backgroundImageUrl}`}
        width={1200}
        height={630}
      />
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          padding: "3rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
            width: "620px",
          }}
        >
          <div style={{ display: "flex", gap: "1rem" }}>
            {isMultipleSpeakers(speaker) ? (
              (speaker as SpeakerName[]).map((name) => (
                <img
                  key={name}
                  src={`${baseUrl}${peopleUrl}${convertNameToImgName(name)}`}
                  width={photoSize}
                  height={photoSize}
                  style={{ objectFit: "cover", borderRadius: "12px" }}
                />
              ))
            ) : (
              <img
                src={`${baseUrl}${peopleUrl}${convertNameToImgName(speaker as SpeakerName)}`}
                width={photoSize}
                height={photoSize}
                style={{ objectFit: "cover", borderRadius: "12px" }}
              />
            )}
          </div>
          <p
            style={{
              fontSize: "3rem",
              lineHeight: "3.25rem",
              color: "#FAFAFA",
              fontWeight: 800,
              margin: 0,
            }}
          >
            {title}
          </p>
          <p
            style={{
              fontSize: "2rem",
              lineHeight: "2.5rem",
              color: "#3ACA40",
              fontWeight: 400,
              margin: 0,
            }}
          >
            {speakerName}
          </p>
        </div>
        <div style={{ display: "flex", gap: "1rem" }}>
          <p
            style={{
              fontSize: "1.5rem",
              lineHeight: "2rem",
              color: "#FAFAFA",
              fontWeight: 800,
              padding: "0.5rem 1.25rem",
              borderRadius: "2.5rem",
              border: "2px solid #FAFAFA",
              margin: 0,
            }}
          >
            {from}-{to}
          </p>
          <p
            style={{
              fontSize: "1.5rem",
              lineHeight: "2rem",
              color: "#FAFAFA",
              fontWeight: 400,
              padding: "0.5rem 1.25rem",
              borderRadius: "2.5rem",
              border: "2px solid #FAFAFA",
              margin: 0,
            }}
          >
            {location}
          </p>
        </div>
      </div>
    </div>
  );
};
