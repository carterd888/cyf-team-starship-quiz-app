import React from "react";
import Header from "../GeneralPages/Header";
import Button from "../GeneralPages/Button";
import { Link } from "react-router-dom";
import StudentStyle from "./StudentStyle";
import Footer from "../GeneralPages/Footer";

const StudentPage = (props) => {
	console.log(props.location.state.studentId);
	const studentId = props.location.state.studentId;
	/* 		console.log(props.location.state.studentName);
		console.log(props.location.state.studentEmail); */
	return (
		<div className="container">
			<Header />
			<StudentStyle />
			{/* <StudentId studentId={studentId} /> */}
			{/* <h1>Student id is : {props.location.studentPageProps.id}</h1> */}
			<Link to = {{
				pathname: "/studentquiz",
				state: { studentId } }}>
				<Button buttontext = 'Click to take a Quiz' />
			</Link>
			<Link to = {{
				pathname: "/studentresults",
				state: { studentId } }}>
				<Button buttontext = 'Click to see your Quiz results' />
			</Link>
			<Footer />
		</div>
	);
};

export default StudentPage;