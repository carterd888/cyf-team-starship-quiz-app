import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../GeneralPages/Header";
import Button from "../GeneralPages/Button";
import StudentStyle from "./StudentStyle";
import Footer from "../GeneralPages/Footer";

const StudentResults = (props) => {

	console.log(props.location.state.studentId);
	const studentId = props.location.state.studentId;

	let [results, setResults] = useState([]);

	useEffect(() => {
		fetch(`http://localhost:3100/api/studentresults/student/${studentId}`) // Change to https://cyf-team-starship-quiz-app.herokuapp.com/api/studentresults
			.then((data) => data.json())
			.then((jsonData) => setResults(jsonData))
			.catch((e) => console.log(e));
	}, []);

	return (
		<div className="container">
			<Header />
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
			<Link to = "/studentpage">
				<Button buttontext ='Go back to Student Page' />
			</Link>
			<Footer />
		</div>
	);
};

export default StudentResults;