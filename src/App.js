import React, { useState } from 'react'
import Question from './Question'
const style = { height: 30, width: 100, backgroundColor: '#33ffCC', marginTop: 10 }

const App = (props) => {
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

    const [qn, setQn] = useState(0)
    const [showNext, setShowNext] = useState(false)
    const [correctAnswer, setCorrectAnswer] = useState(0)
    const [checked, setChecked] = useState(new Array(questions.length).fill(null))

    const handleNext = () => {
        let inputValue = document.getElementById(`ques${qn}`)[`question${qn}`].value
        let selectedOption = document.querySelector(`input[name="question${qn}"]:checked`)

        let checkedIndex = checked;
        checkedIndex[qn] = selectedOption.getAttribute("data-index")
        setChecked(checkedIndex)

        if (inputValue === questions[qn].answer) {
            setCorrectAnswer(correctAnswer + 1)
        }

        setShowNext(false)
        setQn(qn + 1)
    }

    const handleChange = () => {
        if (document.getElementById(`ques${qn}`)[`question${qn}`].value !== "") {
            setShowNext(true)
        }
    }

    const handlePrev = () => {
        setQn(qn - 1)
    }

    const calcColor = () => {
        let percent = correctAnswer / questions.length
        if (percent < 0.4) {
            return (<span style={{ color: "red" }}>{correctAnswer}</span>)
        } else if (percent < 0.7) {
            return (<span style={{ color: "yellow" }}>{correctAnswer}</span>)
        } else {
            return (<span style={{ color: "green" }}>{correctAnswer}</span>)
        }
    }

    let cond = showNext || checked[qn] !== null
    let setButtonText = qn === questions.length - 1 ? "Finish" : "Next"
    return (
        <div>
            <h1>This is quiz app</h1>
            <h2>Question List</h2>
            {
                qn < questions.length ?
                    <>
                        <Question ques={questions[qn]} ind={qn} changeFunction={handleChange} checked={checked[qn]} />
                        {
                            qn > 0 ? <button style={style} onClick={handlePrev}> Prev </button> : ''

                        }
                        {
                            cond ? <button style={style} onClick={handleNext}>{setButtonText}</button> : ''
                        }

                    </> :
                    <>
                        <h1>You have completed the question</h1>
                        <h2>You scored {calcColor()} out of {questions.length}</h2>
                        <div>
                            ============================================================
                        </div>
                        {
                            questions.map((ques, i) => {
                                return (
                                    <div key={i}>
                                        <h2>{ques.question}</h2>
                                        <h3>Correct Answer : {ques.answer}</h3>
                                    </div>
                                )
                            })
                        }
                    </>
            }
        </div >
    )
}

export default App