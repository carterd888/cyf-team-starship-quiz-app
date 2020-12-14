import React, { useState } from "react";
import Header from "../GeneralPages/Header";
import Button from "../GeneralPages/Button";
import { Link } from "react-router-dom";


const MentorLogin = () => {

	const [mentorEmail, setMentorEmail] = useState("");


	function handleChange(e) {
		setMentorEmail(e.target.value);
		console.log(mentorEmail);
	}


	function handleSubmit (e) {
		// e.preventDefault(); // has to be deleted later
		console.log(`Mentor email is: ${mentorEmail} `);

		fetch("http://localhost:3100/api/mentors", {
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
		<div>
			<Header />
			<div>
				<form>
					<div>
						<label>
                            Enter Your Email:
							<br />
							<input type="email" className="mentor-login-email" name="mentorEmail"  value={mentorEmail} onChange={handleChange} required />
						</label>
					</div>
					<br />
					<div>
						{mentorEmail && (
							<Link to = "/mentorpage">
						   <input type="submit" value="Submit" onClick={handleSubmit} />
							</Link>
						)}
					</div>
				</form>
				<Link to = "/mentorpage">
					<Button buttontext = 'Log on to Mentor Page' />
				</Link>
			</div>

		</div>
	);
};

export default MentorLogin;