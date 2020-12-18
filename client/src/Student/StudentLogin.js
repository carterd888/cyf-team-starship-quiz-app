import React, { useState, useEffect } from "react";
import Header from "../GeneralPages/Header";
import Button from "../GeneralPages/Button";
import { Link } from "react-router-dom";


const StudentLogin = () => {

	const [studentName, setStudentName] = useState("");
	const [studentEmail, setStudentEmail] = useState("");
	const [studentId, setStudentId] = useState([]);

	function handleChange(e) {
		if (e.target.name === "studentName") {
			setStudentName(e.target.value);
			console.log(studentName);
		} else if (e.target.name === "studentEmail") {
			setStudentEmail(e.target.value);
			console.log(studentEmail);
		}
	}

	async function postStudentRequest (){
		await fetch("http://localhost:3100/api/students", {
    	method: "POST",
    	body: JSON.stringify({
      	student_name: studentName,
      	student_email: studentEmail,
			}),
    	headers: {
      	"Content-Type": "application/json",
    	},
  	});
	}

	async function getStudentRequest (){
		await 	fetch(`http://localhost:3100/api/students/${studentEmail}`)
    	.then((data) => data.json())
    	.then((jsonData) => setStudentId(jsonData))
    	.catch((e) => console.log(e));

	}

	async function handleSubmit () {
		console.log(`Student name is: ${studentName} and student email is: ${studentEmail} `);
		await postStudentRequest();
		await getStudentRequest();
		console.log(studentId);
		alert("The details have been submitted.");
	}


/* 	const [state, setState] = useState({});

	useEffect(() => {
    	myFunction();
		return () => {
			setState({}); // This worked for me
		};
	}, []);

	const myFunction = () => {
		setState({
			name: "Jhon",
			surname: "Doe",
		});
	}; */


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
                    	<Link to = {{
                    		pathname:"/studentpage",
                    		studentPageProps: { id: studentId },
                    	}}>
						   <input type="submit" value="Submit" onClick={handleSubmit} />
                    	</Link>
                    )}
					</div>
				</form>
				<Link to = {{
                    		pathname:"/studentpage",
                    		studentPageProps: { id: studentId },
                    	}}>
					<Button buttontext = 'Log on to Student Page' />
				</Link>
			</div>

		</div>
	);
};

export default StudentLogin;