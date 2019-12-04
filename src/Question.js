import React from 'react'

export default (props) => {
    let { ques, ind, checked, handleChange } = props

    return (
        <>
            <h3>{ques.question}</h3>
            <form>
                {
                    ques.options.map((opt, i) => {
                        return (
                            <React.Fragment key={i}>
                                <input type="radio" value={opt} name={`question${ind}`} id={`ans${i + 1}q${ind + 1}`} checked={checked[ind] === opt} onChange={handleChange}/>
                                <label htmlFor={`ans${i + 1}q${ind + 1}`}>{opt}</label>
                                <br />
                            </React.Fragment>
                        )
                    })
                }
            </form>
        </>
    )
}
