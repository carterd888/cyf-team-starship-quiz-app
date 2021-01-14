import React from "react";
import { Link } from "react-router-dom";


const HomePage = () => {

	return (
		<div className="container">
			<div className="homepage">
				<h1 className="welcome-text-h1 text-center">Welcome to CYF Quiz App</h1>
				<div className="homepage-access">
					<div className="homepage-student-access">
						<Link to="/studentlogin">
							<h2 className="text-wrap welcome-text">
							To log in as a student click here.
							</h2>
						</Link>
					</div>
					<div className="homepage-mentor-access">
						<Link to="/mentorlogin">
							<h2 className="text-wrap welcome-text">
							To log in as a mentor click here.
							</h2>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomePage;