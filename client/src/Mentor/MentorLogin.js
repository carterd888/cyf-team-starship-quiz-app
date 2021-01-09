import React, { useState } from "react";
import { Link } from "react-router-dom";
import MentorStyle from "./MentorStyle";


const MentorLogin = () => {

	const [mentorEmail, setMentorEmail] = useState("");

	function handleChange(e) {
		setMentorEmail(e.target.value);
		console.log(mentorEmail);
	}

	function handleSubmit (e) {
		fetch("http://localhost:3100/api/mentors", {	// Change to https://cyf-team-starship-quiz-app.herokuapp.com/api/mentors
			method: "POST",
			body: JSON.stringify({
				mentor_email: mentorEmail,
			}),
			headers: {
				"Content-Type": "application/json",
			},
		});
		alert("The details have been submitted.");
	}


	return (
		<div className="container">
			<MentorStyle />
			<div className="mentor-login-form-div">
				<form className="mentor-login-form mx-auto input-group-lg">
					<div className="mentor-login-input">
						<label htmlFor="mentorEmail">Enter Your Email:</label>
						<input type="email" className="mentor-login-email form-control " name="mentorEmail"  value={mentorEmail} onChange={handleChange} required />
					</div>
					<div>
						{mentorEmail && (
							<Link to = {{
								pathname: "/mentorpage",
								state: { mentorEmail },
							}}>
						   		<input className="submit-button button2 btn-primary" type="submit" value="Login" onClick={handleSubmit} />
							</Link>
						)}
					</div>
				</form>
			</div>
		</div>
	);
};

export default MentorLogin;