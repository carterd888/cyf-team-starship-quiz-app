/* eslint-disable linebreak-style */
import React from "react";
import {BrowserRouter, Route} from 'react-router-dom';
import Header from "./Header";
import QuizButton from "./QuizButton";
// import QuizQuestion from "./QuizQuestion";

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
		<BrowserRouter>
			<Header />
			<Route path='/quizbutton' component= {QuizButton} />
			{/* <Route path='/quizquestion' component= {QuizQuestion} /> */}
		</BrowserRouter>
	);
}

export default App;
