import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../GeneralPages/Header";
import QuizExample from "../../../server/QuizExample.js";
import Button from "../GeneralPages/Button";

let quizAnswers = [0];
QuizExample.map((q) => {
	quizAnswers.push(false)
	;
});

let quizQuestions = [];

async function handleChange(e) {
	console.log(e.target.value);
	await fetch(`http://localhost:3100/api/questions/${e.target.value}`) // Change to https://cyf-team-starship-quiz-app.herokuapp.com/api/questions/${e.target.value}
		.then((data) => data.json())
		.then((jsonData) => quizQuestions = jsonData)
		.catch((e) => console.log(e));

	console.log(quizQuestions);
}

const StudentQuiz = () => {

	const [quizList, setQuizList] = useState([]);
	useEffect(() => {
		fetch("http://localhost:3100/api/quiz") // Change to https://cyf-team-starship-quiz-app.herokuapp.com/api/quiz
			.then((data) => data.json())
			.then((jsonData) => setQuizList(jsonData))
			.catch((e) => console.log(e));
	}, []);

	function trueAnswer(e) {
		e.preventDefault();
		quizAnswers[e.target.value] = true;
	}

	function falseAnswer(e) {
		e.preventDefault();
		quizAnswers[e.target.value] = false;
	}

	function submitFunction(e) {
		e.preventDefault();
		console.log(quizAnswers);
	}

	// const [quizQuestions, setQuizQuestions] = useState([])
	// function handleChange(e) {
	//     console.log(e.target.value);
	//     useEffect(() => {
	//         fetch(`http://localhost:3100/api/questions/${e.target.value}`) // Change to https://cyf-team-starship-quiz-app.herokuapp.com/api/studentresults
	//             .then((data) => data.json())
	//             .then((jsonData) => setQuizQuestions(jsonData))
	//             .catch((e) => console.log(e));
	//     }, []);
	//     console.log("Quiz questions: ", quizQuestions);
	// }

	return (
		<div>
			<Header />

			<div>
				<select name="id" onChange = {handleChange}>
					{quizList.map((q) =>{
						return (<option key={q.id} value={q.id} >{q.quiz_name}</option>);
					})}
				</select>
			</div>

			<form>
				{quizQuestions.map((q) => {
					return(
						<div>
							{console.log(q)}
							<h2 >{q.question}</h2>
							<input type="radio" id="answer1" name={q.id} value={q.id} onChange={trueAnswer} />
							<label htmlFor="answer1">{q.correct_answer}</label>
							<input type="radio" id="answer2" name={q.id} value={q.id} onChange={falseAnswer} />
							<label htmlFor="answer2">{q.wrong_answer_1}</label>
							<input type="radio" id="answer3" name={q.id} />
							<label htmlFor="answer3">{q.wrong_answer_2}</label>
							<input type="radio" id="answer4" name={q.id} />
							<label htmlFor="answer4">{q.wrong_answer_3}</label>
							<input type="radio" id="answer5" name={q.id} />
							<label htmlFor="answer5">{q.wrong_answer_4}</label>
							<input type="radio" id="answer6" name={q.id} />
							<label htmlFor="answer6">{q.wrong_answer_5}</label>
						</div>
					);
				})}
				<br />
				<button onClick={submitFunction}>Submit the answers!</button>
			</form>

			<Link to = "/studentpage">
				<Button buttontext ='Go back to Student Page' />
			</Link>
		</div>
	);
};

export default StudentQuiz;