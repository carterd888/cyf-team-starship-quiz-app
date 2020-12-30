import React from "react";
import Header from "./Header";
import Footer from "./Footer";


const HomePage = () => {
	return (
		<div>
			<Header />
			<h1 className="welcome-text-h1 text-center">Welcome to CYF Quiz App</h1>
			<hr />
			<div className="img-text-container">
				<div className="welcome-image"></div>
				<div className="position-absolute top-50 start-50 translate-middle">
			{/* 	<div className="welcome-text-h2"> */}
					<h2 className="text-wrap welcome-text">
              To generate a Quiz and to see the quiz results please click Mentor
              Access.
					</h2>
					<h2 className="text-wrap welcome-text">
              To take a Quiz please click Student Access.
					</h2>
			{/* 	</div> */}
					</div>
			</div>
			<Footer />
		</div>
	);
};

export default HomePage;