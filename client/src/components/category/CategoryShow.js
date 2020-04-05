import React, {useState} from 'react';
import {useQuery} from '@apollo/react-hooks';
import "./CategoryShow.css";
import { FETCH_CATEGORY } from '../../graphql/queries';
import Question from './Question';

export default ({categoryId}) => {
    
    function checkAnswer(questionId, answer, answersList, setDisabled) {
        if (answersList[questionId] === answer) {
            setToggle("Correct");
            setDisabled(true);
            return true;
        } else {
            setToggle("Incorrect");
            setDisabled(true);
            return false
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
            <Question answersList={answersList} question={question} checkAnswer={checkAnswer} setToggle={setToggle}/>
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