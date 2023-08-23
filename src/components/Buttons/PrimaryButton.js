import React from "react"
import "./Buttons.css"

const PrimaryButton = (props) => {
    return (
        <button className='primary-button button' onClick={props.onClickHandle} disabled={props.disabled}>
            {props.label}
        </button>
    );
}

export default PrimaryButton
