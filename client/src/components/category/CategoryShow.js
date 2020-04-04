import React from 'react';
import {useQuery} from '@apollo/react-hooks';
import "./CategoryShow.css";
import { FETCH_CATEGORY } from '../../graphql/queries';

export default ({categoryId}) => {

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
    if (!data.category) return <p>Category not found</p>

    const questionsList = data.category.questions.map(question =>
        <>
        <li>{question.title}</li>
        { question.options.map(option =>
            <ul> 
                <li>
                    <input type="radio" id={option._id} name={question.title} value={option.title} />
                    <label for={option._id}>{option.title}</label>
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