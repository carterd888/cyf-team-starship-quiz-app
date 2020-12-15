import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom';
import Header from "../GeneralPages/Header";
import QuizExample from "../../../server/QuizExample.js";
import Button from '../GeneralPages/Button';

let quizAnswers = [0];
QuizExample.map(q => {quizAnswers.push(false)});

let quizQuestions = [];

async function handleChange(e) {
    console.log(e.target.value);
    await fetch(`http://localhost:3100/api/questions/${e.target.value}`) // Change to https://cyf-team-starship-quiz-app.herokuapp.com/api/questions/${e.target.value}
        .then((data) => data.json())
        .then((jsonData) => quizQuestions = jsonData)
        .catch((e) => console.log(e));

    console.log(quizQuestions);
    }

const StudentQuiz = () => {

    const [quizList, setQuizList] = useState([]);
	useEffect(() => {
		fetch("http://localhost:3100/api/quiz") // Change to https://cyf-team-starship-quiz-app.herokuapp.com/api/quiz
			.then((data) => data.json())
			.then((jsonData) => setQuizList(jsonData))
			.catch((e) => console.log(e));
	}, []);

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

    // const [quizQuestions, setQuizQuestions] = useState([])
    // function handleChange(e) {
    //     console.log(e.target.value);
    //     useEffect(() => {
    //         fetch(`http://localhost:3100/api/questions/${e.target.value}`) // Change to https://cyf-team-starship-quiz-app.herokuapp.com/api/studentresults
    //             .then((data) => data.json())
    //             .then((jsonData) => setQuizQuestions(jsonData))
    //             .catch((e) => console.log(e));
    //     }, []);
    //     console.log("Quiz questions: ", quizQuestions);
    // }

    return (
        <div>
            <Header />

            <div>
                <select name= "id" onChange = {handleChange}>
                    {quizList.map((q) =>{
                        return (<option key={q.id} value={q.id} >{q.quiz_name}</option>);
                    })}
                </select>
            </div>

            <form>
                {QuizExample.map(q => { 
                    return(
                        <div>
                            {console.log(q)}
                            <h2 >{q.quizQuestion}</h2>
                            <input type="radio" id="answer1" name={q.id} value={q.id} onChange={trueAnswer} />
                                <label for="answer1">{q.answerA}</label>
                            <input type="radio" id="answer2" name={q.id} value={q.id} onChange={falseAnswer} />
                                <label for="answer2">{q.answerA}</label>
                            <input type="radio" id="answer3" name={q.id} />
                                <label for="answer3">null</label>
                            <input type="radio" id="answer4" name={q.id} />
                                <label for="answer4">null</label>
                            <input type="radio" id="answer5" name={q.id} />
                                <label for="answer5">null</label>
                            <input type="radio" id="answer6" name={q.id} />
                                <label for="answer6">null</label>
                            {/* <button onClick={trueAnswer} value={q.id} >{q.answerA}</button>
                            <button onClick={falseAnswer} value={q.id} >{q.answerB}</button> */}
                        </div>
                    );
                })}
                <br />
                <button onClick={submitFunction}>Submit the answers!</button>
            </form>  

            <Link to = "/studentpage">
				<Button buttontext ='Go back to Student Page' />
			</Link>
        </div>  
    );
}

export default StudentQuiz;