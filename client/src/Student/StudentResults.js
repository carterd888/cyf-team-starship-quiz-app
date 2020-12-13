import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import Header from "../GeneralPages/Header";
import Button from '../GeneralPages/Button';

const StudentResults = () => {
    let [results, setResults] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3100/api/results") // Change to https://cyf-team-starship-quiz-app.herokuapp.com/api/results
            .then(data => data.json())
            .then(jsonData => setResults(jsonData))
            .catch(e => console.log(e));
    }, []);

    return (
        <div>
            <Header />
            <h2>Your quiz results:</h2>
            <div>
                <table>
                    <tr>
                        <th>Test</th>
                        <th>Score</th>
                    </tr> 
                    {
                        results.map(r => { 
                            return (
                                <tr>
                                    <td>{r.quiz_name}</td>
                                    <td>{r.score}</td>
                                </tr>);
                            })
                    }                  
                </table>
            </div>
            <Link to = "/studentpage">
				<Button buttontext ='Go back to Student Page' />
			</Link>
        </div>
    );
}

export default StudentResults;