import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../GeneralPages/Header";
import Button from "../GeneralPages/Button";
import MentorStyle from "./MentorStyle";
import Footer from "../GeneralPages/Footer";

const MentorResults = () => {
	let [results, setResults] = useState([]);

	useEffect(() => {
		fetch("http://localhost:3100/api/mentorresults") // Change to https://cyf-team-starship-quiz-app.herokuapp.com/api/mentorresults
			.then((data) => data.json())
			.then((jsonData) => setResults(jsonData))
			.catch((e) => console.log(e));
	}, []);

	return (
		<div className="container">
			<Header />
			<MentorStyle />
			<h2>Students quiz results:</h2>
			<div>
				<table>
					<tr>
						<th>Test</th>
						<th>Student Name</th>
						<th>Score</th>
					</tr>
					{
						results.map((r) => {
							return (
								<tr key={r.id}>
									<td>{r.quiz_name}</td>
									<td>{r.student_name}</td>
									<td>{r.score}</td>
								</tr>);
						})
					}
				</table>
			</div>
			<Link to = "/mentorpage">
				<Button buttontext ='Go back to Mentor Page' />
			</Link>
			<Footer />
		</div>
	);
};

export default MentorResults;