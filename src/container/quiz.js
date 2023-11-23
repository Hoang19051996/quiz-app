import { useEffect, useState } from "react";
import { quiz } from "../data";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuestions } from "../store/quiz";
const Quiz = () => {

  const [activeQuestion, setActiveQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState('')
  const [showResult, setShowResult] = useState(false)
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null)
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  })
const quizAPI = useSelector((state) => state.quiz.quiz);


  console.log("quizAPII", quizAPI)

  console.log("quiz", quiz[0])

  //deu la mang

  const {  question, choices, correctAnswer } = quizAPI[activeQuestion]  ?? {}



  const dispatch = useDispatch();




  useEffect(() => {
    dispatch(fetchQuestions());
   
  }, []);


 

  const onClickNext = () => {
    setSelectedAnswerIndex(null)
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1,
          }
        : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
    )
    if (activeQuestion !== quizAPI.length - 1) {
      setActiveQuestion((prev) => prev + 1)
    } else {
      setActiveQuestion(0)
      setShowResult(true)
    }
  }

  const onAnswerSelected = (answer, index) => {
    setSelectedAnswerIndex(index)
    if (answer === correctAnswer) {
      setSelectedAnswer(true)
    } else {
      setSelectedAnswer(false)
    }
  }

  const addLeadingZero = (number) => (number > 9 ? number : `0${number}`)

  return (
    <div className="quiz-container">
      {!showResult ? (
        <div>
          <div>
            <span className="active-question-no">{addLeadingZero(activeQuestion + 1)}</span>
            <span className="total-question">/{addLeadingZero(quizAPI.length)}</span>
          </div>
          <h2>{question}</h2>
          <ul>
            {(choices || []).map((answer, index) => (
              <li
                onClick={() => onAnswerSelected(answer, index)}
                key={answer}
                className={selectedAnswerIndex === index ? 'selected-answer' : null}>
                {answer}
              </li>
            ))}
          </ul>
          <div className="flex-right">
            <button onClick={onClickNext} disabled={selectedAnswerIndex === null}>
              {activeQuestion === quizAPI.length - 1 ? 'Finish' : 'Next'}
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
        </div>
      )}
    </div>
  )

};

export default Quiz;
