import React, { useState } from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import MentorStyle from "./MentorStyle";
import Button from "../GeneralPages/Button";


const QuizName = (props) => {
	const mentorEmail = props.location.state.mentorEmail;
	const thisDate = new Date();
	const formattedDate = moment(thisDate).format("MMMM Do YYYY, h:mm:ss");
	const [quizName, setQuizName] = useState("");

	function handleChange(e) {
		setQuizName(e.target.value);
	}

	function setName(){
		if(quizName === "") {
			setQuizName(formattedDate);
		}
	}

	setName();

	function handleSubmit () {
		fetch("https://cyf-team-starship-quiz-app.herokuapp.com/api/quizname", {
			method: "POST",
			body: JSON.stringify({
				quiz_name: quizName,
			}),
			headers: {
				"Content-Type": "application/json",
			},
		});
	}


	return (
		<div className="container">
			<MentorStyle />
			<h1 className="mentor-header">Create a new quiz</h1>
			<div className="quiz-name-input input-group mb-3">
				<div className="input-group-prepend">
					<span className="input-group-text" id="inputGroup-sizing-default">Quiz name:</span>
				</div>
				<input
					type="text"
					className="form-control"
					aria-label="Default"
					aria-describedby="inputGroup-sizing-default"
					name="quizName"
					placeholder={formattedDate}
					value={quizName}
					onChange={handleChange}
					required
				/>
			</div>
			<div className="mentor-buttons button-padding">
				<Link className="mentor-link" to={{
					pathname: "/quizpage",
					state: { quizName, mentorEmail },
				}}>
					<button
						className="quiz-create-button btn-dark btn-lg"
						type="submit"
						onClick={handleSubmit}
					>Create the quiz
					</button>
				</Link>
				<Link className="mentor-link" to={{
					pathname: "/mentorpage",
					state: { mentorEmail },
				}}>
					<Button buttontext="Go back to Mentor Page" />
				</Link>
			</div>
		</div>
	);
};

export default QuizName;