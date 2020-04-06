import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import "./CategoryShow.css";
import { FETCH_CATEGORY, CURRENT_USER, FETCH_CATEGORIES } from "../../graphql/queries";
import Question from "./Question";
import { UPDATE_POINT } from "../../graphql/mutations";
import Sidebar from "../sidebar/Sidebar";
import "./reset.css";

export default ({ categoryId }) => {
  // const { data: dataR, error: errorR, loading: loadingR } = useQuery(
  //   CURRENT_USER
  // );

  // if (!dataR || loadingR || errorR) return null;

  // const user = dataR.me;

  const { data: dataC, error: errorC, loading: loadingC } = useQuery(FETCH_CATEGORIES);

  if (!dataC, errorC, loadingC) return null;

  const allCategories = dataC.categories

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
      {/* <Sidebar user={user} categories={allCategories}/> */}
      <div className="quiz-toggle-category">
        <h1 className="quiz-category">{data.category.name}</h1>
        <div className={toggle}>{toggle}</div>
      </div>
      <ol className="quiz-order-list">{questionsList}</ol>
    </section>
  );
};
