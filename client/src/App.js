/* eslint-disable linebreak-style */
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import QuizButton from "./QuizButton";
import "./App.css";
import QuizPage from "./QuizPage";
import MentorPage from "./MentorPage";
import StudentPage from "./StudentPage";

export function App() {

	return (
		<Router>
			<div className='App'>
				<Route path= "/" exact component={Header} />
				<Switch>
					<Route path = "/quizbutton" component = {QuizButton} />
					<Route path = "/quizpage" component = {QuizPage} />
					<Route path = "/mentorpage" component = {MentorPage} />
					<Route path = "/studentpage" component = {StudentPage} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
