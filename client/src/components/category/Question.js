import React, {useState} from 'react';
import Option from './Option';


export default({question, checkAnswer, answersList, setToggle}) => {

    const [disabled, setDisabled] = useState(false);

    return (
        <>
            <li className="quiz-title" disabled={disabled}>{question.title}</li>
            {question.options.map(option =>
                    <Option
                        setToggle={setToggle}
                        checkAnswer={checkAnswer}
                        question={question}
                        option={option}
                        answersList={answersList}
                        disabled={disabled}
                        setDisabled={setDisabled}
                    />
            )}
        </>
    )
}