import React from 'react';
import OptionsList from './OptionsList';

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
    return array;
}

export default ({answersList, question}) => {
    const shuffledOptions = shuffle(question.options)

    return (
        <OptionsList shuffledOptions={shuffledOptions} answersList={answersList} question={question}/>
    )
}