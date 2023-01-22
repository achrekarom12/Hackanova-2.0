import "./CodePlay.css";
import React from "react";
import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";

function CodePlayground() {
  return (
    <div>
      <div>
        <center>
        <br></br>
        <h2> Code Playground</h2>
        <br></br>
        <div className="p-3 mb-2 bg-primary text-white br">
        Here you can execute any code you want!
      </div>
        </center>
        
      </div>
      <center>
        <iframe src="https://trinket.io/embed/python3/41711effea"
        width="100%"
        height="356"
        mask-border="0"
        margin-width="0"
        marginheight="0"

        />
        <br></br>
        <br></br>
        <button type="button" class="btn btn-success">
          <Link class="text_b" to="/">Back to Home</Link>
        </button>
      </center>
    </div>
  );
}

export default CodePlayground;
