import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../GeneralPages/Button";
import MentorStyle from "./MentorStyle";
import { Progress } from "antd";
import "antd/dist/antd.css";


const QuizAnalyticsResults = (props) => {

	const mentorEmail = props.location.state.mentorEmail;
	const quizId = props.location.state.quizId;
	const [results, setResults] = useState([]);
	const totalScore = [0];
	let resultTotalScore;
	let len = [];

	useEffect(() => {
		fetch(`https://cyf-team-starship-quiz-app.herokuapp.com/api/filterresults/${quizId}`)
			.then((data) => data.json())
			.then((jsonData) => setResults(jsonData))
			.catch((e) => console.log(e));
	}, [quizId]);

	function handleTotalScore () {
		results.forEach((r)=>{
			return len.push(r.quiz_length);
		});

		results.map((r)=>{
			totalScore.push((r.score));
		});

		const reducer = (accumulator, currentValue) => accumulator + currentValue;
		resultTotalScore = totalScore.reduce(reducer);
	}

	function median(values){
		if(values.length === 0) {
			return 0;
		}

		values.sort(function(a,b){
			return a-b;
		});

		let half = Math.floor(values.length / 2);

		if (values.length % 2) {
			return values[half];
		}

		return (values[half - 1] + values[half]) / 2.0;
	}

	handleTotalScore ();
	let totalQuestionsTaken = len.reduce((a, b) => a + b, 0);
	let successRateQuiz = ((resultTotalScore/totalQuestionsTaken) * 100).toFixed(2);
	let medianScore = median(totalScore);

	return(
		<div className="container">
			<MentorStyle />
			<div className="analytics-cover">
				<h2>Quiz success rate:{" "}
					<span><Progress
						type="circle"
						strokeColor={{
							"0%": "#108ee9",
							"100%": "#87d068",
						}}
						percent={successRateQuiz}
					/></span>
				</h2>
				<h2>Median Score: {medianScore}</h2>
				<h2>This quiz has {len[0]} questions</h2>
			</div>

			<div className="mentor-buttons button-padding">
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

export default QuizAnalyticsResults;