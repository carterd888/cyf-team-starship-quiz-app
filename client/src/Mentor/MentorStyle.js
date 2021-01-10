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

  ${"" /* QuizQuestion */}
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
/* Quiz Summary Page */

.quiz-summary-title {
 margin: auto;
 font-weight: 900;
 text-align: center;
}

`;

export default MentorStyle;