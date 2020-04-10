import React, {useState} from 'react';
import QuestionOptions from './QuestionOptions';
import SideBar from "../sidebar/Sidebar";

import "./CategoryShow.css";

export default ({questions, answersList, category}) => {
    const [attempts, setAttempts] = useState(0);

    const questionsList = questions.map((question, idx) => (
        <div className="quiz-header" key={idx}>
            <QuestionOptions
                answersList={answersList}
                question={question}
                key={question._id}
                setAttempts={setAttempts}
                attempts={attempts}
            />
        </div>
    ));

    return (
      <div className="category-container">
        <SideBar attempts={attempts} setAttempts={setAttempts} />
        <section className="quiz-main">
          <div className="quiz-show-page-div">
            <div className="quiz-toggle-category">
              <h1 className="quiz-category">{category}</h1>
            </div>
            <div className="quiz-order-list-div">
              <ol className="quiz-order-list">{questionsList}</ol>
            </div>
          </div>
        </section>
      </div>
    );

}