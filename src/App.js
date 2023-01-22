import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TheoryMat from "./Components/TheoryMat";
import CodePlayground from "./Components/CodePlayground";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import TheoryMatCh1 from "./Components/TheoryMatCh1";
import TheoryMatCh2 from "./Components/TheoryMatCh2";
import QuizPage from "./Components/QuizPage";
import ChatBot from "./Components/Chat";
import Login from "./Components/Login";
import Rehome from "./Components/Rehome";
import More from "./Components/More";
import Quiz from "./Components/Quiz1";



function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/theorymat" element={<TheoryMat />} />
          <Route path="/codeplayground" element={<CodePlayground />} />
          <Route path="/theorymatch1" element={<TheoryMatCh1 />} />
          <Route path="/theorymatch2" element={<TheoryMatCh2 />} />
          <Route path="/quizpage" element={<QuizPage />} />
          <Route path="/chatbot" element={<ChatBot />} />
          <Route path="/login" element={<Login />} />
          <Route path="/rehome" element={<Rehome />} />
          <Route path="/more" element={<More />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


// https://bot.dialogflow.com/b588cf64-c117-4c3c-8441-1adcbd6582fc

{/* <iframe
    allow="microphone;"
    width="350"
    height="430"
    src="https://console.dialogflow.com/api-client/demo/embedded/b588cf64-c117-4c3c-8441-1adcbd6582fc">
</iframe> */}
