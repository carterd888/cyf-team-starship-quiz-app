import React  from "react";
import Header from "../GeneralPages/Header";
import Button from "../GeneralPages/Button";
import { Link } from "react-router-dom";
import MentorStyle from "./MentorStyle";
import Footer from "../GeneralPages/Footer";

const MentorPage = () => {
	return (
		<div className="container">
			<Header />
			<MentorStyle />
			<div className="mentor-page-buttons">
				<div className="mentor-page-button">
					<Link to = "/quizname">
						<Button buttontext = 'Click to create a Quiz' />
					</Link>
				</div>
				<div className="mentor-page-button">
					<Link to = "/mentorresults">
						<Button buttontext = 'Click to see the results' />
					</Link>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default MentorPage;