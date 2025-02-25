type OGProps = {
  title: string;
};

export const OG = ({ title }: OGProps) => {
  return (
    <div style={{ display: "flex" }}>
      <p>{title}</p>
    </div>
  );
};
