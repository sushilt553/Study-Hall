import React, { useState } from "react";
import Option from "./Option";
import "./CategoryShow.css";

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
  return array;
}

export default ({ question, checkAnswer, answersList, setToggle }) => {
  const [disabled, setDisabled] = useState(false);
  const shuffledOptions = shuffle(question.options);
  return (
    <>
      <li className="quiz-title" disabled={disabled}>
        {question.title}
      </li>
      {shuffledOptions.map((option, idx) => (
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
