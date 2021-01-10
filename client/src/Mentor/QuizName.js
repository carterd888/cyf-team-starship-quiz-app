import React, { useState } from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import MentorStyle from "./MentorStyle";

const QuizName =(props)=> {
	const mentorEmail = props.location.state.mentorEmail;
	const thisDate = new Date();
	const formattedDate = moment(thisDate).format("MMMM Do YYYY, h:mm:ss");
	const [quizName, setQuizName]= useState(formattedDate);

	function handleChange(e) {
		setQuizName(e.target.value);
	}

	function handleSubmit () {
		if(!quizName) {
			setQuizName(formattedDate);
			fetch("http://localhost:3100/api/quizname", {   // Change to https://cyf-team-starship-quiz-app.herokuapp.com/api/quizname
				method: "POST",
				body: JSON.stringify({
					quiz_name: quizName,
				}),
				headers: {
					"Content-Type": "application/json",
				},
			});
			alert("The Quiz name has been submitted.");
		}

		fetch("http://localhost:3100/api/quizname", {   // Change to https://cyf-team-starship-quiz-app.herokuapp.com/api/quizname
			method: "POST",
			body: JSON.stringify({
				quiz_name: quizName,
			}),
			headers: {
				"Content-Type": "application/json",
			},
		});
		alert("The Quiz name has been submitted.");
	}

	return (
		<div className="container">
			<MentorStyle />
			<div className="quiz-name-form row g-3">
				<label htmlFor="quizName" className="quiz-name-label">
					{" "}
          Enter the new Quiz name:{" "}
				</label>
				<input
					className="quiz-name-input"
					type="text"
					name="quizName"
					placeholder={formattedDate}
					value={quizName}
					onChange={handleChange}
				/>

				<div className="mentor-buttons">
					<Link className="mentor-link" to={{
						pathname: "/quizpage",
						state: { quizName, mentorEmail },
					}}>
						<button
							className="quiz-create-button btn-danger btn-lg"
							type="submit"
							onClick={handleSubmit}
						>Create the quiz
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};


export default QuizName;