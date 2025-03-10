import { useEffect, useState } from "react";
import type { ScheduleEntry } from "../../utils/schedule/types";
import {
  getCurrentTimeInMinutes,
  isTalkActive,
} from "../../utils/schedule/functions";

type LiveProps = {
  event: ScheduleEntry;
};

export const Live = ({ event }: LiveProps) => {
  const [isLive, setIsLive] = useState(false);

  const isCurrentTimeInRange = (event: ScheduleEntry) => {
    const now = getCurrentTimeInMinutes();
    if (event.type !== "break") {
      return isTalkActive(event, now);
    }
    return false;
  };

  useEffect(() => {
    const updateTalk = () => {
      setIsLive(isCurrentTimeInRange(event));
    };
    updateTalk();
    const interval = setInterval(updateTalk, 60 * 1000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  if (isLive) {
    return <div>Live</div>;
  }
  return null;
};
