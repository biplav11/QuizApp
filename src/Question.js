import React, { useEffect } from 'react'

export default (props) => {
    let { ques, ind, changeFunction, checked } = props
    useEffect(() => {
        let inputGroup = document.querySelector(`input[name="question${ind}"]:checked`)
        if (inputGroup) {

            inputGroup.checked = false
        }
        if (checked) {
            document.querySelectorAll(`input[name="question${ind}"]`)[checked].checked = true
        }
    }, [ind, checked])
    return (
        <>
            <h3>{ques.question}</h3>
            <form id={`ques${ind}`} onChange={changeFunction}>
                {
                    ques.options.map((opt, i) => {
                        return (
                            <div key={i}>
                                <input type="radio" value={opt} name={`question${ind}`} data-index={i} id={`ans${i + 1}q${ind + 1}`} />
                                <label htmlFor={`ans${i + 1}q${ind + 1}`}>{opt}</label>
                                <br />
                            </div>
                        )
                    })
                }
            </form>
        </>
    )
}
