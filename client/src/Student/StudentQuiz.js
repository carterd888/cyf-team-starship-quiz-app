import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../GeneralPages/Header";
import QuizExample from "../../../server/QuizExample.js";
import Button from "../GeneralPages/Button";


const StudentQuiz = () => {

	const [quizQuestions, setQuizQuestions]= useState([]);
	const [quizList, setQuizList] = useState([]);

	useEffect(() => {
		fetch("http://localhost:3100/api/quiz") // Change to https://cyf-team-starship-quiz-app.herokuapp.com/api/quiz
			.then((data) => data.json())
			.then((jsonData) => setQuizList(jsonData))
			.catch((e) => console.log(e));
	}, []);

	async function handleChange(e) {
		console.log(e.target.value);
		await fetch(`http://localhost:3100/api/questions/${e.target.value}`) // Change to https://cyf-team-starship-quiz-app.herokuapp.com/api/questions/${e.target.value}
			.then((data) => data.json())
			.then((jsonData) => setQuizQuestions(jsonData))
			.catch((e) => console.log(e));

		console.log(quizQuestions);
	}

	/* const answers = [];
	const selectedAnswer = [];

	function checkAnswer (e){
		// console.log("This is the checkAnswer" + e.target.value);
		// console.log(quizQuestions[0].correct_answer);

		for (let i = 0; i < quizQuestions.length; i++){

			if(e.target.value == quizQuestions[i].correct_answer){
				answers.push("True");
				selectedAnswer.push(e.target.value);
			}else{
				answers.push("False");
				selectedAnswer.push(e.target.value);
			}

		}

	}
 */

	/* 	const [wronanswer_1, setAnnwer_1]= useState("");
	function checkAnswer (e){
		(e.target.value == quizQuestions[0].wrong_answer_1);
		setAnswer(wrong_answer_1);
	} */

	function submitFunction(e) {
		e.preventDefault();
		//console.log(answers);

	}

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
							<label htmlFor="answer1">{q.correct_answer}
								<input type="radio" id="answer1" name={q.id} value={q.correct_answer} onChange={checkAnswer} />
							</label>
							<label htmlFor="answer2">{q.wrong_answer_1}
								<input type="radio" id="answer2" name={q.id} value={q.wrong_answer_1} onChange={checkAnswer} />
							</label>
							<div>
								{q.wrong_answer_2 && (
									<label htmlFor="answer3">{q.wrong_answer_2}
										<input type="radio" id="answer3" name={q.id} value={q.wrong_answer_2} onChange={checkAnswer} />
									</label>
								)}
							</div>
							<div>
								{q.wrong_answer_3 &&  (
									<label htmlFor="answer4">{q.wrong_answer_3}
										<input type="radio" id="answer4" name={q.id} value={q.wrong_answer_3} onChange={checkAnswer} />
									 </label>
								)}
							</div>
							<div>
								{q.wrong_answer_4 && (
									<label htmlFor="answer5">{q.wrong_answer_4}
										<input type="radio" id="answer5" name={q.id} value={q.wrong_answer_4} onChange={checkAnswer} />
									</label>
								)}
							</div>
							<div>
								{q.wrong_answer_5 && (
									<label htmlFor="answer6">{q.wrong_answer_5}
										<input type="radio" id="answer6" name={q.id} value={q.wrong_answer_5}  onChange={checkAnswer} />
									</label>
								)}
							</div>
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