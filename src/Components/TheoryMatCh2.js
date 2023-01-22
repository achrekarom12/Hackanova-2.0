import "./TheoryMat.css";
import { Link } from "react-router-dom";

function TheoryMat() {
  return (
    <>
      <div className="google_translate_element"></div>
      <div className="container">
      <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item">
              <Link className="page-link" to="/theorymatch1">
                Previous
              </Link>
            </li>

            <li className="page-item">
              <Link className="page-link disabled" to="/theorymatch2">
                Next
              </Link>
            </li>
          </ul>
        </nav>
        <div className="EngContent">
          <div>
            <h2>Python Data Types</h2>
            <ol>
              <li>
                <b>Python Keywords:</b>
                <p className="content contentEnglish">
                  There are some words in Python that we can’t use for our
                  variable name or class name. We call them Keywords. These are
                  reserved words designated for special purposes.
                </p>
                <div class="card">
                  <div class="tools">
                    <div class="circle">
                      <span class="red box"></span>
                    </div>
                    <div class="circle">
                      <span class="yellow box"></span>
                    </div>
                    <div class="circle">
                      <span class="green box"></span>
                    </div>
                  </div>
                  <div class="card__content ms-2"></div>
                  <pre id="code">
                    <code class="python">
                      else = 5 # not acceptable <br></br>
                      Cat = 4 <br></br>
                      cat = 9 # both are different <br></br>
                      _home89 # acceptable <br></br>
                      my variable # not acceptable <br></br>
                      variable@23 # not acceptable
                    </code>
                  </pre>
                </div>
              </li>
              <br></br>

              <li>
                <b>Python Comments:</b>
                <p className="content contentEnglish">
                  Comments are hints that we use to make our code more
                  understandable. Comments are completely ignored by the
                  interpreter. They are meant for fellow programmers. There are
                  two types of comments ie. Single line and multiline.
                </p>
                <div class="card">
                  <div class="tools">
                    <div class="circle">
                      <span class="red box"></span>
                    </div>
                    <div class="circle">
                      <span class="yellow box"></span>
                    </div>
                    <div class="circle">
                      <span class="green box"></span>
                    </div>
                  </div>
                  <div class="card__content"></div>
                  <pre id="code">
                    <code class="python">
                      # These are signgle line comments <br></br>
                      <br></br>
                      '''These are <br></br>
                      multi-line <br></br>
                      comments''' <br></br>
                    </code>
                  </pre>
                </div>
              </li>
              <br></br>

              <li>
                <b>Python Variables:</b>
                <p className="content contentEnglish">
                  In programming, a variable is a container (storage area) to
                  hold data. We can store values in variables which can be used
                  wherever we want in our programme. We use the assignment
                  operator = to assign a value to a variable. We can also assign
                  multiple values to multiple variables at the same time. There
                  are some rules for writing variable names:
                </p>
                <div class="card">
                  <div class="tools">
                    <div class="circle">
                      <span class="red box"></span>
                    </div>
                    <div class="circle">
                      <span class="yellow box"></span>
                    </div>
                    <div class="circle">
                      <span class="green box"></span>
                    </div>
                  </div>
                  <div class="card__content"></div>
                  <pre id="code">
                    <code class="python">
                      else = 5 # not acceptable <br></br>
                      Cat = 4 <br></br>
                      cat = 9 # both are different <br></br>
                      _home89 # acceptable <br></br>
                      my variable # not acceptable <br></br>
                      variable@23 # not acceptable
                    </code>
                  </pre>
                </div>
              </li>
              <br></br>

              <li>
                <b>Subtopic:</b>
                <p className="content contentEnglish">
                  mewo meow mewo mewoe mewo mwepo mewo meow mewo mewoe mewo
                  mwepo mewo meow mewo mewoe mewo mwepo mewo meow mewo mewoe
                  mewo mwepo mewo meow mewo mewoe mewo mwepo mewo meow mewo
                  mewoe mewo mwepo
                </p>
                <div class="card">
                  <div class="tools">
                    <div class="circle">
                      <span class="red box"></span>
                    </div>
                    <div class="circle">
                      <span class="yellow box"></span>
                    </div>
                    <div class="circle">
                      <span class="green box"></span>
                    </div>
                  </div>
                  <div class="card__content"></div>
                  <pre id="code">
                    <code class="python">
                      else = 5 # not acceptable <br></br>
                      Cat = 4 <br></br>
                      cat = 9 # both are different <br></br>
                      _home89 # acceptable <br></br>
                      my variable # not acceptable <br></br>
                      variable@23 # not acceptable
                    </code>
                  </pre>
                </div>
              </li>
              <br></br>

              <li>
                <b>Subtopic:</b>
                <p className="content contentEnglish">
                  mewo meow mewo mewoe mewo mwepo mewo meow mewo mewoe mewo
                  mwepo mewo meow mewo mewoe mewo mwepo mewo meow mewo mewoe
                  mewo mwepo mewo meow mewo mewoe mewo mwepo mewo meow mewo
                  mewoe mewo mwepo
                </p>
                <div class="card">
                  <div class="tools">
                    <div class="circle">
                      <span class="red box"></span>
                    </div>
                    <div class="circle">
                      <span class="yellow box"></span>
                    </div>
                    <div class="circle">
                      <span class="green box"></span>
                    </div>
                  </div>
                  <div class="card__content"></div>
                  <pre id="code">
                    <code class="python">
                      else = 5 # not acceptable <br></br>
                      Cat = 4 <br></br>
                      cat = 9 # both are different <br></br>
                      _home89 # acceptable <br></br>
                      my variable # not acceptable <br></br>
                      variable@23 # not acceptable
                    </code>
                  </pre>
                </div>
              </li>
              <br></br>
            </ol>
            <div className="videoContainer">
              <h5>Reference Video:</h5>
              <center>
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/3dy_PYF9xOI"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </center>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>

        
      </div>
    </>
  );
}

export default TheoryMat;
