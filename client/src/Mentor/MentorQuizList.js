import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../GeneralPages/Header";
import Button from "../GeneralPages/Button";
import MentorStyle from "./MentorStyle";
import Footer from "../GeneralPages/Footer";

const MentorQuizList = (props) => {

	const mentorEmail = props.location.state.mentorEmail;
	const [quizList, setQuizList] = useState([]);
	const [quizId, setQuizId] = useState(0);

	useEffect(() => {
		fetch("http://localhost:3100/api/quizlist") // Change to https://cyf-team-starship-quiz-app.herokuapp.com/api/quizlist
			.then((data) => data.json())
			.then((jsonData) => setQuizList(jsonData))
			.catch((e) => console.log(e));
	}, []);

	function handleChange(e) {
		setQuizId(e.target.value);
	}


	return (
		<div>
			<Header />
			<MentorStyle />
			<div>
				<h1>Please select a quiz from the list:</h1>
				<select name="id" onChange={handleChange}>
					{quizList.map((q) => {
						return (
							<option key={q.id} value={q.id}>
								{q.quiz_name}
							</option>
						);
					})}
				</select>

				<div className="mentor-buttons">
					<Link className="mentor-link" to={{
						pathname: "/mentorresults",
						state: { quizId, mentorEmail },
					}}>
						<Button buttontext="Click to see the quiz results" />
					</Link>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default MentorQuizList;