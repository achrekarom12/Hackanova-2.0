import React from "react";
import "./CodePlay.css";

import { BrowserRouter as Router,Route,Routes, Link } from "react-router-dom";


export default function Rehome() {
  return (
    <div>
      <form>
      <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputEmail4">Name: </label>
            <input
              type="name"
              class="form-control"
              id="inputEmail4"
              placeholder="Name "
            />
          </div><br></br>
          <div class="form-group col-md-6">
            <label for="inputPassword4">Contact: </label>
            <input
              type="password"
              class="form-control"
              id="inputPassword4"
              placeholder="Password"
            />
          </div>
        </div><br></br>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputEmail4">Email: </label>
            <input
              type="email"
              class="form-control"
              id="inputEmail4"
              placeholder="Email"
            />
          </div><br></br>
          <div class="form-group col-md-6">
            <label for="inputPassword4">Password: </label>
            <input
              type="password"
              class="form-control"
              id="inputPassword4"
              placeholder="Password"
            />
          </div>
        </div><br></br>
        
        <button type="submit" class="btn btn-primary">
          <Link class ="text_b" to="/login">Sign Up</Link>
        </button>
      </form>
    </div>
  );
}
