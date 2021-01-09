import React from "react";
import Button from "../GeneralPages/Button";
import { Link } from "react-router-dom";
import StudentStyle from "./StudentStyle";

const StudentPage = (props) => {

	const studentId = props.location.state.studentId;
	const studentName = props.location.state.studentName;

	return (
		<div className="container">
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
		</div>
	);
};

export default StudentPage;