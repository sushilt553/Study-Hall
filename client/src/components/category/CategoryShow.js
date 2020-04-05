import React, {useState} from 'react';
import {useQuery} from '@apollo/react-hooks';
import "./CategoryShow.css";
import { FETCH_CATEGORY } from '../../graphql/queries';
import Option from './Option';

export default ({categoryId}) => {
    
    function checkAnswer(questionId, answer, answersList) {
        if (answersList[questionId] === answer) {
            setToggle("Correct");
        } else {
            setToggle("Incorrect");
        }
    }

    const [toggle, setToggle] = useState("");

    const { data, loading, error } = useQuery(
        FETCH_CATEGORY,
        {
            variables: {
                categoryId: categoryId
            }
        }
    )

    if (loading) return <p>Loading...</p>
    if (error) return <p>ERROR</p>
    if(!data) return <p>Not Found</p>
    if (!data.category || !data.category.questions) return <p>Category not found</p>

    const questionsArr = data.category.questions;
    const answersList = {};

    for (let i = 0; i < questionsArr.length; i++) {
        answersList[questionsArr[i]._id] = questionsArr[i].answer.title;
    };

    const questionsList = data.category.questions.map(question =>
        <div className="quiz-header">
            <li className="quiz-title">{question.title}</li>
            { question.options.map(option =>
                <ul className="quiz-list"> 
                    <Option setToggle={setToggle} checkAnswer={checkAnswer} question={question} option={option} answersList={answersList} />
                </ul>
                )}
        </div>
    )

    return (
        <section className="quiz-main">
            <div className="quiz-toggle-category">
                <h1 className="quiz-category">{data.category.name}</h1>
                <div className={toggle}>{toggle}</div>
            </div>
            <ol className="quiz-order-list">
                {questionsList}
            </ol>
        </section>
    )

}