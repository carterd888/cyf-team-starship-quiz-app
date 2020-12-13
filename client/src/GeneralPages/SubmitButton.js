import React from "react";


const SubmitButton = ({buttontext, handleSubmit}) => {
	return (
		<button className="submit-button"   onSubmit={handleSubmit}>{buttontext}</button>
	);
};

export default SubmitButton;