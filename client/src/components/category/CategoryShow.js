import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import "./CategoryShow.css";
import { FETCH_CATEGORY, CURRENT_USER } from "../../graphql/queries";
import Question from "./Question";
import { UPDATE_POINT } from "../../graphql/mutations";

export default ({ categoryId }) => {

  const [updatePoint, { pointLoading, pointError }] = useMutation(
    UPDATE_POINT,
    {
      refetchQueries: [{ query: CURRENT_USER }],
    }
  );

  if (pointLoading || pointError) return null;

  function checkAnswer(questionId, answer, answersList, setDisabled) {
    if (answersList[questionId] === answer) {
      setToggle("Correct");
      setDisabled(true);
      updatePoint({
        variables: {
          point: 10,
        },
      });
      return true;
    } else {
      setToggle("Incorrect");
      setDisabled(true);
      updatePoint({
        variables: {
          point: -10,
        },
      });
      return false;
    }
  }

  const [toggle, setToggle] = useState("");

  const { data, loading, error } = useQuery(FETCH_CATEGORY, {
    variables: {
      categoryId: categoryId,
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>ERROR</p>;
  if (!data) return <p>Not Found</p>;
  if (!data.category || !data.category.questions)
    return <p>Category not found</p>;

  const questionsArr = data.category.questions;
  const answersList = {};

  for (let i = 0; i < questionsArr.length; i++) {
    answersList[questionsArr[i]._id] = questionsArr[i].answer.title;
  }

  const questionsList = data.category.questions.map((question, idx) => (
    <div className="quiz-header" key={idx}>
      <Question
        answersList={answersList}
        question={question}
        checkAnswer={checkAnswer}
        setToggle={setToggle}
        key={question._id}
      />
    </div>
  ));

  return (
    <section className="quiz-main">
      <div className="quiz-show-page-div">

        <div className="quiz-toggle-category">
          <h1 className="quiz-category">{data.category.name}</h1>
        </div>

        <div className="quiz-order-list-div">
          <ol className="quiz-order-list">{questionsList}</ol>
        </div>

      </div>
    </section>
  );
};
