/* eslint-disable linebreak-style */
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./GeneralPages/HomePage";
import "./App.css";
import GlobalStyle from "./GeneralPages/GlobalStyles";
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
import QuizSummary from "./Mentor/QuizSummary";
import QuizEdit from "./Mentor/QuizEdit";
import StudentWelcome  from "./Student/StudentWelcome";
import StudentScoreSubmit from "./Student/StudentScoreSubmit";
import MentorQuizList from "./Mentor/MentorQuizList";
import Footer from "./GeneralPages/Footer";
import Header from "./GeneralPages/Header";
import QuizAnalytics from "./Mentor/QuizAnalytics";
import QuizAnalyticsResults from "./Mentor/QuizAnalyticsResults";

export function App() {

	return (
		<Router>
			<div className="App">
				<Header />
				<GlobalStyle />
				<Route path="/" exact component={HomePage} />
				<Switch>
					<Route path="/mentorlogin" component={MentorLogin} />
					<Route path="/mentorpage" component={MentorPage} />
					<Route path="/quizname" component={QuizName} />
					<Route path="/quizpage" component={QuizPage} />
					<Route path="/quizanalytics" component={QuizAnalytics} />
					<Route path="/quizanalyticsresults" component={QuizAnalyticsResults} />
					<Route path="/quizsummary" component={QuizSummary} />
					<Route path="/quizedit" component={QuizEdit} />
					<Route path="/mentorquizlist" component={MentorQuizList} />
					<Route path="/mentorresults" component={MentorResults} />

					<Route path="/studentlogin" component={StudentLogin} />
					<Route path="/studentwelcome" component={StudentWelcome} />
					<Route path="/studentpage" component={StudentPage} />
					<Route path="/studentquiz" component={StudentQuiz} />
					<Route path="/studentscore" component={StudentScore} />
					<Route path="/studentscoresubmit" component={StudentScoreSubmit} />
					<Route path="/studentresults" component={StudentResults} />
				</Switch>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
