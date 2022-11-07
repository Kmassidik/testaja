import React from 'react'

function Button(props) {
    return(
        <div className="d-flex justify-content-center mx-4 mb-1 mb-lg-1">
            <button onClick={props.click} type="button" className="btn btn-primary btn-lg">{props.title}</button>
        </div>
    )
}

export default Button