import React  from "react";
import Header from "../GeneralPages/Header";
import Button from "../GeneralPages/Button";
import { Link } from "react-router-dom";
import MentorStyle from "./MentorStyle";
import Footer from "../GeneralPages/Footer";

const MentorPage = (props) => {

	const mentorEmail = props.location.state.mentorEmail;


	return (
		<div className="container">
			<Header />
			<MentorStyle />
			<h1>You are logged in as {mentorEmail}</h1>
			<div className="mentor-page-buttons">
				<div className="mentor-buttons">
					<Link className="mentor-link" to={{
						pathname: "/quizname",
						state: { mentorEmail },
					}}>
						<Button buttontext="Click to create a Quiz" />
					</Link>
				</div>
				<div className="mentor-buttons">
					<Link className="mentor-link" to={{
						pathname: "/mentorquizlist",
						state: { mentorEmail },
					}}>
						<Button buttontext="Click to select a quiz and view results" />
					</Link>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default MentorPage;