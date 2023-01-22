import './Home.css';
import "./CodePlay.css";

import React from "react";
import { BrowserRouter as Router,Route,Routes, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <div className="logo">CodeTutor</div>
        <br></br>
        {/* <small>Hi, Mitali!</small> */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item m-2">
              <Link to="/">Home</Link> 
            </li>

            <li className="nav-item m-2">
              <Link to="/theorymat">Course Material</Link>
            </li>

            <li className="nav-item m-2">
              <Link to="/codeplayground">Code Playground</Link>
            </li>

            <li className="nav-item m-2">
              <Link to="/quizpage">Quizzes</Link>
            </li>
            <li className="nav-item m-2">
              <Link to="/chatbot">ChatBot</Link>
            </li>

            <li className="nav-item m-2">
              <Link to="/more">More</Link>
            </li>
            
          </ul>
          <button class="btn btn-primary me-md-2" type="button">
          <Link class = "text_b" to="/rehome">Register</Link>
          </button>
          <button class="btn btn-primary me-md-2" type="button">
          <Link class = "text_b" to="/login">Login</Link>
          </button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
