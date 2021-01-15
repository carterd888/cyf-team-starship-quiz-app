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
              <button className="btn-lg btn-danger text-wrap welcome-text">
                Student Login
              </button>
            </Link>
          </div>
          <div className="homepage-mentor-access">
            <Link to="/mentorlogin">
              <button className="btn-lg btn-danger text-wrap welcome-text">
                Mentor Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;