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
            <div className="input-div">
                <input
                    disabled={disabled}
                    type="radio"
                    id={option._id}
                    name={question.title}
                    value={option.title}
                    onClick={clickHandler}/>
                <label className={`label-input ${toggle}`} htmlFor={option._id}>
                    {option.title}<br></br>
                </label>
            </div>
        </li>
    )
}