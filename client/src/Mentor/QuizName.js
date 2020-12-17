import React, { useState } from "react";
import Header from "../GeneralPages/Header";
import moment from "moment";
import { Link } from "react-router-dom";


const QuizName =()=> {

	const thisDate = new Date();
	const formattedDate = moment(thisDate).format("MMMM Do YYYY, h:mm:ss");


	const [quizName, setQuizName]= useState(formattedDate);

	function handleChange(e) {
		setQuizName(e.target.value);
		console.log(quizName);
	}

	function handleSubmit (e) {
		// e.preventDefault();
		console.log(`Quiz name is: ${quizName}`);

		if(!quizName){
			setQuizName(formattedDate);
			fetch("http://localhost:3100/api/quizname", {
				method: "POST",
				body: JSON.stringify({
					quiz_name: quizName,
				}),
				headers: {
					"Content-Type": "application/json",
				},
			});

			alert("The Quiz name has been submitted.");
			setQuizName("");
		}

		fetch("http://localhost:3100/api/quizname", {
			method: "POST",
			body: JSON.stringify({
				quiz_name: quizName,
			}),
			headers: {
				"Content-Type": "application/json",
			},
		});

		alert("The Quiz name has been submitted.");
		setQuizName("");

	}

	return (
		<div>
			<Header />
			<br />
			<label htmlFor="quizName" > Enter the new Quiz name </label>
			<textarea
            	rows="1"
				cols="30"
				className='quiz-name'
				type="text"
				name="quizName"
				placeholder= {formattedDate}
				value={quizName}
				onChange={handleChange} />
			<Link to = "/quizpage" >
				<button className="quiz-submit-button" type="submit" onClick={handleSubmit}>Click here to add questions</button>
			</Link>
		</div>
	);
};


export default QuizName;