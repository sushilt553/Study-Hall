import React from "react";
import { useQuery} from "@apollo/react-hooks";
import "./CategoryShow.css";
import { FETCH_CATEGORY} from "../../graphql/queries";
import Helper from "./Helper";

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
  
  const questions = shuffle(data.category.questions);

  for (let i = 0; i < questions.length; i++) {
    questions[i].options = shuffle(questions[i].options) 
  }
  
  const answersList = {};

  for (let i = 0; i < questions.length; i++) {
    answersList[questions[i]._id] = questions[i].answer.title;
  }

  return (
    <Helper answersList={answersList} questions={questions} category={data.category.name} />
  )
  
};
