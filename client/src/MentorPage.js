import React, { useState } from "react";
import Header from "./Header";
import QuizButton from "./QuizButton";
import QuizResultsButton from "./QuizResultsButton";
import { Link } from "react-router-dom";

const MentorPage = () => {
    return (
        <div>
            <Header />
            <Link to = "/quizpage">
                <QuizButton />
            </Link>
            <Link>
                <QuizResultsButton />
            </Link>

            
        </div>
    );
}

export default MentorPage;