import React from "react";
import "./Quiz.css";
import { questions } from "./questions";
import { useState } from "react";

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [score, setScore] = React.useState(0);
  const [showScore, setShowScore] = React.useState(false);

  const handleClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="quiz">
      {showScore ? (
         <div>
         <div class="alert alert-success" role="alert">
           <h4 className="alert-heading">Hey, Mitali!</h4>
           <p> 
             Your score is {score} out of {questions.length}
           </p>
           <h3>Your Progress:</h3>
           <div className="progress">
             <div
               className="progress-bar"
               role="progressbar"
               style={{ width: "25%" }}
               aria-valuenow="25"
               aria-valuemin="0"
               aria-valuemax="100"
             ></div>
           </div>
           <br></br>
         </div>
       </div>
      ) : (
        <>
          <section className="question-section">
            <h1>
              Question {currentQuestion + 1}/{questions.length}
            </h1>
            <p>{questions[currentQuestion].questionText}</p>
          </section>

          <section className="answer-section">
            {questions[currentQuestion].answerOptions.map((item) => (
              <button onClick={() => handleClick(item.isCorrect)}>
                {item.answerText}
              </button>
            ))}
          </section>
        </>
      )}
    </div>
  );
}
