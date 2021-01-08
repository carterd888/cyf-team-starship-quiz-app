import { createGlobalStyle } from "styled-components";

const StudentStyle = createGlobalStyle`
  body {
    position: relative;
    margin: 0;
    padding: 0;
    min-height: 100%;
    background: green;
    font-family: 'Roboto', sans-serif;
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
    color: white;
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

  .student-link {
    margin: auto;
    margin-top: 16px;
    margin-botton: 16px;
    width: 30%;
  }
`;

export default StudentStyle;