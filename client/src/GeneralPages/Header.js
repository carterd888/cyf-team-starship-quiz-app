import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";

const Header = () => {
	return (
		<div className="Header">
			<img className="Logo" src={Logo} />
			<ul className="header-links">
				<Link to="/mentorlogin">
					<li>Mentor Access</li>
				</Link>
				<Link to="/studentlogin">
					<li>Student Access</li>
				</Link>
			</ul>
		</div>
	);
};

export default Header;