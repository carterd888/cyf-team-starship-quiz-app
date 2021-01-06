import React from "react";
import Header from "../GeneralPages/Header";
import StudentStyle from "./StudentStyle";
import Footer from "../GeneralPages/Footer";
import Button from "../GeneralPages/Button";
import { Link } from "react-router-dom";

const StudentScore = (props) => {
	console.log(props.location.state.studentScore);
	const studentScore = props.location.state.studentScore;
	return (
		<div className="container">
			<Header />
			<StudentStyle />
			<h1>{studentScore}</h1>
			<Link to="/studentpage">
				<Button buttontext="Go back to Student Page" />
			</Link>
			<Footer />
		</div>
	);
};

export default StudentScore;