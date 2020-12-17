import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../GeneralPages/Header";
import Button from "../GeneralPages/Button";


const StudentQuiz = () => {
	
	const [quizQuestions, setQuizQuestions]= useState([]);
	const [quizList, setQuizList] = useState([]);
	const [quizId, setQuizId] = useState(0);
	const [correctAnswer, setCorrectAnswer]= useState("");
	const [wrongAnswer1, setWrongAnswer1] = useState("");
	const [wrongAnswer2, setWrongAnswer2] = useState("");
	const [wrongAnswer3, setWrongAnswer3] = useState("");
	const [wrongAnswer4, setWrongAnswer4] = useState("");
	const [wrongAnswer5, setWrongAnswer5] = useState("");

	const [score, setScore] = useState(0);
	
	useEffect(() => {
		fetch("http://localhost:3100/api/quiz") // Change to https://cyf-team-starship-quiz-app.herokuapp.com/api/quiz
			.then((data) => data.json())
			.then((jsonData) => setQuizList(jsonData))
			.catch((e) => console.log(e));
	}, []);

	async function handleChange(e) {
		console.log(e.target.value);
		setQuizId(e.target.value);
		await fetch(`http://localhost:3100/api/questions/${e.target.value}`) // Change to https://cyf-team-starship-quiz-app.herokuapp.com/api/questions/${e.target.value}
			.then((data) => data.json())
			.then((jsonData) => setQuizQuestions(jsonData))
			.catch((e) => console.log(e));

		// console.log(quizQuestions);
	}

	function checkCorrectAnswer (e){
		setCorrectAnswer(e.target.value);
		setScore(score+1)
	} 

		function checkWrongAnswer1(e) {
      setWrongAnswer1(e.target.value);
	} 
	
		function checkWrongAnswer2(e) {
      setWrongAnswer2(e.target.value);
	} 
	
		function checkWrongAnswer3(e) {
      setWrongAnswer3(e.target.value);
	} 
	
		function checkWrongAnswer4(e) {
      setWrongAnswer4(e.target.value);
	} 
	
		function checkWrongAnswer5(e) {
      setWrongAnswer5(e.target.value);
	} 
	

	function submitFunction(e) {
		// e.preventDefault();

		const studentScore = `your score is ${score} / ${quizQuestions.length}`;

		fetch("http://localhost:3100/api/results", {
      method: "POST",
      body: JSON.stringify({
        quiz_id: quizId,
        student_id: 1,
        score: score,
        quiz_length: quizQuestions.length,
      }),
      headers: {
        "Content-Type": "application/json",
      },
	});
	alert("The quiz has been submitted.");
	}

	return (
		<div>
			<Header />
			<div>
				<select name="id" onChange = {handleChange}>
					{quizList.map((q) =>{
						return (<option key={q.id} value={q.id} >{q.quiz_name}</option>);
					})}
				</select>
			</div>

			<form>
				{quizQuestions.map((q) => {
					return (
            <div>
              <h2>{q.question}</h2>
              <label htmlFor="answer1">
                {q.correct_answer}
                <input
                  type="radio"
                  id="answer1"
                  name={q.id}
                  value={q.correct_answer}
                  onChange={checkCorrectAnswer}
                />
              </label>
              <label htmlFor="answer2">
                {q.wrong_answer_1}
                <input
                  type="radio"
                  id="answer2"
                  name={q.id}
                  value={q.wrong_answer_1}
                  onChange={checkWrongAnswer1}
                />
              </label>
              <div>
                {q.wrong_answer_2 && (
                  <label htmlFor="answer3">
                    {q.wrong_answer_2}
                    <input
                      type="radio"
                      id="answer3"
                      name={q.id}
                      value={q.wrong_answer_2}
                      onChange={checkWrongAnswer2}
                    />
                  </label>
                )}
              </div>
              <div>
                {q.wrong_answer_3 && (
                  <label htmlFor="answer4">
                    {q.wrong_answer_3}
                    <input
                      type="radio"
                      id="answer4"
                      name={q.id}
                      value={q.wrong_answer_3}
                      onChange={checkWrongAnswer3}
                    />
                  </label>
                )}
              </div>
              <div>
                {q.wrong_answer_4 && (
                  <label htmlFor="answer5">
                    {q.wrong_answer_4}
                    <input
                      type="radio"
                      id="answer5"
                      name={q.id}
                      value={q.wrong_answer_4}
                      onChange={checkWrongAnswer4}
                    />
                  </label>
                )}
              </div>
              <div>
                {q.wrong_answer_5 && (
                  <label htmlFor="answer6">
                    {q.wrong_answer_5}
                    <input
                      type="radio"
                      id="answer6"
                      name={q.id}
                      value={q.wrong_answer_5}
                      onChange={checkWrongAnswer5}
                    />
                  </label>
                )}
              </div>
            </div>
          );
				})}
				<br />
				<Link to = "/studentscore" params ={{ score: "test"}}>
				<button onClick={submitFunction}>Submit the answers!</button>
				</Link>
			</form>

			<Link to = "/studentpage">
				<Button buttontext ='Go back to Student Page' />
			</Link>
		</div>
	);
};

export default StudentQuiz;