import React from "react";
import styles from "./Discipline.module.css";
import type { ColorPair } from "../../utils/colors";

type DisciplineProps = {
  colorPair?: ColorPair;
  children: React.ReactNode;
};

const Discipline = ({ colorPair, children }: DisciplineProps) => {
  const customStyle = colorPair
    ? {
      color: colorPair.textColor || "var(--text-primary)",
      backgroundColor: colorPair.color || "transparent",
      borderColor: colorPair.color || "var(--text-primary)",
    }
    : {};

  return (
    <p className={styles.discipline} style={customStyle}>
      {children}
    </p>
  );
};

export default Discipline;
