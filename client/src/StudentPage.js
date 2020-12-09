import React from "react";
import Header from "./Header";
import QuizExample from "../../server/QuizExample.js";
console.log(QuizExample);

let quizAnswers = [0];
QuizExample.map(q => {quizAnswers.push(false)});
console.log(quizAnswers);

const StudentPage = () => {

    function trueAnswer(e) {
        e.preventDefault();
        quizAnswers[e.target.value] = true;
    }

    function falseAnswer(e) {
        e.preventDefault();
        quizAnswers[e.target.value] = false;
    }

    function submitFunction(e) {
        e.preventDefault();
        console.log(quizAnswers);
    }

    return (
        <div>
            <Header />
            <form>
                {QuizExample.map(q => { 
                    return(
                        <div>
                            {console.log(q)}
                            <h2 >{q.quizQuestion}</h2>
                            <button onClick={trueAnswer} value={q.id} >{q.answerA}</button>
                            <button onClick={falseAnswer} value={q.id} >{q.answerB}</button>
                        </div>
                    );
                })}
                <button onClick={submitFunction}>Submit the answers!</button>
            </form>  
        </div>  
    );
}

export default StudentPage;