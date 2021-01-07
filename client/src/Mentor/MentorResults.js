import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../GeneralPages/Header";
import Button from "../GeneralPages/Button";
import MentorStyle from "./MentorStyle";
import Footer from "../GeneralPages/Footer";

const MentorResults = (props) => {

	const mentorEmail = props.location.state.mentorEmail;
	console.log(props.location.state.quizId);
	console.log(props.location.state.mentorEmail);

	const quizId = props.location.state.quizId
	let [results, setResults] = useState([]);

	useEffect(() => {
		fetch(`http://localhost:3100/api/mentorresults/${quizId}`) // Change to https://cyf-team-starship-quiz-app.herokuapp.com/api/mentorresults
			.then((data) => data.json())
			.then((jsonData) => setResults(jsonData))
			.catch((e) => console.log(e));
	}, []);

	return (
    <div className="container">
      <Header />
      <MentorStyle />
      <h2>Students quiz results:</h2>
      <p>results are in reverse order, lowest score first.</p>
      <div>
        {/* <table>
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
				</table> */}

        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Quiz Name</th>
              <th scope="col">Student Name</th>
              <th scope="col">Student Score</th>
            </tr>
          </thead>
          <tbody>
            {results.map((r) => {
              return (
                <tr key={r.id}>
                  <th scope="row">{r.id}</th>
                  <td>{r.quiz_name}</td>
                  <td>{r.student_name}</td>
                  <td>{r.score}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <Link
        to={{
          pathname: "/mentorpage",
          state: { mentorEmail },
        }}
      >
        <Button buttontext="Go back to Mentor Page" />
      </Link>
      <Footer />
    </div>
  );
};

export default MentorResults;