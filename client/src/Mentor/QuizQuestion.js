import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../GeneralPages/Button";


const QuizQuestion = () => {

	const [correctAnswer, setCorrectAnswer]= useState("");
	const [wrongAnswer, setWrongAnswer] = useState("");
	const [question, setQuestion] = useState("");
	const [quizName, setQuizName] = useState("");

	const [quiz, setQuiz] = useState([]);
	useEffect(() => {
		fetch("http://localhost:3100/api/quiz") // Change to https://cyf-team-starship-quiz-app.herokuapp.com/api/studentresults
			.then((data) => data.json())
			.then((jsonData) => setQuiz(jsonData))
			.catch((e) => console.log(e));
	}, []);


	function handleChange(e) {
		if (e.target.name === "question") {
			setQuestion(e.target.value);
			//console.log(question);
		} else if (e.target.name === "correctAnswer") {
			setCorrectAnswer(e.target.value);
			//console.log(correctAnswer);
		} else if (e.target.name === "wrongAnswer") {
			setWrongAnswer(e.target.value);
			//console.log(wrongAnswer);
		} else if (e.target.name === "id"){
			setQuizName(e.target.value);
		}
	}

	function handleSubmit (e) {
		e.preventDefault();
		console.log(`question is: ${question} correct answer: ${correctAnswer}, wrong answer: ${wrongAnswer} `);

		fetch("http://localhost:3100/api/quiz", {
			method: "POST",
			body: JSON.stringify({
				question: question,
				correct_answer:correctAnswer,
				wrong_answer: wrongAnswer,
				quiz_id:quizName,
			}),
			headers: {
				"Content-Type": "application/json",
			},
		});

		alert("The question has been submitted.");
		setQuestion("");
		setCorrectAnswer("");
		setWrongAnswer("");
	}


	return (
		<div>
			<select name= "id" onBlur= {handleChange}>
				{quiz.map((q) =>{
					return (<option key={q.id} value={q.id} >{q.quiz_name}</option>);
				})}

			</select>
			<form >
				<label>
          Enter the question below:
					<br />
					<textarea
						id="question"
						name="question"
						rows="8"
						cols="40"
						value={question} onChange={handleChange}
					></textarea>
				</label>
				<br />
				<div>
					<br />
					<label >
            Answer 1 {" "} <input
							className='true-answer'
							type="text"
							name="correctAnswer"
							value={correctAnswer}
							onChange={handleChange} />
					</label>
				</div>
				<br />
				<div>
					<label >
            Answer 2 {" "} <input className='false-answer'
							type="text"
							name="wrongAnswer"
							value= {wrongAnswer}
							onChange={handleChange} />
					</label>
				</div>
				<br />
				<button className="submit-button" type="submit" onClick = {handleSubmit}>click here to submit the quiz</button>
				<br />

				<Link to = "/mentorpage">
					<br />
					<Button buttontext ='Go back to Mentor Page' />
				</Link>
			</form>
		</div>
	);
};
export default QuizQuestion;