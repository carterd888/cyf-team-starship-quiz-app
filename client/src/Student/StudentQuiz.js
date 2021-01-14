import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../GeneralPages/Button";
import StudentStyle from "./StudentStyle";

const StudentQuiz = (props) => {

	const studentId = props.location.state.studentId;
	const studentName = props.location.state.studentName;
	const [quizQuestions, setQuizQuestions] = useState([]);
	const [quizList, setQuizList] = useState([]);
	const [quizId, setQuizId] = useState(null);
	const quizAnswers = [];

	useEffect(() => {
		fetch("http://localhost:3100/api/quizlist") // Change to https://cyf-team-starship-quiz-app.herokuapp.com/api/quizlist
			.then((data) => data.json())
			.then((jsonData) => setQuizList(jsonData))
			.catch((e) => console.log(e));
	}, []);

	async function handleChange(e) {
		setQuizId(e.target.value);
		await fetch(`http://localhost:3100/api/questions/${e.target.value}`) // Change to https://cyf-team-starship-quiz-app.herokuapp.com/api/questions/${e.target.value}
			.then((data) => data.json())
			.then((jsonData) => setQuizQuestions(jsonData))
			.catch((e) => console.log(e));
	}

	quizQuestions.map((q)=>{
		let objectPairs = Object.entries(q);
		q.answers = objectPairs;
		q.answers.splice(0, 3);

		for(let i = 0; i < q.answers.length; ++i) {
			q.answers[i].push(q.id);
			if(!q.answers[i][1]) {
				q.answers.splice(i);
				break;
			}
		}
		q.answers.sort(() => Math.random() - 0.5);
	});

	console.log(quizQuestions);

	function checkAnswer (e) {
		const question = e.target.value.split(",");		//index 0 = correct/wrong answer, index 1 = question content, index 2 = question id

		if(question[0] == "correct_answer") {
			quizAnswers[question[2]] = true;
		} else {
			quizAnswers[question[2]] = false;
		}
	}

	function submitFunction() {
		let totalScore = 0;
		for (let i = 1; i < quizAnswers.length; ++i) {
			if (quizAnswers[i]) {
				++totalScore;
			}
		}

		fetch("http://localhost:3100/api/results", {	// Change to https://cyf-team-starship-quiz-app.herokuapp.com/api/results
			method: "POST",
			body: JSON.stringify({
				quiz_id: quizId,
				student_id: studentId,
				score: totalScore,
				quiz_length: quizQuestions.length,
			}),
			headers: {
				"Content-Type": "application/json",
			},
		});
	}


	return (
    <div className="container">
      <StudentStyle />

      <div className="quiz-selector">
        <select
          name="id"
          className="form-select form-select-lg mb-3"
          onChange={handleChange}
        >
          <option>Select a quiz from the list...</option>
          {quizList.map((q) => {
            return (
              <option key={q.id} value={q.id}>
                {q.quiz_name}
              </option>
            );
          })}
        </select>
      </div>
      {quizId && (
        <form className="student-quiz-form">
          {quizQuestions.map((q, index) => {
            return (
              <div>
                <h2>
                  {index + 1}) {q.question}
                </h2>
                <div className="quiz-answers">
                  {q.answers.map((ans) => {
                    return (
                      <div>
                        <input
                          type="radio"
                          name={ans[2]}
                          value={ans}
                          onChange={checkAnswer}
                        />
                        <label>{ans[1]}</label>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </form>
      )}

      <div className="student-buttons">
        <Link
          className="student-link"
          to={{
            pathname: "/studentscoresubmit",
            state: { studentId, studentName },
          }}
        >
          <button
            className="quiz-submit-button btn-dark btn-lg"
            onClick={submitFunction}
          >
            Submit the answers!
          </button>
        </Link>
      </div>

      <div className="student-buttons button-padding">
        <Link
          className="student-link"
          to={{
            pathname: "/studentpage",
            state: { studentId, studentName },
          }}
        >
          <Button buttontext="Go back to Student Page" />
        </Link>
      </div>
    </div>
  );
};

export default StudentQuiz;