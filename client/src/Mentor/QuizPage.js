import React, { useState } from "react";
import QuizQuestion from "./QuizQuestion";
// import Header from "../GeneralPages/Header";
import MentorStyle from "./MentorStyle";
// import Footer from "../GeneralPages/Footer";


const QuizPage =(props)=> {

	console.log(props.location.state.quizName);

	function handleSubmit (e){
		e.preventDefault();
	    console.log(`question is: ${question} correct answer: ${correctAnswer}, wrong answer: ${wrongAnswer} `);

	}

	return (
		<div>
			<MentorStyle />
			<QuizQuestion newQuiz={props.location.state.quizName} handleSubmit={handleSubmit} />
			{/* <SubmitButton  handleSubmit={handleSubmit} /> */}
		</div>
	);
};


export default QuizPage;