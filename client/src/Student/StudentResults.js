import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../GeneralPages/Button";
import StudentStyle from "./StudentStyle";

const StudentResults = (props) => {

	console.log(props.location.state.studentId);
	const studentId = props.location.state.studentId;
	const studentName = props.location.state.studentName;

	let [results, setResults] = useState([]);

	useEffect(() => {
		fetch(`http://localhost:3100/api/studentresults/student/${studentId}`) // Change to https://cyf-team-starship-quiz-app.herokuapp.com/api/studentresults/student/${studentId}
			.then((data) => data.json())
			.then((jsonData) => setResults(jsonData))
			.catch((e) => console.log(e));
	}, []);

	return (
		<div className="container">
			<StudentStyle />
			<h2>Your quiz results:</h2>
			<div>
				<table className="table">
					<thead>
						<tr>
							<th scope="col">#</th>
							<th scope="col">Student Name</th>
							<th scope="col">Quiz Name</th>
							<th scope="col">Score</th>
						</tr>
					</thead>
					<tbody>
						{
							results.map((r) => {
								return (
									<tr key={r.id}>
										<th scope="row">{r.id}</th>
										<td>{r.student_name}</td>
										<td>{r.quiz_name}</td>
										<td>{r.score}</td>
									</tr>);
							})
						}
					</tbody>
				</table>
			</div>
			<div className="student-buttons">
				<Link className="student-link" to = {{
					pathname: "/studentpage",
					state: { studentId, studentName },
				}}
				>
					<Button buttontext ='Go back to Student Page' />
				</Link>
			</div>
		</div>
	);
};

export default StudentResults;