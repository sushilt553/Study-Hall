# Study-Hall

## Overview
A learning platform where users can take quizzes on different topics and receive mastery points to track the progress.

This website is inspired by [Brainscape](https://www.brainscape.com/).

[Live-Site](http://study-hall.herokuapp.com/)

## Creators
[Sushil Thapa](https://github.com/sushilt553)

[Kadeem Jackson](https://github.com/Cro5s)

[Rapkat Amin](https://github.com/rapkat10)

![Study-Hall](https://github.com/sushilt553/Study-Hall/blob/master/client/assets/Home_page.png)

## Features
  * Users can receive mastery points in order to track their progress.
  * Users can reset their mastery points and start to take quiz again.
  * Multiple categories are available for users to take quizzes on.

## Technologies
Studyhall is built using React, Apollo, graphql middleware and Express on top of MongoDB database.

## Code highlights
Quiz questions and options are shuffled to make each quiz appear dynamic. This is achieved with the code below.
```JS
function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
  return array;
}

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
```
The answersList hash utilized the question's id as the key and the answer's title as the value. The function checkAnswer, is responsible for making sure the clicked answer is correct or not by matching the answer's title with the one inside the answersList hash. 
```JS
const answersList = {};

  for (let i = 0; i < questions.length; i++) {
    answersList[questions[i]._id] = questions[i].answer.title;
  }

function checkAnswer(questionId, answer, answersList) {
        if (answersList[questionId] === answer) {
            setDisabled(true);
            updatePoint({
                variables: {
                    point: 10,
                },
            });
            return true;
        } else {
            setDisabled(true);
            updatePoint({
                variables: {
                    point: -10,
                },
            });
            return false;
        }
    }
```
