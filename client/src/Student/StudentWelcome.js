import React, { useState, useEffect } from "react";
import Header from "../GeneralPages/Header";
import Button from "../GeneralPages/Button";
import { Link } from "react-router-dom";
import Footer from "../GeneralPages/Footer";

const StudentWelcome=(props)=>{
	console.log(props.location.state.studentEmail);
	console.log(props.location.state.studentName);

	const studentEmail = props.location.state.studentEmail;
	const studentName = props.location.state.studentName;
	const [studentId, setStudentId] = useState(0);


	useEffect(() =>{
		fetch(`http://localhost:3100/api/students/${studentEmail}`)
    	.then((data) => data.json())
    	.then((jsonData) => setStudentId(jsonData[0].id))
    	.catch((e) => console.log(e));
	}, []);



	return (
		<div>
			<Header />
			<h1>You are logged in as {studentName}</h1>
			<Link to = {{
				pathname:"/studentpage",
				state: { studentId },
			}}>
				<Button buttontext = 'Click to continue to Student Page' />
			</Link>
			<Footer />
		</div>
	);
};

export default StudentWelcome;