import React, { useState, useEffect } from "react";
import Button from "../GeneralPages/Button";
import { Link } from "react-router-dom";
import StudentStyle from "./StudentStyle";


const StudentWelcome = (props) => {

	const studentEmail = props.location.state.studentEmail;
	const studentName = props.location.state.studentName;
	const [studentId, setStudentId] = useState(0);

	useEffect(() => {
		fetch(`https://cyf-team-starship-quiz-app.herokuapp.com/api/students/${studentEmail}`)
			.then((data) => data.json())
			.then((jsonData) => setStudentId(jsonData[0].id))
			.catch((e) => console.log(e));
	}, [studentEmail]);


	return (
		<div>
			<StudentStyle />
			<div className="student-welcome-div">
				<h1>You are logged in as: {studentName}</h1>
				<div className="student-buttons">
					<Link className="student-link" to = {{
						pathname:"/studentpage",
						state: { studentId, studentName },
					}}>
						<Button buttontext = 'Continue to Student Page' />
					</Link>
				</div>
			</div>
		</div>
	);
};

export default StudentWelcome;