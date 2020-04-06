import React, { useState } from 'react';
import "./CategoryShow.css";

export default ({checkAnswer, question, option, answersList, disabled, setDisabled}) => {
    
    const [toggle, setToggle] = useState("");

    function clickHandler(){
        if (checkAnswer(question._id, option.title, answersList, setDisabled)){
            setToggle("green");
        }else{
            setToggle("red");
        }
    }


    return (
        <li className="quiz-list-item">
            <input
                disabled={disabled}
                type="radio"
                id={option._id}
                name={question.title}
                value={option.title}
                onClick={clickHandler}/>
            <label className={toggle} htmlFor={option._id}>{option.title}</label>
        </li>
    )
}