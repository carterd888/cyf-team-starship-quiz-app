import React, { useState } from "react";
import Header from "../GeneralPages/Header";
import moment from "moment";
import { Link } from "react-router-dom";
import MentorStyle from "./MentorStyle";
import Footer from "../GeneralPages/Footer";

const QuizName =(props)=> {
const mentorEmail = props.location.state.mentorEmail;
	const thisDate = new Date();
	const formattedDate = moment(thisDate).format("MMMM Do YYYY, h:mm:ss");


	const [quizName, setQuizName]= useState(formattedDate);

	function handleChange(e) {
		setQuizName(e.target.value);
		console.log(quizName);
	}

	function handleSubmit () {
		// e.preventDefault();
		console.log(`Quiz name is: ${quizName}`);

		if(!quizName){
			setQuizName(formattedDate);
			fetch("http://localhost:3100/api/quizname", {
				method: "POST",
				body: JSON.stringify({
					quiz_name: quizName,
				}),
				headers: {
					"Content-Type": "application/json",
				},
			});

			alert("The Quiz name has been submitted.");
			/* setQuizName(""); */
		}

		fetch("http://localhost:3100/api/quizname", {
			method: "POST",
			body: JSON.stringify({
				quiz_name: quizName,
			}),
			headers: {
				"Content-Type": "application/json",
			},
		});

		alert("The Quiz name has been submitted.");
		/* setQuizName(""); */

	}

	return (
    <div className="container">
      <Header />
      <MentorStyle />
      <br />
      <div className="quiz-name-form row g-3">
        {/* <div className="col-auto"> */}
        <label htmlFor="quizName" className="quiz-name-label">
          {" "}
          Enter the new Quiz name:{" "}
        </label>
        {/* 				</div> */}
        {/* 	<div className="col-auto"> */}
        <input
          className="quiz-name-input"
          type="text"
          name="quizName"
          placeholder={formattedDate}
          value={quizName}
          onChange={handleChange}
        />
        {/* 	</div> */}

        <Link
          to={{
            pathname: "/quizpage",
            state: { quizName, mentorEmail },
          }}
        >
          <button
            className="button2 btn-primary"
            type="submit"
            onClick={handleSubmit}
          >
            Click here to create the quiz name.
          </button>
        </Link>
      </div>
      <Footer />
    </div>
  );
};


export default QuizName;