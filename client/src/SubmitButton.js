import React from "react";
// import { Link } from "react-router-dom";

const SubmitButton = ({handleSubmit}) => {
	return (
			<button className="submit-button" onClick = {handleSubmit}>click here to submit the quiz</button>
	);
};

export default SubmitButton;
