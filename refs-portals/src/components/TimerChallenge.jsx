import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
  const [timerStarted, setTimerStarted] = useState(false);
  // const [timerExpired, setTimerExpired] = useState(false);
  const timer = useRef();
  const dialog = useRef();

  function handleStart() {
    setTimerStarted(true);

    timer.current = setTimeout(() => {
      // setTimerExpired(true);
      dialog.current.open(); // open refers to the method inside of useImperativeHandle in ResultModal
    }, targetTime * 1000);
  }

  function handleStop() {
    setTimerStarted(false);

    clearTimeout(timer.current);
  }

  return (
    <>
      <ResultModal targetTime={targetTime} result="lost" ref={dialog} />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerStarted ? handleStop : handleStart}>
            {timerStarted ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerStarted ? "active" : undefined}>
          Time is {timerStarted ? "running" : "inactive"}
        </p>
      </section>
    </>
  );
}
