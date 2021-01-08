import React from "react";
import QuizQuestion from "./QuizQuestion";
import MentorStyle from "./MentorStyle";

const QuizPage =(props)=> {

	const mentorEmail = props.location.state.mentorEmail;


	return (
		<div>
			<MentorStyle />
			<QuizQuestion
				mentorEmail={mentorEmail}
				newQuiz={props.location.state.quizName}
			/>
		</div>
	);
};

export default QuizPage;