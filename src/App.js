import React, { useEffect, useState } from 'react'
import Question from './Question'

const App = (props) => {
    const [qn, setQn] = useState(0)
    const [showNext, setShowNext] = useState(false)
    const [correctAnswer, setCorrectAnswer] = useState(0)

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

    const handleNext = () => {
        // let inputValue = document.getElementById(`ques${qn}`)[`question${qn}`].value
        // if (inputValue === questions[qn].answer) {
        //     setCorrectAnswer(correctAnswer + 1)
        // }
        // setShowNext(false)
        setQn(qn + 1)
        // document.getElementById(`ques${qn}`).reset()
    }

    const resetForm = () => {
        document.getElementById(`ques${qn}`).reset()
        setShowNext(false)

    }

    const handleChange = () => {
        console.log(qn)
        // if (document.getElementById(`ques${qn}`)[`question${qn}`].value !== "") {
        //     setShowNext(true)
        // }
    }

    return (
        <div>
            <h1>This is quiz app</h1>
            <h2>Question List</h2>
            <form id='hello' onChange={handleChange}>

                <Question ques={questions[qn]} ind={qn} />
            </form>

            <button onClick={handleNext}>Next</button>
        </div >
    )
}

export default App