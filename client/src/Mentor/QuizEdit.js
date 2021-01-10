import React, { useState } from "react";
import { Link } from "react-router-dom";

const QuizEdit =(props)=>{

	const mentorEmail = props.location.state.mentorEmail;
	console.log(props.location.state.q);
	const questionObj =props.location.state.q;
	const quizName = questionObj.quiz_id;

	const [correctAnswer, setCorrectAnswer]= useState(questionObj.correct_answer);
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

	function handleSubmit (e) {
		/* e.preventDefault(); */
		console.log(`question is: ${question} correct answer: ${correctAnswer}, first wrong answer: ${wrongAnswer1} , second wrong answer: ${wrongAnswer2}, `
			+ `, third wrong answer: ${wrongAnswer3}, , fourth wrong answer: ${wrongAnswer4}, , fifth wrong answer: ${wrongAnswer5} `);

		fetch(`http://localhost:3100/api/questions/${questionObj.id}`, {
			method: "PUT",
			body: JSON.stringify({
				question: question,
				correct_answer:correctAnswer,
				wrong_answer_1: wrongAnswer1,
				wrong_answer_2: wrongAnswer2,
				wrong_answer_3: wrongAnswer3,
				wrong_answer_4: wrongAnswer4,
				wrong_answer_5: wrongAnswer5,
				quiz_id:questionObj.quiz_id,
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
			<h1>Edit Questions</h1>
			<form >
				<label htmlFor="question ">Enter the question below:</label>
				<br />
				<textarea
					id="question"
					name="question"
					rows="8"
					cols="40"
					value={question} onChange={handleChange}
				></textarea>
				<br />
				<div>
					<br />
					<label htmlFor="correctAnswer" >Answer 1 </label>
					<input
						className='true-answer'
						type="text"
						name="correctAnswer"
						placeholder="Enter correct answer here"
						value={correctAnswer}
						onChange={handleChange} />
				</div>
				<br />
				<div>
					<label htmlFor="wrongAnswer1" >Answer 2 </label>
					<input className='false-answer'
						type="text"
						name="wrongAnswer1"
						placeholder="Enter wrong answer here"
						value= {wrongAnswer1}
						onChange={handleChange} />
				</div>
				<br />
				<div>
					<label htmlFor="wrongAnswer2" >Answer 3 (optional) </label>
					<input className='false-answer'
						type="text"
						name="wrongAnswer2"
						placeholder="Enter wrong answer here"
						value= {wrongAnswer2}
						onChange={handleChange} />
				</div>
				<br />
				<div>
					<label htmlFor="wrongAnswer3" >Answer 4 (optional) </label>
					<input className='false-answer'
						type="text"
						name="wrongAnswer3"
						placeholder="Enter wrong answer here"
						value= {wrongAnswer3}
						onChange={handleChange} />
				</div>
				<br />
				<div>
					<label htmlFor="wrongAnswer4">Answer 5 (optional) </label>
					<input className='false-answer'
						type="text"
						name="wrongAnswer4"
						placeholder="Enter wrong answer here"
						value= {wrongAnswer4}
						onChange={handleChange} />
				</div>
				<br />
				<div>
					<label htmlFor="wrongAnswer5">Answer 6 (optional) </label>
					<input className='false-answer'
						type="text"
						name="wrongAnswer5"
						placeholder="Enter wrong answer here"
						value= {wrongAnswer5}
						onChange={handleChange} />
				</div>
				<br />

				<Link to={{
					pathname: "/quizsummary",
					state: { quizName, mentorEmail },
				}}>
					<button className="submit-button" type="submit" onClick = {handleSubmit}>click here to submit the change</button>
				</Link>

			</form>
		</div>
	);

};

export default QuizEdit;