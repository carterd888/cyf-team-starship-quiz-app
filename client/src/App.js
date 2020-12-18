/* eslint-disable linebreak-style */
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./GeneralPages/HomePage";
import "./App.css";
import QuizPage from "./Mentor/QuizPage";
import MentorPage from "./Mentor/MentorPage";
import StudentPage from "./Student/StudentPage";
import StudentQuiz from "./Student/StudentQuiz";
import StudentResults from "./Student/StudentResults";
import MentorResults from "./Mentor/MentorResults";
import StudentLogin from "./Student/StudentLogin";
import MentorLogin from "./Mentor/MentorLogin";
import QuizName from "./Mentor/QuizName";
import StudentScore from "./Student/StudentScore";

export function App() {

	return (
		<Router>
			<div className="App">
				<Route path="/" exact component={HomePage} />
				<Switch>
					<Route path="/mentorlogin" component={MentorLogin} />
					<Route path="/mentorpage" component={MentorPage} />
					<Route path="/quizname" component={QuizName} />
					<Route path="/quizpage" component={QuizPage} />
					<Route path="/mentorresults" component={MentorResults} />

					<Route path="/studentlogin" component={StudentLogin} />
					<Route path="/studentpage" component={StudentPage} />
					<Route path="/studentquiz" component={StudentQuiz} />
					<Route path="/studentscore" component={StudentScore} />
					<Route path="/studentresults" component={StudentResults} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
