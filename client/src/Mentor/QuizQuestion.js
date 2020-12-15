import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../GeneralPages/Button";


const QuizQuestion = () => {

	const [correctAnswer, setCorrectAnswer]= useState("");
	const [wrongAnswer1, setWrongAnswer1] = useState("");
	const [wrongAnswer2, setWrongAnswer2] = useState("");
	const [wrongAnswer3, setWrongAnswer3] = useState("");
	const [wrongAnswer4, setWrongAnswer4] = useState("");
	const [wrongAnswer5, setWrongAnswer5] = useState("");
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
		} 
		else if (e.target.name === "correctAnswer") {
			setCorrectAnswer(e.target.value);
			//console.log(correctAnswer);
		} 
		else if (e.target.name === "wrongAnswer1") {
			setWrongAnswer1(e.target.value);
			//console.log(wrongAnswer1);
		}
		else if (e.target.name === "wrongAnswer2") {
			setWrongAnswer2(e.target.value);
			//console.log(wrongAnswer2);
		} 
		else if (e.target.name === "wrongAnswer3") {
			setWrongAnswer3(e.target.value);
			//console.log(wrongAnswer3);
		} 
		else if (e.target.name === "wrongAnswer4") {
			setWrongAnswer4(e.target.value);
			//console.log(wrongAnswer4);
		} 
		else if (e.target.name === "wrongAnswer5") {
			setWrongAnswer5(e.target.value);
			//console.log(wrongAnswer5);
		}  
		else if (e.target.name === "id"){
			setQuizName(e.target.value);
		}
	}

	function handleSubmit (e) {
		e.preventDefault();
		console.log(`question is: ${question} correct answer: ${correctAnswer}, first wrong answer: ${wrongAnswer1} , second wrong answer: ${wrongAnswer2}, `
			+ `, third wrong answer: ${wrongAnswer3}, , fourth wrong answer: ${wrongAnswer4}, , fifth wrong answer: ${wrongAnswer5} `);

		fetch("http://localhost:3100/api/quiz", {
			method: "POST",
			body: JSON.stringify({
				question: question,
				correct_answer:correctAnswer,
				wrong_answer_1: wrongAnswer1,
				wrong_answer_2: wrongAnswer2,
				wrong_answer_3: wrongAnswer3,
				wrong_answer_4: wrongAnswer4,
				wrong_answer_5: wrongAnswer5,
				quiz_id:quizName,
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
							placeholder="Enter correct answer here"
							value={correctAnswer}
							onChange={handleChange} />
					</label>
				</div>
				<br />
				<div>
					<label >
            Answer 2 {" "} <input className='false-answer'
							type="text"
							name="wrongAnswer1"
							placeholder="Enter wrong answer here"
							value= {wrongAnswer1}
							onChange={handleChange} />
					</label>
				</div>
				<br />
				<div>
					<label >
            Answer 3 (optional) {" "} <input className='false-answer'
							type="text"
							name="wrongAnswer2"
							placeholder="Enter wrong answer here"
							value= {wrongAnswer2}
							onChange={handleChange} />
					</label>
				</div>
				<br />
				<div>
					<label >
            Answer 4 (optional) {" "} <input className='false-answer'
							type="text"
							name="wrongAnswer3"
							placeholder="Enter wrong answer here"
							value= {wrongAnswer3}
							onChange={handleChange} />
					</label>
				</div>
				<br />
				<div>
					<label >
            Answer 5 (optional) {" "} <input className='false-answer'
							type="text"
							name="wrongAnswer4"
							placeholder="Enter wrong answer here"
							value= {wrongAnswer4}
							onChange={handleChange} />
					</label>
				</div>
				<br />
				<div>
					<label >
            Answer 6 (optional) {" "} <input className='false-answer'
							type="text"
							name="wrongAnswer5"
							placeholder="Enter wrong answer here"
							value= {wrongAnswer5}
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