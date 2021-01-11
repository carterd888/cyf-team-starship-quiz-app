import { createGlobalStyle } from "styled-components";

const MentorStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
  }

  ${"" /* Mentor Login page */}

  .mentor-login-form-div {
    display:flex;
    flex-direction: column;
    justify-content: center;
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

  .mentor-page-header {
    text-align: center;
    margin-top: 1.5rem;
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
    width: 30%;
  }

  .quiz-create-button {
    width: 100%;
  }

  ${"" /* QuizName and QuizQuestion */}

  .quiz-name-header {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }

  .quiz-name-input {
    margin: auto;
    width: 30%
  }

  .question-input-area, .question-box, .answer-box {
    display: flex;
    flex-direction: column;
    margin-top: 16px;
  }
 
  .question-input-area {
    width: 50%;
    margin: auto;
    align-items: center;
    margin-bottom: 32px;
  }

  .question-box {
    width: 100%;
    align-items: center;
  }

  .question-box > textarea, .answer-box > input {
    width: 100%;
  }

  .answer-box {
    width: 100%;
    align-items: center;
  }

  .true-answer {
    
}

.false-answer {
    
}

${"" /* MentorQuizList and MentorResults*/}

.quiz-selector {
  margin: auto;
  margin-top: 32px;
  width: 30%;
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

${"" /* QuizSummary */}

.quiz-summary-container {
  margin: 32px 2% 2% 2%;
}

.quiz-summary-title {
  font-weight: 900;
  margin-bottom: 2rem;
 }

.question-summary {
  border: 1px solid black;
  background-color: #f3f3f3;
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
  
`;

export default MentorStyle;