import React from "react";
// import { Link } from "react-router-dom";
// Probably unneeded

const Button = ({ buttontext }) => {
	return (
		<button className="button-component btn-primary btn-lg">{buttontext}</button>
	);
};

export default Button;
