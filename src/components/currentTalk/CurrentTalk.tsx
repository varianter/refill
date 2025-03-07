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
      if (talk) {
        setCurrentTalk(talk.title);
      }
    };

    updateTalk();
    const interval = setInterval(updateTalk, 60 * 1000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  return <p>{currentTalk}</p>;
};
