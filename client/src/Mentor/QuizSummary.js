import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../GeneralPages/Header";
import Footer from "../GeneralPages/Footer";

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

		alert("The question has been deleted.");

	}

	function handleRedirect (){
		alert("The quiz has been updated and you are directed to the Mentor Page.");
	}

	return (
    <div>
      <Header />
      <h1>Quiz summary</h1>
      {quizQuestions.map((q) => {
        return (
          <div>
            <ul key={q.id}>
              {q.question}
              <li>{q.correct_answer}</li>

              <li>{q.wrong_answer_1}</li>
              <li>{q.wrong_answer_2}</li>
              <li>{q.wrong_answer_3}</li>
              <li>{q.wrong_answer_4}</li>
              <li>{q.wrong_answer_5}</li>
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
      <Footer />
    </div>
  );
};

export default QuizSummary;