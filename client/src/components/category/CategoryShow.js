import React, {useState} from 'react';
import {useQuery} from '@apollo/react-hooks';
import "./CategoryShow.css";
import { FETCH_CATEGORY } from '../../graphql/queries';

export default ({categoryId}) => {
    
    function checkAnswer(questionId, answer, answersList) {
        if (answersList[questionId] === answer) {
            setToggle("correct");
        } else {
            setToggle("incorrect");
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
        debugger
        answersList[questionsArr[i]._id] = questionsArr[i].answer.title;
    };

    const questionsList = data.category.questions.map(question =>
        <>
        <li>{question.title}</li>
        { question.options.map(option =>
            <ul> 
                <li>
                    <input  type="radio" id={option._id} name={question.title} value={option.title} onClick={() => checkAnswer(question._id, option.title, answersList )}/>
                    <label className={toggle} htmlFor={option._id}>{option.title}</label>
                </li>
            </ul>
            )}
        </>
    )

    return (
        <section className="test">
            <h1>{data.category.name}</h1>
            <ol>
                {questionsList}
            </ol>
        </section>
    )

}