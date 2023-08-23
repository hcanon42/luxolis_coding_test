import React from "react"
import "./Buttons.css"

const TertiaryButton = (props) => {
    return (
        <button className='tertiary-button button'>
            {props.label}
        </button>
    );
}

export default TertiaryButton
