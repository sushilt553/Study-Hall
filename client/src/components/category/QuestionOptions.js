import React from 'react';
import OptionsList from './OptionsList';

export default ({answersList, question, attempts, setAttempts}) => {
    const shuffledOptions = question.options;

    return (
        <OptionsList setAttempts={setAttempts}
            attempts={attempts} shuffledOptions={shuffledOptions} answersList={answersList} question={question}/>
    )
}