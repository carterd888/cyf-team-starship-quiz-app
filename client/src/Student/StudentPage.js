import React from "react";
import Header from "../GeneralPages/Header";
import Button from "../GeneralPages/Button";
import { Link } from "react-router-dom";
import StudentId from "./StudentId";
import StudentStyle from "./StudentStyle";
import Footer from "../GeneralPages/Footer";

const StudentPage = (props) => {
	console.log(props);
	return (
		<div className="container">
			<Header />
			<StudentStyle />
			{/* <StudentId studentId={studentId} /> */}
			{/* <h1>Student id is : {props.location.studentPageProps.id}</h1> */}
			<Link to = "/studentquiz">
				<Button buttontext = 'Click to take a Quiz' />
			</Link>
			<Link to = "/studentresults">
				<Button buttontext = 'Click to see your Quiz results' />
			</Link>
			<Footer />
		</div>
	);
};

export default StudentPage;