import React from "react";
import { BrowserRouter as Router,Route,Routes, Link } from "react-router-dom";


function QuizPage() {
  return (
    <div>
      <h2>Quizzes</h2>
      <p>This is main quiz page below this I will add three quiz links.</p>
      <Link to="/quiz">Quiz 1</Link><br></br>
      <Link to="/quiz">Quiz 2</Link><br></br>
      <Link to="/quiz">Quiz 3</Link><br></br>
      <Link to="/quiz">Quiz 4</Link><br></br>
    </div>
  );
}

export default QuizPage;
