import { useEffect, useState } from "react";
import type { ScheduleEntry } from "../../utils/schedule/types";
import {
  getCurrentTimeInMinutes,
  isTalkActive,
} from "../../utils/schedule/functions";
import style from "./Live.module.css";

type LiveProps = {
  event: ScheduleEntry;
};

export const Live = ({ event }: LiveProps) => {
  const [isLive, setIsLive] = useState(false);

  function isSpeakerEvent(event: ScheduleEntry) {
    return event.type !== "break";
  }

  function isCurrentTimeInRange(event: ScheduleEntry) {
    const now = getCurrentTimeInMinutes();
    if (isSpeakerEvent(event)) {
      return isTalkActive(event, now);
    }
    return false;
  }

  function getHref(event: ScheduleEntry) {
    if (isSpeakerEvent(event)) {
      return `/stream#${isSpeakerEvent(event) ? event.location : ""}`;
    }
  }

  useEffect(() => {
    const updateTalk = () => {
      setIsLive(isCurrentTimeInRange(event));
    };
    updateTalk();
    const interval = setInterval(updateTalk, 60 * 1000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {isLive && (
        <a href={getHref(event)} className={style.live}>
          <div className={style.live__dot__container}>
            <span className={style.live__dot}>
              <span className={style.live__dot__inner} />
            </span>
          </div>
          Live now!
        </a>
      )}
    </div>
  );
};
