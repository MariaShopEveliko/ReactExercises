import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();
  // const [timerStarted, setTimerStarted] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    dialog.current.open();
  }

  function handleReset(){    
    setTimeRemaining(targetTime * 1000);
  }

  function handleStart() {
    // setTimerStarted(true);

    timer.current = setInterval(() => {
      // dialog.current.open(); // open refers to the method inside of useImperativeHandle in ResultModal
      setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 10);
    }, 10);
  }

  function handleStop() {
    // setTimerStarted(false);
    dialog.current.open();
    clearInterval(timer.current);
  }

  return (
    <>
      <ResultModal targetTime={targetTime} remainingTime={timeRemaining} ref={dialog} onReset={handleReset}/>
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerIsActive ? "active" : undefined}>
          Time is {timerIsActive ? "running" : "inactive"}
        </p>
      </section>
    </>
  );
}
