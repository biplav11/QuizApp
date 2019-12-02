import React from 'react'

export default (props) => {
    let { ques, ind } = props
    return (
        <>
            <h3>{ques.question}</h3>
            {
                ques.options.map((opt, i) => {
                    return (
                        <div key={i}>
                            <input type="radio" value={opt} name={`question${ind + 1}`} id={`ans${i + 1}q${ind + 1}`} />
                            <label htmlFor={`ans${i + 1}q${ind + 1}`}>{opt}</label>
                            <br />
                        </div>
                    )
                })
            }
        </>
    )
}
