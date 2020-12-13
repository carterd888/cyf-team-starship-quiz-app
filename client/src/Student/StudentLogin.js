import React, { useState } from "react";
import Header from "../GeneralPages/Header";
import Button from "../GeneralPages/Button";
import { Link, Redirect } from "react-router-dom";
import SubmitButton from "../GeneralPages/SubmitButton";


const StudentLogin = () => {

	const [studentName, setStudentName] = useState("");
	const [studentEmail, setStudentEmail] = useState("");
	const [submit, setSubmit] = useState([]);

	function handleChange(e) {
		if (e.target.name === "studentName") {
			setStudentName(e.target.value);
			console.log(studentName);
		} else if (e.target.name === "studentEmail") {
			setStudentEmail(e.target.value);
			console.log(studentEmail);
		}
	}

    	function handleSubmit (e) {
		e.preventDefault(); // has to be deleted later
		console.log(`Student name is: ${studentName} and student email is: ${studentEmail} `);

		fetch("http://localhost:3100/api/students", {
			method: "POST",
			body: JSON.stringify({
				student_name: studentName,
				student_email: studentEmail,
			}),
			headers: {
				"Content-Type": "application/json",
			},
		});

		<Redirect to="/studentpage" />;
		/* 	alert("The details have been submitted."); */

	    }


	return (
		<div>
			<Header />
			<div>
				<form>
					<div>
						<br />
                		<label>
                            Enter Your Name:
							<br />
							<input type="text" className="student-login-name" name="studentName"  value={studentName} onChange={handleChange} required />
						</label>
					</div>
					<div>
						<br />
                    	<label>
                            Enter Your Email:
							<br />
							<input type="email" className="student-login-email" name="studentEmail"  value={studentEmail} onChange={handleChange} required />
						</label>
					</div>
					<br />
					<div>
						{/* 	<Link to = "/studentpage"> */}
						   <input type="submit" value="Submit" onClick={handleSubmit} />
						{/* 	</Link> */}
					</div>

				</form>

				<Link to = "/studentpage">
					<Button buttontext = 'Log on to Student Page' />
				</Link>
			</div>

		</div>
	);
};

export default StudentLogin;