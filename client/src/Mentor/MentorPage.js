import React, { useState } from "react";
import Header from "../GeneralPages/Header";

import Button from "../GeneralPages/Button";
import { Link } from "react-router-dom";

const MentorPage = () => {
    return (
        <div>
            <Header />
            <Link to = "/quizpage">
                <Button buttontext = 'Click to create a Quiz'/>
            </Link>
            <Link>
                <Button buttontext = 'Click to see the results' />
            </Link>

            
        </div>
    );
}

export default MentorPage;