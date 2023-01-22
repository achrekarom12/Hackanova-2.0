import "./TheoryMat.css";
import { Link } from "react-router-dom";

function TheoryMat() {
  return (
    <>
      {/* <div className="p-3 mb-2 bg-primary text-white">
        Welcome to Python for Beginners 101
      </div> */}

      <div className="google_translate_element"></div>
      <div className="container">
        <span className="en">English</span>
        <input type="checkbox" className="check" />
        <span className="hn">हिंदी</span>
        {/* <div className="EngContent">
          <div>
            <h2>Introduction</h2>
            <ol>
              <li>
                <b>Python Keywords:</b>
                <div className="content contentEnglish">
                  There are some words in Python that we can’t use for our
                  variable name or class name. We call them Keywords. These are
                  reserved words designated for special purposes.
                </div>
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
                <div className="content contentEnglish">
                  Comments are hints that we use to make our code more
                  understandable. Comments are completely ignored by the
                  interpreter. They are meant for fellow programmers. There are
                  two types of comments ie. Single line and multiline.
                </div>
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
                <div className="content contentEnglish">
                  In programming, a variable is a container (storage area) to
                  hold data. We can store values in variables which can be used
                  wherever we want in our programme. We use the assignment
                  operator = to assign a value to a variable. We can also assign
                  multiple values to multiple variables at the same time. There
                  are some rules for writing variable names:
                </div>
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
                <div className="content contentEnglish">
                  mewo meow mewo mewoe mewo mwepo mewo meow mewo mewoe mewo
                  mwepo mewo meow mewo mewoe mewo mwepo mewo meow mewo mewoe
                  mewo mwepo mewo meow mewo mewoe mewo mwepo mewo meow mewo
                  mewoe mewo mwepo
                </div>
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
                <div className="content contentEnglish">
                  mewo meow mewo mewoe mewo mwepo mewo meow mewo mewoe mewo
                  mwepo mewo meow mewo mewoe mewo mwepo mewo meow mewo mewoe
                  mewo mwepo mewo meow mewo mewoe mewo mwepo mewo meow mewo
                  mewoe mewo mwepo
                </div>
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

        <div className="HinContent">
          <h2>Introduction</h2>
          <ol>
            <li>
              <b>Python Keywords:</b>
              <div className="content contentHindi">
                पायथन एक लोकप्रिय और बहुमुखी प्रोग्रामिंग भाषा है जो हो सकती है
                डेटा विज्ञान, वेब विकास, स्वचालन, और बहुत कुछ के लिए उपयोग किया
                जाता है। सौभाग्य से नौसिखियों के लिए, यह सीखने की शुरुआत करने के
                लिए भी एक बेहतरीन भाषा है प्रोग्रामिंग क्योंकि पायथन कोड पढ़ने
                और लिखने में आसान है। यह पाठ्यक्रम पायथन प्रोग्रामिंग का एक
                उत्कृष्ट परिचय है, और वह भी वह भी संभव सबसे संवादात्मक तरीके से!
                यहां बताया गया है कि कैसे सीखना है प्रक्रिया कार्य करती है: एक
                अवधारणा सीखें।
              </div>
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
              <div className="content contentEnglish">
                Comments are hints that we use to make our code more
                understandable. Comments are completely ignored by the
                interpreter. They are meant for fellow programmers. There are
                two types of comments ie. Single line and multiline.
              </div>
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
              <div className="content contentEnglish">
                In programming, a variable is a container (storage area) to hold
                data. We can store values in variables which can be used
                wherever we want in our programme. We use the assignment
                operator = to assign a value to a variable. We can also assign
                multiple values to multiple variables at the same time. There
                are some rules for writing variable names:
              </div>
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
              <div className="content contentEnglish">
                mewo meow mewo mewoe mewo mwepo mewo meow mewo mewoe mewo mwepo
                mewo meow mewo mewoe mewo mwepo mewo meow mewo mewoe mewo mwepo
                mewo meow mewo mewoe mewo mwepo mewo meow mewo mewoe mewo mwepo
              </div>
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
              <div className="content contentEnglish">
                mewo meow mewo mewoe mewo mwepo mewo meow mewo mewoe mewo mwepo
                mewo meow mewo mewoe mewo mwepo mewo meow mewo mewoe mewo mwepo
                mewo meow mewo mewoe mewo mwepo mewo meow mewo mewoe mewo mwepo
              </div>
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
        </div> */}

        <div className="content">
          <div className="contentEnglish">
            <h2>English</h2>
            <h3>Introduction</h3>
            <p>
              1 Python is a popular and versatile programming language that can
              be used for data science, web development, automation, and many
              more. Luckily for beginners, it is also a great language to start
              learning programming because Python code is easier to read and
              write. This course is an excellent introduction to Python
              programming, and that too in the most interactive way possible!
              Here's how the learning process works: Learn a concept. <br />2
              Edit and run code related to it. Practice what you have learned in
              real-time. By the end, you'll write hundreds of programs and
              become comfortable writing code in Python.
            </p>
            <br />
            <h3>Chp 1 : Flow Control Statements</h3>
            <h4>1 if-else</h4>
            <p>
              The if-else statement provides an else block combined with the if
              statement which is executed in the false case of the condition. If
              the condition is true, then the if-block is executed. Otherwise,
              the else-block is executed.
            </p>
            <p>Syntax:</p>
            <br />
            <p>
              if condition: <br />
            </p>
            <p>#block of statements</p>
            <p>else:</p>
            <p>#another block of statements (else-block)</p>
            <br />
            <h4>2 Loops</h4>
            <p>
              The following loops are available in Python to fulfil the looping
              needs. Python offers 3 choices for running the loops. The basic
              functionality of all the techniques is the same, although the
              syntax and the amount of time required for checking the condition
              differ. We can run a single statement or set of statements
              repeatedly using a loop command.
            </p>
            <p>Syntax:</p>
            <br />
            <p>
              for value in numbers: <br />
            </p>
            <p>#block of statements</p>

            <table className="alt">
              <tbody>
                <tr>
                  <th>Sr.No.</th>
                  <th>Name of the loop</th>
                  <th>Loop Type &amp; Description</th>
                </tr>
                <tr>
                  <td>1</td>
                  <td>
                    <strong>While loop</strong>
                  </td>
                  <td>
                    Repeats a statement or group of statements while a given
                    condition is TRUE. It tests the condition before executing
                    the loop body.
                  </td>
                </tr>
                <br />
                <br />
                <tr>
                  <td>2</td>
                  <td>
                    <strong>For loop</strong>
                  </td>
                  <td>
                    This type of loop executes a code block multiple times and
                    abbreviates the code that manages the loop variable.
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    <strong>Nested loops</strong>
                  </td>
                  <td>We can iterate a loop inside another loop.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="content">
          <div className="contentHindi">
            <h2>हिंदी</h2>
            <h3>Introduction</h3>
            <p>
              1 पायथन एक लोकप्रिय और बहुमुखी प्रोग्रामिंग भाषा है जो हो सकती है
              डेटा विज्ञान, वेब विकास, स्वचालन, और बहुत कुछ के लिए उपयोग किया
              जाता है। सौभाग्य से नौसिखियों के लिए, यह सीखने की शुरुआत करने के
              लिए भी एक बेहतरीन भाषा है प्रोग्रामिंग क्योंकि पायथन कोड पढ़ने और
              लिखने में आसान है। यह पाठ्यक्रम पायथन प्रोग्रामिंग का एक उत्कृष्ट
              परिचय है, और वह भी वह भी संभव सबसे संवादात्मक तरीके से! यहां बताया
              गया है कि कैसे सीखना है प्रक्रिया कार्य करती है: एक अवधारणा सीखें।{" "}
              <br />2 इससे संबंधित कोड संपादित करें और चलाएं। वास्तविक समय में
              आपने जो सीखा है उसका अभ्यास करें। अंत तक, आप लिखेंगे सैकड़ों
              कार्यक्रम और पायथन में सहज लेखन कोड बन जाते हैं।
            </p>
            <br />
            <h3>Chp 1 : Flow Control Statements</h3>
            <h4>1 if-else</h4>
            <p>
              if-else स्टेटमेंट if के साथ संयुक्त एक और ब्लॉक प्रदान करता है
              बयान जो स्थिति के झूठे मामले में निष्पादित किया जाता है। अगर
              स्थिति सत्य है, तो if-block निष्पादित किया जाता है। अन्यथा
              अन्य-ब्लॉक निष्पादित किया गया है।
            </p>
            <p>वाक्य - विन्यास:</p>
            <br />
            <p>
              if condition: <br />
            </p>
            <p>#बयानों का ब्लॉक</p>
            <p>else:</p>
            <p>#बयानों का एक और ब्लॉक (else-block)</p>
            <br />
            <h4>2 Loops</h4>
            <p>
              लूपिंग की जरूरतों को पूरा करने के लिए पायथन में निम्नलिखित लूप
              उपलब्ध हैं। पायथन लूप चलाने के लिए 3 विकल्प प्रदान करता है। सभी
              तकनीकों की मूल कार्यक्षमता समान है, हालांकि सिंटैक्स और स्थिति की
              जाँच के लिए आवश्यक समय अलग-अलग है। हम लूप कमांड का उपयोग करके
              बार-बार एक स्टेटमेंट या स्टेटमेंट का सेट चला सकते हैं। वाक्य -
              विन्यास:
            </p>
            <p>Syntax:</p>
            <br />
            <p>
              for value in numbers: <br />
            </p>
            <p>#बयानों का ब्लॉक</p>
            <br />
            <table className="alt">
              <tbody>
                <tr>
                  <th>Sr.No.</th>
                  <th>Name of the loop</th>
                  <th>Loop Type &amp; Description</th>
                </tr>
                <tr>
                  <td>1</td>
                  <td>
                    <strong>While loop</strong>
                  </td>
                  <td>
                    दिए गए समय में किसी कथन या कथनों के समूह को दोहराता है
                    स्थिति सत्य है। यह क्रियान्वित करने से पहले स्थिति का
                    परीक्षण करता है लूप बॉडी।
                  </td>
                </tr>

                <tr>
                  <td>2</td>
                  <td>
                    <strong>For loop</strong>
                  </td>
                  <td>
                    इस प्रकार का लूप एक कोड ब्लॉक को कई बार निष्पादित करता है और
                    लूप चर को प्रबंधित करने वाले कोड को संक्षिप्त करता है।
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    <strong>Nested loops</strong>
                  </td>
                  <td>हम एक लूप को दूसरे लूप के अंदर दोहरा सकते हैं।</td>
                </tr>
              </tbody>
            </table>
            <br></br>
            <br></br>
            <nav aria-label="Page navigation example">
              <ul className="pagination">
                <li className="page-item">
                  <a className="page-link disabled" href="#">
                    Previous
                  </a>
                </li>

                <li className="page-item">
                  <Link className="page-link" to="/theorymatch1">
                    Next
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <h3>Reference Video:</h3>
        <center>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/sSyCRQx5WM0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        </center>
      </div>
    </>
  );
}

export default TheoryMat;
