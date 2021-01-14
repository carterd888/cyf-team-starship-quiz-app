import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";


const Header = () => {

	return (
		<div className="Header">
			<Link to="/">
				<img className="Logo" alt="logo" src={Logo} />
			</Link>
		</div>
	);
};

export default Header;