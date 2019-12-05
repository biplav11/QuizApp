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
        ],
        // Sates
        [qn, setQn] = useState(0),
        [showNext, setShowNext] = useState(false),
        [changed, setChanged] = useState(0),
        [checked, setChecked] = useState(new Array(questions.length).fill(null)),
        // Internal Functions
        handleNext = () => {
            setShowNext(false)
            setQn(qn + 1)
        },
        handleChange = () => {
            let checkedValues = checked
                checkedValues[qn] = document.querySelector(`input[name="question${qn}"]:checked`).value
            setChanged(changed + 1)
            setChecked(checkedValues)
            setShowNext(true)
        },
        handlePrev = () => {
            setQn(qn - 1)
        },
        getCorrectAnswer = () => {
            let correntAnswers = 0;
            checked.forEach((item, i) => {
                if (item === questions[i].answer) {
                    correntAnswers++
                }
            })
            return (correntAnswers)
        },
        calcColor = () => {
            let correntAnswers = getCorrectAnswer(),
                percent = correntAnswers / questions.length,
                color
            
            if (percent < 0.4) {
                color = 'red'
            } else if (percent < 0.7) {
                color = 'yellow'
            } else {
                color = 'green'
            }
            return(<span style={{ color: color }}>{correntAnswers}</span>)
        }

    return (
        <>
            <h1>This is quiz app</h1>
            <h2>Question List</h2>
            {
                qn < questions.length ?
                    <>
                        <Question ques={questions[qn]} ind={qn} handleChange={handleChange} checked={checked} />
                        {
                            qn > 0 ? <button style={style} onClick={handlePrev}> Prev </button> : ''

                        }
                        {
                            showNext || checked[qn] !== null ? <button style={style} onClick={handleNext}>{qn === questions.length - 1 ? "Finish" : "Next"}</button> : ''
                        }

                    </>
                :
                    <>
                        <h1>You have completed the question</h1>
                        <h2>You scored {calcColor()} out of {questions.length}</h2>
                        <div>
                            ============================================================
                        </div>
                        {
                            questions.map((ques, i) => {
                                return (
                                    <React.Fragment key={i}>
                                        <h2>{ques.question}</h2>
                                        <h3>Correct Answer : {ques.answer}</h3>
                                    </React.Fragment>
                                )
                            })
                        }
                    </>
            }
        </>
    )
}

export default App