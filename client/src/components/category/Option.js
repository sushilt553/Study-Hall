import React from 'react';

export default ({checkAnswer, question, option, answersList, disabled, setDisabled}) => {

    return (
        <li className="quiz-list-item">
            <input
                disabled={disabled}
                type="radio"
                id={option._id}
                name={question.title}
                value={option.title}
                onClick={() =>
                    checkAnswer(question._id, option.title, answersList, setDisabled)} />
            <label htmlFor={option._id}>{option.title}</label>
        </li>
    )
}