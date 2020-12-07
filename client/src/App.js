/* eslint-disable linebreak-style */
import React, { useEffect, useState } from "react";
import Header from "./Header";
import QuizButton from "./QuizButton";
import QuizQuestion from "./QuizQuestion";

import "./App.css";
// import { getMessage } from "./service";


export function App() {
	// const [display, setDisplay] = useState(false);

	//  function backButton() {
	// 	setDisplay(false);
	// }

	// useEffect(() => {
	// 	getMessage().then((message) => setMessage(message));
	// }, []);

	return (
		<div>
			<Header />
			<QuizButton />
			<QuizQuestion />
		</div>
	);
}

export default App;
