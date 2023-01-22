import React from "react";
import "./Home.css";
import logo1 from './assets/Home.gif'
import logo2 from './assets/TheoryMat.gif'
import logo3 from './assets/code_playground.gif'

const Home = () => {
  return (
    <>
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={logo1} className="d-block w-100" alt="img1" />
          </div>
          <div className="carousel-item">
            <img src={logo2} className="d-block w-100" alt="img2" />
          </div>
          <div className="carousel-item">
            <img src={logo3} className="d-block w-100" alt="img3" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};
export default Home;
