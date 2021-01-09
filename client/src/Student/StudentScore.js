/* Probably not used for anything - for deletion */

import React from "react";
import StudentStyle from "./StudentStyle";
import Button from "../GeneralPages/Button";
import { Link } from "react-router-dom";

const StudentScore = (props) => {

	const studentId = props.location.state.studentId;
	const studentName = props.location.state.studentName;
	const studentScore = props.location.state.studentScore;


	return (
		<div className="container">
			<StudentStyle />
			<h1>{studentScore}</h1>
			<div className="student-buttons">
				<Link className="student-link" to={{
					pathname: "/studentpage",
					state:{ studentId, studentName, studentScore },
				}}>
					<Button buttontext="Go back to Student Page" />
				</Link>
			</div>
		</div>
	);
};

export default StudentScore;