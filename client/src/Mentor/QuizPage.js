import React, { useState } from "react";
import QuizQuestion from "./QuizQuestion";
import Header from "../GeneralPages/Header";


const QuizPage =()=> {

	function handleSubmit (e){
		e.preventDefault();
	       console.log(`question is: ${question} correct answer: ${correctAnswer}, wrong answer: ${wrongAnswer} `);

	}

	return (
		<div>
			<Header />
			<QuizQuestion handleSubmit={handleSubmit} />
			{/* <SubmitButton  handleSubmit={handleSubmit} /> */}
		</div>
	);
};


export default QuizPage;