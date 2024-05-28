import { useEffect, useState } from "react";
import { quiz } from "../data";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuestions } from "../store/quiz";
import { Link } from "react-router-dom";
import NavBar from "../component/NavBar";

const Quiz = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [selectedAnswerByText, setSelectedAnswerByText] = useState("");

  const [showResult, setShowResult] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [listAnswered, setListAnswered] = useState([]);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });
  const quizAPI = useSelector((state) => state.quiz.quiz);

  //deu la mang

  const { question, choices, correctAnswer } = quizAPI[activeQuestion] ?? {};

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchQuestions());
  }, []);

  if (quizAPI != "") {
    console.log("quiz", quizAPI);
  }

  const onClickNext = () => {
    setSelectedAnswerIndex(null);

    console.log("selectedAnswerByText", selectedAnswerByText);
    console.log("listAnswered", listAnswered);
    setListAnswered([...listAnswered, selectedAnswerByText]);
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1,
          }
        : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
    );
    if (activeQuestion !== quizAPI.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setActiveQuestion(0);
      setShowResult(true);
    }
  };

  const onAnswerSelected = (answer, index) => {
    console.log("answer1", answer);
    console.log("index1", index);

    setSelectedAnswerIndex(index);

    setSelectedAnswerByText(answer);

    console.log("selectedAnswerByText", selectedAnswerByText);

    console.log("answer", answer);

    if (answer === correctAnswer) {
      setSelectedAnswer(true);
    } else {
      setSelectedAnswer(false);
    }
    setSelectedAnswerByText(answer);
  };

  const addLeadingZero = (number) => (number > 9 ? number : `0${number}`);

  return (
    <>
        <NavBar />

      <div className="main-container-quiz">
        <div className="quiz-container">
          {!showResult ? (
            <div>
              <div>
                <span className="active-question-no">
                  {addLeadingZero(activeQuestion + 1)}
                </span>
                <span className="total-question">
                  /{addLeadingZero(quizAPI.length)}
                </span>
              </div>
              <h2>{question}</h2>
              <ul>
                {(choices || []).map((answer, index) => (
                  <li
                    onClick={() => onAnswerSelected(answer, index)}
                    key={answer}
                    className={
                      selectedAnswerIndex === index ? "selected-answer" : null
                    }
                  >
                    {answer}
                  </li>
                ))}
              </ul>
              <div className="flex-right">
                <button
                  onClick={onClickNext}
                  disabled={selectedAnswerIndex === null}
                >
                  {activeQuestion === quizAPI.length - 1 ? "Finish" : "Next"}
                </button>
              </div>
            </div>
          ) : (
            <div className="result">
              <h3>Result</h3>
              <p>
                Total Question: <span>{quizAPI.length}</span>
              </p>
              <p>
                Total Score:<span> {result.score}</span>
              </p>
              <p>
                Correct Answers:<span> {result.correctAnswers}</span>
              </p>
              <p>
                Wrong Answers:<span> {result.wrongAnswers}</span>
              </p>

              <div className="question-final">
                <div className="question-final-1">
                  1: {quizAPI != "" ? quizAPI[0].question : ""}
                </div>
                <br></br>
                &nbsp; Your answer:{" "}
                <span className="answer-final">{listAnswered[0]}</span>{" "}
                <br></br>
                &nbsp; Correct answer:{" "}
                <span className="answer-final">
                  {quizAPI != "" ? quizAPI[0].correctAnswer : ""}
                </span>
                <div className="question-final-1">
                  2: {quizAPI != "" ? quizAPI[1].question : ""}
                </div>
                <br></br>
                &nbsp; Your answer:{" "}
                <span className="answer-final">{listAnswered[1]}</span>{" "}
                <br></br>
                &nbsp; Correct answer:{" "}
                <span className="answer-final">
                  {quizAPI != "" ? quizAPI[1].correctAnswer : ""}
                </span>
                <div className="question-final-1">
                  3: {quizAPI != "" ? quizAPI[2].question : ""}
                </div>
                <br></br>
                &nbsp; Your answer:{" "}
                <span className="answer-final">{listAnswered[2]}</span>{" "}
                <br></br>
                &nbsp; Correct answer:{" "}
                <span className="answer-final">
                  {quizAPI != "" ? quizAPI[2].correctAnswer : ""}
                </span>
                <div className="question-final-1">
                  4: {quizAPI != "" ? quizAPI[3].question : ""}
                </div>
                <br></br>
                &nbsp; Your answer:{" "}
                <span className="answer-final">{listAnswered[3]}</span>{" "}
                <br></br>
                &nbsp; Correct answer:{" "}
                <span className="answer-final">
                  {quizAPI != "" ? quizAPI[3].correctAnswer : ""}
                </span>
                <div className="question-final-1">
                  5: {quizAPI != "" ? quizAPI[4].question : ""}
                </div>
                <br></br>
                &nbsp; Your answer:{" "}
                <span className="answer-final">{listAnswered[4]}</span>{" "}
                <br></br>
                &nbsp; Correct answer:{" "}
                <span className="answer-final">
                  {quizAPI != "" ? quizAPI[4].correctAnswer : ""}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="container backHome" >
      <p
            href=""
            class="btn btn-dark py-2 px-4 me-3 animated slideInRight"
            // onClick={() => navigate("/combo")}
          >
            Back to homepage
          </p>
      </div>
    </>
  );
};

export default Quiz;
