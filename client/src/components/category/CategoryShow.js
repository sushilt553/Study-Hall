import React from "react";
import { useQuery} from "@apollo/react-hooks";
import "./CategoryShow.css";
import { FETCH_CATEGORY} from "../../graphql/queries";
import QuestionOptions from "./QuestionOptions";
import SideBar from "../sidebar/Sidebar";

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
  return array;
}

export default ({ categoryId }) => {

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

  const questionsArr = shuffle(data.category.questions);
  const answersList = {};

  for (let i = 0; i < questionsArr.length; i++) {
    answersList[questionsArr[i]._id] = questionsArr[i].answer.title;
  }

  const questionsList = questionsArr.map((question, idx) => (
    <div className="quiz-header" key={idx}>
      <QuestionOptions
        answersList={answersList}
        question={question}
        key={question._id}
      />
    </div>
  ));

  return (
    <div className="category-container">
      <SideBar />
      <section className="quiz-main">
        <div className="quiz-show-page-div">
          <div className="quiz-toggle-category">
            <h1 className="quiz-category">{data.category.name}</h1>
          </div>

          <div className={`quiz-order-list-div ${data.category.name}`}>
            <ol className="quiz-order-list">{questionsList}</ol>
          </div>
        </div>
      </section>
    </div>
  );
};
