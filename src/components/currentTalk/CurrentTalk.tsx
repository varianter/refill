import { useEffect, useState } from "react";
import { findSpeakerEventByTimeAndLocation } from "../../utils/schedule/functions";

type CurrentTalkProps = {
  location: string;
};

export const CurrentTalk = ({ location }: CurrentTalkProps) => {
  const [currentTalk, setCurrentTalk] = useState("");

  useEffect(() => {
    const updateTalk = () => {
      const talk = findSpeakerEventByTimeAndLocation(location);
      talk && setCurrentTalk(talk.title);
    };

    updateTalk();
    const interval = setInterval(updateTalk, 5 * 60 * 1000);

    return () => clearInterval(interval);
  }, [location]);
  return <p>{currentTalk}</p>;
};
