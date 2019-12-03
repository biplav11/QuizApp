import React, { useEffect, useState } from 'react'
import Question from './Question'

const App = (props) => {
    const [qn, setQn] = useState(0)
    const [showNext, setShowNext] = useState(false)
    const [correctAnswer, setCorrectAnswer] = useState(0)

    const questions = [
        {
            question: "Who invented Unix",
            options: ["Issac Newton", "Charles Babbage", "Dennis Ritiche", "Steve Jobs"],
            answer: "Dennis Ritiche"
        },
        {
            question: "Which is not a browser",
            options: ["Chrome", "Edge", "Firefox", "Facebook"],
            answer: "Facebook"
        },
        {
            question: "Who is the father of computer science",
            options: ["Issac Newton", "Charles Babbage", "Dennis Ritiche", "Steve Jobs"],
            answer: "Charles Babbage"
        },
    ]

    const handleNext = () => {
        let inputValue = document.getElementById(`ques${qn}`)[`question${qn}`].value
        if (inputValue === questions[qn].answer) {
            setCorrectAnswer(correctAnswer + 1)
        }

        setShowNext(false)
        setQn(qn + 1)
    }

    const handleChange = () => {
        console.log(qn)
        if (document.getElementById(`ques${qn}`)[`question${qn}`].value !== "") {
            setShowNext(true)
        }
    }

    return (
        <div>
            <h1>This is quiz app</h1>
            <h2>Question List</h2>
            {
                qn < questions.length ?
                    <>
                        <Question ques={questions[qn]} ind={qn} changeFunction={handleChange} />
                        {
                            qn > 0 ?
                                <button onClick={() => setQn(qn - 1)}> Prev </button> : ''

                        }
                        {
                            showNext ?
                                <button
                                    style={{ height: 30, width: 100, backgroundColor: '#33ffCC', marginTop: 10 }}
                                    onClick={handleNext}
                                >
                                    Next
                            </button> : ''
                        }

                    </> :

                    <h1>You have completed the question</h1>
            }




        </div >
    )
}

export default App