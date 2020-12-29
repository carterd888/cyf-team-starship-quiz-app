import React  from "react";
import Header from "../GeneralPages/Header";
import Button from "../GeneralPages/Button";
import { Link } from "react-router-dom";
import MentorStyle from "./MentorStyle";
import Footer from "../GeneralPages/Footer";

const MentorPage = () => {
	return (
		<div>
			<Header />
			<MentorStyle />
			<Link to = "/quizname">
				<Button buttontext = 'Click to create a Quiz' />
			</Link>
			<Link to = "/mentorresults">
				<Button buttontext = 'Click to see the results' />
			</Link>
			<Footer />
		</div>
	);
};

export default MentorPage;