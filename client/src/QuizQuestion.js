import React from "react";


const QuizQuestion = () => {

  
    return (
      <form>
        <label>
          Enter the question below:
          <br />
          <textarea
            id="questioninput"
            name="questioninput"
            rows="8"
            cols="40"
          ></textarea>
        </label>
        <br />
        <div>
        <br />
          <label>
            Answer 1 {" "} <input type="text" name="answer" />
          </label>
        </div>
        <br />
        <div>
          <label>
            Answer 2 {" "} <input type="text" name="answer" />
          </label>
        </div>
      </form>
    );
}
export default QuizQuestion;    