import React, { useState, useEffect } from "react";
import Header from "../GeneralPages/Header";
import Button from "../GeneralPages/Button";
import { Link } from "react-router-dom";
import Footer from "../GeneralPages/Footer";
import StudentStyle from "./StudentStyle";

const StudentScoreSubmit = (props) => {
	console.log(props.location.state.studentId);
	const studentId = props.location.state.studentId;
	const studentName = props.location.state.studentName;

	const [studentResult, setStudentResult] = useState([]);
	//    const [studentResult2, setStudentResult2] = useState("");
	console.log(JSON.stringify(studentResult));
	useEffect(() => {
		fetch(`http://localhost:3100/api/studentresults/${studentId}`) // Change to https://cyf-team-starship-quiz-app.herokuapp.com/api/quiz
			.then((data) => data.json())
			.then((jsonData) => setStudentResult([jsonData[0].score, jsonData[0].quiz_length]))
		// .then((jsonData) => setStudentResult2(jsonData[0].quiz_length))
			.catch((e) => console.log(e));
	}, []);


	console.log(studentResult[0], studentResult[1]);
	//  const myTotal = studentResult[0].quiz_length;
	return (
		<div>
			<Header />
			<StudentStyle />
			<h1>
          Your score is: {studentResult[0]} / {studentResult[1]}
			</h1>
			<Link
				to = {{
					pathname: "/studentpage",
					state: { studentId, studentName },
				}} >
				<Button buttontext="Go back to Student Page" />
			</Link>
			<Footer />
		</div>
	);

};

export default StudentScoreSubmit;