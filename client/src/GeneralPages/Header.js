import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
	return (
		<div className="Header">
			<img className="Logo" src="./client\src\logo.png" />
			<ul className='header-links'>
				<Link to="/mentorpage">
					<li>Mentor Access</li>
				</Link>
				<Link to="/studentpage">
					<li>Student Access</li>
				</Link>
			</ul>
		</div>
	);
};

export default Header;