import React, {useState, useEffect}  from "react";
import Button from "../GeneralPages/Button";
import { Link } from "react-router-dom";
import MentorStyle from "./MentorStyle";

const QuizAnalytics = (props) => {

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
		<div className="container">
			<MentorStyle />
			<h1>Select the quiz from the list to check the analytics.</h1>
			<div className="quiz-selector">
				<select name="id" className="form-select form-select-lg mb-3" onChange={handleChange}>
					<option>Select a quiz from the list...</option>
					{quizList.map((q) => {
						return (
							<option key={q.id} value={q.id}>
								{q.quiz_name}
							</option>
						);
					})}
				</select>
			</div>
            <div className="mentor-buttons">
				<Link className="mentor-link" to={{
					pathname: "/quizanalyticsresults",
					state: { quizId, mentorEmail },
				}}>
					<Button buttontext="See the quiz analytics results" />
				</Link>
			</div>
		</div>
	);
};

export default QuizAnalytics;