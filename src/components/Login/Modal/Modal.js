import React from "react";
import "./Modal.css";

const Modal = (props) => {
    return (
        <div className="modal-container" onClick={props.closeModal}>
            <div className="modal-content" onClick={event => event.stopPropagation()}>
                {props.label}
            </div>
        </div>
    );
}

export default Modal;
