import React from 'react';

export default ({checkAnswer, question, option, answersList}) => {

    return (
        <li className="quiz-list-item">
            <input
                type="radio"
                id={option._id}
                name={question.title}
                value={option.title}
                onClick={() =>
                    checkAnswer(question._id, option.title, answersList)} />
            <label htmlFor={option._id}>{option.title}</label>
        </li>
    )
}