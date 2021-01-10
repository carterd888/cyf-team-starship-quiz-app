import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MentorStyle from "./MentorStyle";

const QuizSummary =(props)=>{

	const mentorEmail = props.location.state.mentorEmail;
	
	console.log(props.location.state.quizName);
console.log(props.location.state.mentorEmail);

	const [quizQuestions, setQuizQuestions] = useState([]);
	const [deleteId, setDeleteId] = useState("");

	useEffect(() => {
		fetch(`http://localhost:3100/api/questions/${props.location.state.quizName}`) // Change to https://cyf-team-starship-quiz-app.herokuapp.com/api/questions/${e.target.value}
			.then((data) => data.json())
			.then((jsonData) => setQuizQuestions(jsonData))
			.catch((e) => console.log(e));
	}, [deleteId]);

	console.log(quizQuestions);

	function handleDelete (e){
		console.log(e);
		console.log(deleteId);
		setDeleteId(e);
		fetch(`http://localhost:3100/api/questions/${e}`, {
			method: "DELETE",
			body: JSON.stringify({

			}),
			headers: {
				"Content-Type": "application/json",
			},
		});

		alert("The question has been deleted."); // look into using conformation box

	}

	function handleRedirect (){
		alert("The quiz has been updated and you are directed to the Mentor Page.");
	}

	return (
    <div className="container">
    <MentorStyle />
      <h1 className="quiz-summary-title">Quiz summary</h1>
      {quizQuestions.map((q) => {
        return (
          <div className="question-input-area">
            <ul className="question-box" key={q.id}>
              {q.question}
              <li className="answer-box">{q.correct_answer}</li>
              <li className="answer-box">{q.wrong_answer_1}</li>
              <li className="answer-box">{q.wrong_answer_2}</li>
              <li className="answer-box">{q.wrong_answer_3}</li>
              <li className="answer-box">{q.wrong_answer_4}</li>
              <li className="answer-box">{q.wrong_answer_5}</li>
            </ul>
            <Link
              to={{
                pathname: "/quizedit",
                state: { q, mentorEmail },
              }}
            >
              <button>Edit</button>
            </Link>

            <button onClick={() => handleDelete(q.id)}>Delete</button>
          </div>
        );
      })}
      <Link
        to={{
          pathname: "/mentorpage",
          state: { mentorEmail },
        }}
      >
        <button onClick={handleRedirect}>Submit</button>
      </Link>
    </div>
  );
};

export default QuizSummary;