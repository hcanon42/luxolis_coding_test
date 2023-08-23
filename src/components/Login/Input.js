import React from "react";
import "./Input.css"
import i18n from './../../services/i18n/i18n';

const Input = (props) => {

    return (
        <div className="explicit-input-container">
            <div className='input-container'>
                <div className='input-logo-container'>
                    {props.logo}
                </div>
                <input
                    className='input'
                    type={props.type}
                    placeholder={props.placeholder}
                    value={props.value}
                    onChange={props.onClickHandle}
                />
            </div>
            { props.showErrorMessage &&
                <div className="input-error">{i18n.t("login.errors.wrongCombination")}</div>
            }
        </div>
    );
}

export default Input;
