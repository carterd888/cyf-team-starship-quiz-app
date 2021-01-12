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
	let [totalStudentScores, setTotalStudentScores] = useState(0);


	useEffect(() => {
		fetch(`http://localhost:3100/api/filterresults/${quizId}`) // Change to https://cyf-team-starship-quiz-app.herokuapp.com/api/mentorresults/${quizId}
			.then((data) => data.json())
			.then((jsonData) => setResults(jsonData))
			.catch((e) => console.log(e));
	}, [quizId]);

	const totalScore=[0];
	let resultTotalScore;
	let len= [];
	let averageScore;
	let quizName;
	console.log(quizName);
	function handleTotalScore (){
		quizName= results[0];
		results.forEach((r)=>{
			return len.push(r.quiz_length);
		});

		results.map((r)=>{
			totalScore.push((r.score));
		});
		const reducer = (accumulator, currentValue) => accumulator + currentValue;
		resultTotalScore = totalScore.reduce(reducer);
		console.log(resultTotalScore);

		averageScore = resultTotalScore/results.length;

	}
	handleTotalScore ();

	console.log(averageScore);
	console.log(results.length);
	let totalQuestionsTaken = len.reduce((a, b) => a + b, 0);
	console.log(len.reduce((a, b) => a + b, 0));
	let successRateQuiz = ((resultTotalScore/totalQuestionsTaken) * 100).toFixed(2);
	console.log(successRateQuiz);
	console.log(len[0]);

	console.log(totalScore);

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
	let medianScore = median(totalScore);
	console.log(medianScore);


	return(
		<div className="container analytics-container">
			<MentorStyle />
			<div className="analytics-cover">
				<h2 className="success-rate">The success rate for this Quiz is: <span><Progress
					type="circle"
					strokeColor={{
						"0%": "#108ee9",
						"100%": "#87d068",
					}}
					percent={successRateQuiz}
				/></span> </h2>

				<h2 className="median-score">The median score of right answers is  {medianScore}</h2>
			</div>

			<div className="mentor-buttons">
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