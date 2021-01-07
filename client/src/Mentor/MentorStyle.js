// globalStyles.js
import { createGlobalStyle } from "styled-components";

/*
  body:
    position: relative;
    margin: 0;
    padding: 0;
    min-height: 100%;
*/

const MentorStyle = createGlobalStyle`
  body {
  
    background: brown;
    font-family: 'Roboto', sans-serif;
  }
 ${"" /* Mentor Login page */}
  .mentor-login-form-div{
    display:flex;
    flex-direction: column;
    justify-content: center;
  }
  .mentor-login-form{
    display:flex;
    margin-bottom:50px;
    flex-direction: column;
    justify-content: center;
    
  }
  .mentor-login-input-label{
    color: white;
    margin-top: 50px;
  }
  .mentor-login-label{
    text-align: center;
  }
 .button2{
  background-color:#8E0D19;
  align-self:center;
  margin-left:25%;
  margin-right:25%;
  width:50%;
  border-radius:5px;
 }
 .submit-button{
  width:100%;
  margin-left:0;
 }

${"" /* MentorPage */}

 .mentor-page-buttons{
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  align-content:space-around;
  margin-top:50px;

}
.mentor-page-button{
  margin-top:50px;
}

.quiz-name-form{
  display:flex;
  margin-bottom:50px;
  flex-direction: column;
  justify-content: center;
}
.quiz-name-label{
  color: white;
  margin-top: 10px;
  margin-bottom:10px;
  width: 50%;
  margin-left:25%;
  margin-right:25%;
  text-align: center;
}
.quiz-name-input{
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


`;

export default MentorStyle;
