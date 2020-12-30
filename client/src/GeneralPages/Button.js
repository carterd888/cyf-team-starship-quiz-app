import React from "react";
// import { Link } from "react-router-dom";
// Probably unneeded

const Button = ({ buttontext }) => {
	return (
		<div className="col mx-auto">
			<button className="button2 btn-primary btn-lg">{buttontext}</button>
		</div>

	);
};

export default Button;
