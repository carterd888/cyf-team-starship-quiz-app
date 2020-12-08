import React, {useState} from "react";
const QuizQuestion = () => {

	const [correctAnswer, setCorrectAnswer]= useState("");
	const [wrongAnswer, setWrongAnswer] = useState("");
	const [question, setQuestion] = useState("");
    
    function handleChange(e) {
        if (e.target.name === "question") {
            setQuestion(e.target.value);
            console.log(question);
        } else if (e.target.name === "correctAnswer") {
            setCorrectAnswer(e.target.value);
            console.log(correctAnswer);
        } else if (e.target.name === "wrongAnswer") {
            setWrongAnswer(e.target.value);
            console.log(wrongAnswer);
        }
    };

	return (
		<form >
			<label>
          Enter the question below:
				<br />
				<textarea
					id="question"
					name="question"
					rows="8"
					cols="40"
					value={question} onChange={handleChange}
				></textarea>
			</label>
			<br />
			<div>
				<br />
				<label >
            Answer 1 {" "} <input
						className='true-answer'
						type="text"
						name="correctAnswer"
						value={correctAnswer}
						onChange={handleChange} />
				</label>
			</div>
			<br />
			<div>
				<label >
            Answer 2 {" "} <input className='false-answer'
						type="text"
						name="wrongAnswer"
						value= {wrongAnswer}
						onChange={handleChange} />
				</label>
			</div>
		</form>
	);
};
export default QuizQuestion;