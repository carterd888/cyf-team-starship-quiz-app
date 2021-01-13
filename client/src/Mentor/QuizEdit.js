import React, { useState } from "react";
import { Link } from "react-router-dom";
import MentorStyle from "./MentorStyle";
import Button from "../GeneralPages/Button";

const QuizEdit = (props) => {
  const mentorEmail = props.location.state.mentorEmail;
  const quizName = props.location.state.quizName;
  const quizId = props.location.state.quizId;
  const questionObj = props.location.state.q;

  const [correctAnswer, setCorrectAnswer] = useState(
    questionObj.correct_answer
  );
  const [wrongAnswer1, setWrongAnswer1] = useState(questionObj.wrong_answer_1);
  const [wrongAnswer2, setWrongAnswer2] = useState(questionObj.wrong_answer_2);
  const [wrongAnswer3, setWrongAnswer3] = useState(questionObj.wrong_answer_3);
  const [wrongAnswer4, setWrongAnswer4] = useState(questionObj.wrong_answer_4);
  const [wrongAnswer5, setWrongAnswer5] = useState(questionObj.wrong_answer_5);
  const [question, setQuestion] = useState(questionObj.question);

  function handleChange(e) {
    if (e.target.name === "question") {
      setQuestion(e.target.value);
    } else if (e.target.name === "correctAnswer") {
      setCorrectAnswer(e.target.value);
    } else if (e.target.name === "wrongAnswer1") {
      setWrongAnswer1(e.target.value);
    } else if (e.target.name === "wrongAnswer2") {
      setWrongAnswer2(e.target.value);
    } else if (e.target.name === "wrongAnswer3") {
      setWrongAnswer3(e.target.value);
    } else if (e.target.name === "wrongAnswer4") {
      setWrongAnswer4(e.target.value);
    } else if (e.target.name === "wrongAnswer5") {
      setWrongAnswer5(e.target.value);
    }
  }

  function handleSubmit(e) {
  if(question === "" || correctAnswer === "" || wrongAnswer1 === ""){
			alert("Please fill out the required fills.");
			 e.preventDefault();
		}else{

    fetch(`http://localhost:3100/api/questions/${questionObj.id}`, {
      method: "PUT",
      body: JSON.stringify({
        question: question,
        correct_answer: correctAnswer,
        wrong_answer_1: wrongAnswer1,
        wrong_answer_2: wrongAnswer2,
        wrong_answer_3: wrongAnswer3,
        wrong_answer_4: wrongAnswer4,
        wrong_answer_5: wrongAnswer5,
        quiz_id: questionObj.quiz_id,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    alert("The question has been submitted.");
    setQuestion("");
    setCorrectAnswer("");
    setWrongAnswer1("");
    setWrongAnswer2("");
    setWrongAnswer3("");
    setWrongAnswer4("");
    setWrongAnswer5("");
  }
}

  return (
    <div className="container">
      <MentorStyle />
      <h1 className="quiz-edit-page-header">Edit Question:</h1>
      <form className="question-form needs-validation" noValidate>
        <div className="question-input-area">
          <div className="question-box was-validated">
            <label htmlFor="question">Enter the question below:</label>
            <textarea
              className="form-control is-invalid"
              id="question"
              name="question"
              rows="8"
              cols="145"
              value={question}
              onChange={handleChange}
              placeholder="Please fill the question here !"
              required
            />
          </div>

          <div className="answer-box was-validated">
            <label htmlFor="correctAnswer">Answer 1 </label>
            <input
              className="true-answer form-control is-invalid"
              type="text"
              name="correctAnswer"
              placeholder="Enter correct answer here"
              value={correctAnswer}
              onChange={handleChange}
              required
            />
          </div>

          <div className="answer-box was-validated">
            <label htmlFor="wrongAnswer1">Answer 2 </label>
            <input
              className="false-answer form-control is-invalid"
              type="text"
              name="wrongAnswer1"
              placeholder="Enter wrong answer here"
              value={wrongAnswer1}
              onChange={handleChange}
              required
            />
          </div>

          <div className="answer-box">
            <label htmlFor="wrongAnswer2">Answer 3 (optional) </label>
            <input
              className="form-control false-answer"
              type="text"
              name="wrongAnswer2"
              placeholder="Enter wrong answer here"
              value={wrongAnswer2}
              onChange={handleChange}
            />
          </div>

          <div className="answer-box">
            <label htmlFor="wrongAnswer3">Answer 4 (optional) </label>
            <input
              className="form-control false-answer"
              type="text"
              name="wrongAnswer3"
              placeholder="Enter wrong answer here"
              value={wrongAnswer3}
              onChange={handleChange}
            />
          </div>

          <div className="answer-box">
            <label htmlFor="wrongAnswer4">Answer 5 (optional) </label>
            <input
              className="form-control false-answer"
              type="text"
              name="wrongAnswer4"
              placeholder="Enter wrong answer here"
              value={wrongAnswer4}
              onChange={handleChange}
            />
          </div>

          <div className="answer-box">
            <label htmlFor="wrongAnswer5">Answer 6 (optional) </label>
            <input
              className="form-control false-answer"
              type="text"
              name="wrongAnswer5"
              placeholder="Enter wrong answer here"
              value={wrongAnswer5}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="question-submit-button">
          <Link
            to={{
              pathname: "/quizsummary",
              state: { quizId, quizName, mentorEmail },
            }}
          >
            <button
              className="quiz-create-button btn-dark btn-lg"
              type="submit"
              onClick={handleSubmit}
            >
              click here to submit the change
            </button>
          </Link>
        </div>
      </form>
      <div className="mentor-buttons button-padding">
        <Link
          className="mentor-link"
          to={{
            pathname: "/quizpage",
            state: { quizName, mentorEmail },
          }}
        >
          <Button buttontext="Add a new question" />
        </Link>
      </div>
    </div>
  );
};

export default QuizEdit;
