import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../GeneralPages/Header";
import Button from "../GeneralPages/Button";
import StudentStyle from "./StudentStyle";
import Footer from "../GeneralPages/Footer";

const StudentQuiz = () => {

	const [quizQuestions, setQuizQuestions]= useState([]);
	const [quizList, setQuizList] = useState([]);
	const [quizId, setQuizId] = useState(0);
	const quizAnswers = [];

	useEffect(() => {
		fetch("http://localhost:3100/api/quiz") // Change to https://cyf-team-starship-quiz-app.herokuapp.com/api/quiz
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

	/* DELETE THESE LATER */
	console.log("quiz questions array: ");
	console.log(quizQuestions);
	console.log("quiz answers array: ");
	console.log(quizAnswers);

	function checkAnswer (e) {

		const question = e.target.value.split(",");		//index 0 = correct/wrong answer, index 1 = question content, index 2 = question id
		if(question[0] == "correct_answer") {
			quizAnswers[question[2]] = true;
		} else {
			quizAnswers[question[2]] = false;
		}
		console.log(quizAnswers);
	}

	function submitFunction(e) {
		let score = 0;
		for (let i = 1; i < quizAnswers.length; ++i) {
			if (quizAnswers[i]) {
				++score;
			}
		}

		const studentScore = `your score is ${score} / ${quizQuestions.length}`;
		console.log(studentScore);

		fetch("http://localhost:3100/api/results", {
			method: "POST",
			body: JSON.stringify({
				quiz_id: quizId,
				student_id: 1,
				score: score,
				quiz_length: quizQuestions.length,
			}),
			headers: {
				"Content-Type": "application/json",
			},
		});
		alert("The quiz has been submitted.");
	}

	return (
		<div className="container">
			<Header />
			<StudentStyle />
			<div>
				<select name="id" onChange = {handleChange}>
					{quizList.map((q) =>{
						return (<option key={q.id} value={q.id} >{q.quiz_name}</option>);
					})}
				</select>
			</div>

			<form>
				{quizQuestions.map((q) => {
					return (
						<div>
							<h2>{q.question}</h2>
							{q.answers.map((ans) => {
								return (
									<div>
										<label>{ans[1]}
											<input
												type="radio"
												name={ans[2]}
												value={ans}
												onChange={checkAnswer}
											/>
										</label>
									</div>
								);
							})}
						</div>
					);
				})}
				<br />
				<Link to = "/studentscore" params ={{ score: "test" }}>
					<button onClick={submitFunction}>Submit the answers!</button>
				</Link>
			</form>

			<Link to = "/studentpage">
				<Button buttontext ='Go back to Student Page' />
			</Link>
			<Footer />
		</div>
	);
};

export default StudentQuiz;