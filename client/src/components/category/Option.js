import React, { useState } from "react";
import {useMutation} from '@apollo/react-hooks';
import { UPDATE_POINT } from "../../graphql/mutations";
import { CURRENT_USER } from "../../graphql/queries";
import sound from './sound';
import "./CategoryShow.css";

export default ({ question, option, answersList, setDisabled, disabled, attempts, setAttempts }) => {

    const [updatePoint, { pointLoading, pointError }] = useMutation(
        UPDATE_POINT,
        {
          refetchQueries: [{ query: CURRENT_USER }],
        }
    );

    if (pointLoading || pointError) return null;
    
    
    function checkAnswer(questionId, answer, answersList) {
        if (answersList[questionId] === answer) {
            setDisabled(true);
            updatePoint({
                variables: {
                    point: 10,
                },
            });
            
            return true;
        } else {
            setDisabled(true);
            updatePoint({
                variables: {
                    point: -10,
                },
            });
            return false;
        }
    }
    
    const [toggle, setToggle] = useState("");
    // let toggle;
    
    function clickHandler(){
        if (checkAnswer(question._id, option.title, answersList)){
            setToggle("green");
            sound("right");
        }else{
            setToggle("red");
            sound("wrong");
        }
        setAttempts(attempts + 1)
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