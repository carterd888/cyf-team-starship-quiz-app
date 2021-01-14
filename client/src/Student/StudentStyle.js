import { createGlobalStyle } from "styled-components";

const StudentStyle = createGlobalStyle`
	body {
		position: relative;
		margin: 0;
		padding: 0;
		min-height: 100%;
		font-family: 'Roboto', sans-serif;
		font-size: 1.25rem;
	}

	.student-login-form-div {
		display:flex;
		flex-direction: column;
		justify-content: center;
	}

	.student-login-input, .student-welcome-div, .student-page-div {
		text-align: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.student-login-input {
		margin-bottom: 5%;
		margin-top: 5%;
	}

	.submit-button {
		display: flex;
		justify-content: center;
		align-items: center;
	} 

	.student-buttons {
		display: flex;
		flex-direction: column;
		align-items: stretch;
	}

	.button-padding{
		margin-bottom:2rem;
	}

	.student-link {
		margin: auto;
		margin-top: 16px;
		margin-botton: 16px;
		width: 90%;
		max-width: 450px;
	}

	.student-header {
		margin-top: 2rem;
		text-align: center;
	}

	${"" /* StudentQuiz */}

	.quiz-selector {
		margin: auto;
		margin-top: 32px;
		width: 90%;
		max-width: 450px;
	}

	.student-quiz-form {
		display: flex;
		flex-direction: column;
		width: 90%;
		max-width: 1000px;
		margin: 2rem auto 2rem auto;
		padding: 2rem;
		background-color:#b2b0b0;
		border: 1px solid #777;
		border-radius: 4px;
	}

	.student-quiz-form > div {
		display: flex;
		flex-direction: column;
		align-content: flex-start;
		padding: 1.5rem 0 1.5rem 0;
	}

	.student-quiz-form h2 {
		font-size: 1.5rem;
	}

	.quiz-answers {
		display: flex;
		flex-direction: column;
	}

	.quiz-answers > div  {
		margin-left: 1.5rem;
	}

	.quiz-answers > div > input {
		margin-right: 8px;
	}

	.quiz-answers > div > label {
		font-size: 1.25rem;
	}

	${"" /* StudentQuiz */}

	.student-results{
		margin: 2rem 5% 5% 5%;
	}

	.student-results > h2 {
		margin-bottom: 1.5rem;
	}
`;

export default StudentStyle;