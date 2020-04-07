import React from 'react';
import Question from './Question';

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
    return array;
}

export default ({answersList, question}) => {
    const shuffledOptions = shuffle(question.options)

    return (
        <Question shuffledOptions={shuffledOptions} answersList={answersList} question={question}/>
    )
}