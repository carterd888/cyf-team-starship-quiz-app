import { createGlobalStyle } from "styled-components";

const MentorStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
    font-size: 1.25rem;
  }

  ${"" /* Mentor Login page */}

  .mentor-login-form-div {
    display:flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
    margin-top: 2rem;
    width: 50%;
  }

  .mentor-login-form {
    display:flex;
    margin-bottom:50px;
    flex-direction: column;
    justify-content: center;
  }

  .mentor-login-input {
    color: black;
    margin-top: 50px;
    text-align: center;
  }

   .submit-button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 2rem;
  } 

  ${"" /* MentorPage */}

    .mentor-page-div {
    display:flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
    margin-top: 2rem;
    width: 50%;
  }

  .mentor-header {
    text-align: center;
    margin-top: 2rem;
  }

  .mentor-page-buttons {
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    align-content:space-around;
    margin-top:50px;
  }

  .mentor-page-button {
    margin-top:50px;
  }

  .quiz-name-form {
    display:flex;
    margin-bottom:50px;
    flex-direction: column;
    justify-content: center;
  }

  .quiz-name-label {
    color: white;
    margin-top: 10px;
    margin-bottom:10px;
    width: 50%;
    margin-left:25%;
    margin-right:25%;
    text-align: center;
  }

  .quiz-name-input {
    margin-bottom: 10px;
    width: 50%;
    margin-left:25%;
    margin-right:25%;
    border-radius:5px;
  }

  .table {
    margin-top: 40px;
    margin-left: 20px;
    margin-right: 10px;
    margin-bottom: 20px;
  }


  ${"" /* buttons */}
  .mentor-buttons {
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }

  .mentor-link, .question-submit-button {
    margin: auto;
    margin-top: 16px;
    margin-botton: 16px;
    width: 90%;
    max-width: 450px;
  }

  .quiz-create-button, .quiz-add-button {
    width: 100%;
  }

  .button-padding{
    margin-bottom:2rem;
  }

  ${"" /* QuizName and QuizQuestion */}

  .quiz-name-input {
    margin: auto;
    margin-top: 2rem;
    width: 90%;
    max-width: 450px;
  }

  .question-input-area, .question-box, .answer-box {
    display: flex;
    flex-direction: column;
    margin-top: 16px;
    text-align: center;
    font-size: 1.5rem;
  }
 
  .question-input-area label {
    font-size: 1.25rem;
  }

  .question-input-area {
    width: 90%;
    max-width: 1000px;
    margin: auto;
    align-items: center;
    margin-top:2rem;
    margin-bottom: 2rem;
    padding: 2rem;
    background-color: #b0b0b0;
    border-radius: 4px;
  }

  .question-box {
    width: 100%;
    align-items: center;
    margin: auto;
  }

  .question-box > textarea, .answer-box > input {
    width: 100%;
    border-color: #777;
  }

  .answer-box {
    width: 100%;
    align-items: center;
  }

  ${"" /* Quiz Edit*/}

  .quiz-edit-page-header {
      text-align: center;
      margin-top: 1.5rem;
    }

  ${"" /* MentorQuizList and MentorResults*/}

  .quiz-selector {
    margin: auto;
    margin-top: 32px;
    width: 90%;
    max-width: 450px;
  }

  .mentor-results {
    margin: 2rem 5% 5% 5%;
  }

  .mentor-results table {
    margin: 0;
    margin-top: 1.5rem;
  }

  .mentor-results-search {
    display: flex;
    flex-wrap: wrap;
  }

  .mentor-results-search label {
    margin-right: 1.5rem;
    padding-top: 0.25rem;
  }

  .mentor-results-search input {
    max-width: 256px;
  }

  ${"" /* QuizSummary */}

  .quiz-summary-container {
    margin-top: 2rem;
  }

  .question-summary {
    width: 90%;
    max-width: 1000px;
    margin: auto;
    border: 1px solid #777;
    background-color:#b2b0b0;
    border-radius: 4px;
    padding: 2rem;
    margin-bottom: 2rem;
  }

  .question-content-summary {
    font-weight: 400;
    margin-bottom: 1.5rem;
  }

  .answer-summary {
    list-style: none;
    font-size: 1rem;
  }

  .correct-answer-summary {
    font-weight: bold;
  }

  .summary-question-buttons {
    display: flex;
    flex-wrap: wrap;
    margin-top: 1.5rem;
  }

  .summary-edit-link, .summary-delete-button {
    width: 6rem;
    margin-left: 2rem;
  }

  .summary-edit-button {
    width: 100%;
  }
  
 ${"" /*QuizAnalyticsResults */}


  .analytics-cover {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 2rem auto 2rem auto;
    width: 90%;
    max-width: 1000px;
    border: 1px solid #777;
    border-radius: 4px;
    background-color:#b2b0b0;

  }
  .analytics-cover h2 {
    text-align: left;
    margin: 2rem;
    font-size: 1.5rem;  
  }

  .progress-bar-success-rate{
    border:2px solid black;
  }
`;

export default MentorStyle;