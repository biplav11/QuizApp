import React, { useState } from 'react'

export default (props) => {
    let { ques, ind } = props
    const [index, setIndex] = useState(ind)
    return (
        <>
            <h3>{ques.question}</h3>
            {
                ques.options.map((opt, i) => {
                    return (
                        <div key={i}>
                            <input type="radio" value={opt} name={`question${ind}`} id={`ans${i + 1}q${ind + 1}`} />
                            <label htmlFor={`ans${i + 1}q${ind + 1}`}>{opt}</label>
                            <br />
                        </div>
                    )
                })
            }
        </>
    )
}
