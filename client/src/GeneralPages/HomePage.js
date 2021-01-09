import React from "react";

const HomePage = () => {
	return (
		<div className="container">
			<div>
				<h1 className="welcome-text-h1 text-center">Welcome to CYF Quiz App</h1>
				<div className="welcome-image">
					<h2 className="text-wrap welcome-text">
						To generate a Quiz and to see the quiz results please click Mentor
						Access.
					</h2>
					<h2 className="text-wrap welcome-text">
						To take a Quiz please click Student Access.
					</h2>
				</div>
			</div>
		</div>
	);
};

export default HomePage;