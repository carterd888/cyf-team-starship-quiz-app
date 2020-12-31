import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";

const Header = () => {
	return (
    <div className="Header">
      <Link to="/">
        <img className="Logo" src={Logo} />
      </Link>
      <ul className="header-links">
        <Link to="/mentorlogin">
          <li className="header-link-item">Mentor Access</li>
        </Link>
        <Link to="/studentlogin">
          <li className="header-link-item">Student Access</li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;