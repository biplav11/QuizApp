import React, { useEffect, useState } from 'react'
import Question from './Question'

const App = (props) => {
    const [showSubmit, setShowSubmit] = useState(false)
    const [qn, setQn] = useState(0)

    const questions = [
        {
            question: "Who is the father of computer science",
            options: ["Issac Newton", "Charles Babbage", "Dennis Ritiche", "Steve Jobs"],
            answer: "Charles Babbage"
        },
        {
            question: "Who invented Unix",
            options: ["Issac Newton", "Charles Babbage", "Dennis Ritiche", "Steve Jobs"],
            answer: "Dennis Ritiche"
        },
        {
            question: "Which is not a browser",
            options: ["Chrome", "Edge", "Firefox", "Facebook"],
            answer: "Facebook"
        }
    ]
    const handleSubmit = (e) => {
        e.preventDefault();
        let ans = 0
        for (let i = 0; i < questions.length; i++) {
            if (document.getElementById('quizForm')[`question${i + 1}`].value === questions[i].answer) {
                ans++
            }
        }
        alert(`You got ${ans} out of ${questions.length} answers correct`)
        document.getElementById('quizForm').reset();

    }
    const handleChange = (e) => {
        for (let i = 0; i < questions.length; i++) {
            if (document.getElementById('quizForm')[`question${i + 1}`].value !== "") {
                setShowSubmit(true)
            } else {
                setShowSubmit(false)
                break;
            }
        }
    }
    return (
        <div>
            <h1>This is quiz app</h1>
            <h2>Question List</h2>
            {
                qn < questions.length ?
                    <>
                        <Question ques={questions[qn]} ind={qn} />
                        {
                            qn > 0 ?
                                <button onClick={() => setQn(qn - 1)}> Prev </button> : ''

                        }
                        <button onClick={() => setQn(qn + 1)}> Next </button>
                    </> :

                    <h1>You have completed the question</h1>
            }




        </div >
    )
}

export default App