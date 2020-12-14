import React from "react";
import Header from "../GeneralPages/Header";
import Button from "../GeneralPages/Button";
import { Link } from "react-router-dom";
import StudentId from "./StudentId";

const StudentPage = () => {
	return (
		<div>
			<Header />
			<StudentId />
			<Link to = "/studentquiz">
				<Button buttontext = 'Click to take a Quiz' />
			</Link>
			<Link to = "/studentresults">
				<Button buttontext = 'Click to see your Quiz results' />
			</Link>
		</div>
	);
};

export default StudentPage;