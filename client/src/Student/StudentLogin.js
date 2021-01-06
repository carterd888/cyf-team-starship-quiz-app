import React, { useState, useEffect } from "react";
import Header from "../GeneralPages/Header";
import Button from "../GeneralPages/Button";
import { Link } from "react-router-dom";
import Footer from "../GeneralPages/Footer";

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
		<div className="container">
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