import React from "react";
import Header from "../GeneralPages/Header";
import Button from "../GeneralPages/Button";
import { Link } from "react-router-dom";
import StudentStyle from "./StudentStyle";
import Footer from "../GeneralPages/Footer";

const StudentPage = (props) => {

	const studentId = props.location.state.studentId;
	const studentName = props.location.state.studentName;

	return (
		<div className="container">
			<Header />
			<StudentStyle />
			<div className="student-page-div">
				<h1>Welcome, {studentName}</h1>
				<div className="student-buttons">
					<Link className="student-link" to={{
						pathname: "/studentquiz",
						state: { studentId, studentName } }}>
						<Button buttontext = "Take a Quiz!" />
					</Link>
					<Link className="student-link" to={{
						pathname: "/studentresults",
						state: { studentId, studentName } }}>
						<Button buttontext = "See your quiz results" />
					</Link>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default StudentPage;