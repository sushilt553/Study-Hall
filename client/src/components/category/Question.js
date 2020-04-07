import React, { useState } from "react";
import Option from "./Option";
import "./CategoryShow.css";

export default ({ question, checkAnswer, answersList }) => {
  const [disabled, setDisabled] = useState(false);
  const shuffledOptions = question.options;
  return (
    <>
      <li className="quiz-title" disabled={disabled}>
        {question.title}
      </li>
      {shuffledOptions.map((option, idx) => (
        <Option
          checkAnswer={checkAnswer}
          question={question}
          option={option}
          answersList={answersList}
          disabled={disabled}
          setDisabled={setDisabled}
          key={idx}
        />
      ))}
    </>
  );
};
