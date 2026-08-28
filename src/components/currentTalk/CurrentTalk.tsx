import { useEffect, useState } from "react";
import { findSpeakerEventByTimeAndLocation } from "../../utils/schedule/functions";
import Discipline from "../discipline/Discipline";
import {
  getDisciplineColorPair,
  getDisciplineName,
  getDisciplines,
  type Discipline as DisciplineEnum,
} from "../../utils/discipline";
import style from "./CurrentTalk.module.css";

type CurrentTalkProps = {
  location: string;
};

export const CurrentTalk = ({ location }: CurrentTalkProps) => {
  const [currentTalk, setCurrentTalk] = useState("");
  const [disciplines, setDisciplines] = useState<DisciplineEnum[]>([]);

  useEffect(() => {
    const updateTalk = () => {
      const talk = findSpeakerEventByTimeAndLocation(location);
      if (talk) {
        setCurrentTalk(talk.title);
        if (talk.type === "talk") {
          setDisciplines(getDisciplines(talk.discipline));
        }
      }
    };

    updateTalk();
    const interval = setInterval(updateTalk, 60 * 1000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={style.current_talk}>
      <p>{currentTalk}</p>
      {disciplines.map((discipline) => (
        <Discipline key={discipline} colorPair={getDisciplineColorPair(discipline)}>
          {getDisciplineName(discipline)}
        </Discipline>
      ))}
    </div>
  );
};
