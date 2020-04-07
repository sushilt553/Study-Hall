import React, { useState } from "react";
import Option from "./Option";
import "./CategoryShow.css";

export default ({ question, answersList, shuffledOptions }) => {
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
          answersList={answersList}
          setDisabled={setDisabled}
          disabled={disabled}
          key={idx}
        />
      )}
    </>
  );
};
