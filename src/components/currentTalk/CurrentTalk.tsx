import { useEffect, useState } from "react";
import { findSpeakerEventByTimeAndLocation } from "../../utils/schedule/functions";
import Discipline from "../discipline/Discipline";
import {
  getDisciplineColorPair,
  getDisciplineName,
  type Discipline as DisciplineEnum,
} from "../../utils/discipline";
import style from "./CurrentTalk.module.css";

type CurrentTalkProps = {
  location: string;
};

export const CurrentTalk = ({ location }: CurrentTalkProps) => {
  const [currentTalk, setCurrentTalk] = useState("");
  const [discipline, setDiscipline] = useState<DisciplineEnum>();

  useEffect(() => {
    const updateTalk = () => {
      const talk = findSpeakerEventByTimeAndLocation(location);
      if (talk) {
        setCurrentTalk(talk.title);
        if (talk.type === "talk") {
          setDiscipline(talk.discipline);
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
      {discipline && (
        <Discipline colorPair={getDisciplineColorPair(discipline)}>
          {getDisciplineName(discipline)}
        </Discipline>
      )}
    </div>
  );
};
