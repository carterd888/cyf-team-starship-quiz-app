import React from "react";
import QuizQuestion from "./QuizQuestion";
import MentorStyle from "./MentorStyle";


const QuizPage =(props)=> {

	const mentorEmail = props.location.state.mentorEmail;
	const quizName = props.location.state.quizName;


	return (
		<div>
			<MentorStyle />
			<QuizQuestion
				mentorEmail={mentorEmail}
				quizName={quizName}
			/>
		</div>
	);
};

export default QuizPage;