type OGProps = {
  title: string;
  speakerName: string | string[];
};

export const OG = ({ title, speakerName }: OGProps) => {
  const baseUrl = import.meta.env.ORIGIN_URL || "http://localhost:4321";

  const peopleUrl = "/assets/img/people/";
  const backgroundImageUrl = "/assets/img/hero.jpg";
  const width = 400;
  const height = 300;
  const imgProps = {
    width,
    height,
  };

  function isMultipleSpeakers(speakerName: string | string[]) {
    return Array.isArray(speakerName);
  }

  function extractFilename(imagePath: string): string | null {
    const match = imagePath.match(/people\/([^/?]+\.(jpg|jpeg|png|svg))/i);
    return match ? match[1] : null;
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
        style={{ position: "absolute", width: "1260px", zIndex: "-1" }}
        src={`${baseUrl}${backgroundImageUrl}`}
      />
      {isMultipleSpeakers(speakerName) ? (
        speakerName.map((speaker) => {
          return (
            <img
              src={`${baseUrl}${peopleUrl}${extractFilename(speaker)}`}
              {...imgProps}
            />
          );
        })
      ) : (
        <img
          src={`${baseUrl}${peopleUrl}${extractFilename(speakerName)}`}
          {...imgProps}
          style={{ objectFit: "cover", borderRadius: "0.75rem" }}
        />
      )}
      <p style={{ fontSize: "4rem", lineHeight: "4rem" }}>{title}</p>
    </div>
  );
};
