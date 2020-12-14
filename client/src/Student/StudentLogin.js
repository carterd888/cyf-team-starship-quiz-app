import React, { useState } from "react";
import Header from "../GeneralPages/Header";
import Button from "../GeneralPages/Button";
import { Link } from "react-router-dom";


const StudentLogin = () => {

	const [studentName, setStudentName] = useState("");
	const [studentEmail, setStudentEmail] = useState("");

	function handleChange(e) {
		if (e.target.name === "studentName") {
			setStudentName(e.target.value);
			console.log(studentName);
		} else if (e.target.name === "studentEmail") {
			setStudentEmail(e.target.value);
			console.log(studentEmail);
		}
	}

	function handleSubmit () {
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
		alert("The details have been submitted.");
	}

	return (
		<div>
			<Header />
			<div>
				<form>
					<br />
					<div>
                	    <label>
                            Enter Your Name:
							<br />
							<input type="text" className="student-login-name" name="studentName"  value={studentName} onChange={handleChange} required />
					    </label>
					</div>
					<br />
					<div>
                    	<label>
                            Enter Your Email:
							<br />
							<input type="email" className="student-login-email" name="studentEmail"  value={studentEmail} onChange={handleChange} required />
						</label>
					</div>
					<br />
					<div>
						{studentName && studentEmail
                    && (
                    	<Link to = "/studentpage">
						   <input type="submit" value="Submit" onClick={handleSubmit} />
                    	</Link>
                    )}
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