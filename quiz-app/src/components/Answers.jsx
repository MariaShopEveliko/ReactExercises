import { useRef } from "react";

export default function Answers({ answers, selectedAnswer, answersState, onSelect }) {
  const shuffledAnswers = useRef();

  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers];
    shuffledAnswers.current.sort((a, b) => Math.random() - 0.5);
  }

  return (
    <ul id="answers">
      {answers.map((answer) => {
        const isSelected = selectedAnswer === answer;
        let cssClasses = "";

        if (answersState === "answered" && isSelected) {
          cssClasses = "selected";
        }

        if (
          (answersState === "correct" || answersState === "wrong") &&
          isSelected
        ) {
          cssClasses = answersState;
        }
        return (
          <li key={answer} className="answer">
            <button
              onClick={() => onSelect(answer)}
              className={cssClasses}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
