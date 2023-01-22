import React from "react";
import "./CodePlay.css";

import { BrowserRouter as Router,Route,Routes, Link } from "react-router-dom";

export default function Login() {
  return (
    <div>
      <form>
        <div className="form-group">
          <label for="exampleInputEmail1">Email address:</label>
          <br></br>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <br></br>
        <div className="form-group">
          <label for="exampleInputPassword1">Password: </label>
          <br></br>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <br></br>
        <center>
          <button type="submit" className="btn btn-primary">
          <Link class ="text_b" to="/">Submit</Link>
          </button>
        </center>
      </form>
    </div>
  );
}
