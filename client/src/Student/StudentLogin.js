import React, { useState } from "react";
import Header from "../GeneralPages/Header";
import { Link } from "react-router-dom";
import Footer from "../GeneralPages/Footer";
import StudentStyle from "./StudentStyle";


const StudentLogin = () => {

	const [studentName, setStudentName] = useState("");
	const [studentEmail, setStudentEmail] = useState("");

	function handleChange(e) {
		if (e.target.name === "studentName") {
			setStudentName(e.target.value);
		}
		if (e.target.name === "studentEmail") {
			setStudentEmail(e.target.value);
		}
	}

	function handleSubmit () {
		fetch("http://localhost:3100/api/students", {	// Change to https://cyf-team-starship-quiz-app.herokuapp.com/api/students
			method: "POST",
			body: JSON.stringify({
				student_name: studentName,
				student_email: studentEmail,
			}),
			headers: {
				"Content-Type": "application/json",
			},
		});
		alert("The details have been submitted.");
	}


	return (
		<div className="container">
			<Header />
			<StudentStyle />
			<div className="student-login-form-div">
				<form className="student-login-form mx-auto input-group-lg">
					<br />
					<div className="student-login-input">
                	    <label>Enter Your Name:</label>
						<input type="text" className="student-login-name" name="studentName"  value={studentName} onChange={handleChange} required />
					</div>
					<br />
					<div className="student-login-input">
                    	<label>Enter Your Email:</label>
						<input type="email" className="student-login-email" name="studentEmail"  value={studentEmail} onChange={handleChange} required />
					</div>
					<br />
					<div className="submit-button">
						{studentName && studentEmail && (
							<Link to = {{
								pathname:"/studentwelcome",
								state: { studentEmail, studentName },
							}}>
								<input type="submit" value="Login" onClick={handleSubmit} />
							</Link>
						)}
					</div>
				</form>
			</div>
			<Footer />
		</div>
	);
};

export default StudentLogin;