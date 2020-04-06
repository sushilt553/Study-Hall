import React, { useState } from "react";
import Option from "./Option";
import "./CategoryShow.css";

export default ({ question, checkAnswer, answersList, setToggle }) => {
  const [disabled, setDisabled] = useState(false);

  return (
    <>
      <li className="quiz-title" disabled={disabled}>
        {question.title}
      </li>
      {question.options.map((option, idx) => (
        <Option
          setToggle={setToggle}
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
