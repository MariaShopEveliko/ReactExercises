import { useState, useCallback } from "react";
import QUESTIONS from "../questions";
import quizCompleteImg from "../assets/quiz-complete.png";
import QuestionTimer from "./QuestionTimer";
import Answers from "./Answers";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const [answerState, setAnswerState] = useState("");

  const activeQuestionIndex =
    answerState === "" ? userAnswers.length : userAnswers.length - 1;

  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(
    function handleSelectAnswer(selectedAnswer) {
      setAnswerState("answered");

      setUserAnswers((prevUserAnswers) => {
        return [...prevUserAnswers, selectedAnswer];
      });

      setTimeout(() => {
        if (selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]) {
          setAnswerState("correct");
        } else {
          setAnswerState("wrong");
        }

        setTimeout(() => {
          setAnswerState("");
        }, 2000);
      }, 1000);
    },
    [activeQuestionIndex]
  );

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (quizIsComplete) {
    return (
      <div id="summary">
        <img src={quizCompleteImg} alt="Trophu icon" />
        <h2>Quiz Completed!</h2>
      </div>
    );
  }

  return (
    <div id="quiz">
      <div id="questions">
        <QuestionTimer
          timeout={10000}
          onTimeout={handleSkipAnswer}
          key={activeQuestionIndex}
        />
        {quizIsComplete ? (
          <p>No</p>
        ) : (
          <>
            <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
            <Answers
              key={activeQuestionIndex}
              answers={QUESTIONS[activeQuestionIndex].answers}
              selectedAnswer={userAnswers[userAnswers.length - 1]}
              answersState={answerState}
              onSelect={handleSelectAnswer}
            />
          </>
        )}
      </div>
    </div>
  );
}
