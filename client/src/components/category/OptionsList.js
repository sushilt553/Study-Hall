import React, { useState } from "react";
import Option from "./Option";
import "./CategoryShow.css";

export default ({ question, answersList, shuffledOptions, attempts, setAttempts }) => {
  const [disabled, setDisabled] = useState(false);
  
  return (
    <>
      <li className="quiz-title">
        {question.title}
      </li>
      {shuffledOptions.map((option, idx) => 
        <Option
          question={question}
          option={option}
          setAttempts={setAttempts}
          attempts={attempts}
          answersList={answersList}
          setDisabled={setDisabled}
          disabled={disabled}
          key={idx}
        />
      )}
    </>
  );
};
