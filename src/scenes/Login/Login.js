import React, { useState } from 'react';
import "./Login.css";
import { ReactComponent as CartLogo} from './static/cart.svg';
import { ReactComponent as LockLogo} from './static/lock.svg';
import { ReactComponent as UserLogo} from './static/user.svg';
import i18n from './../../services/i18n/i18n';
import dummyUser from './../../local/dummy.json'
import { useNavigate } from 'react-router-dom';
import Input from '../../components/Login/Input';
import TertiaryButton from '../../components/Buttons/TertiaryButton';
import PrimaryButton from '../../components/Buttons/PrimaryButton';
import Modal from '../../components/Login/Modal';

const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showModal, setShowModal] = useState(false);

    const closeModal = () => {
        setShowModal(false);
    }

    const handleChangeUsername = (event) => {
        setUsername(event.target.value);
    }

    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    }

    const containsOtherThanLettersNumbersAndSpecialChar = (stringToTest) => {
        const regex = /^[a-zA-Z0-9!@#$%^&*()_+{}[\]:;<>,.?~\-=/\\|]*$/;

        return !regex.test(stringToTest);
    }
    
    const handleLoginClick = () => {
        if (username === dummyUser.username
            && password === dummyUser.password) {
            navigate('/home')
        } else {
            setShowModal(true);
        }
    }

    return (
        <div className='main-page'>
            { showModal === true &&
                <Modal closeModal={closeModal} label={i18n.t("login.errors.incorrectPassword")}/>
            }
            <div className='main-container'>
                <div className='logo-svg-container'>
                    <CartLogo />
                </div>
                <div className='form-container'>
                    <div className='inputs-container'>
                        <Input
                            logo={<UserLogo />}
                            value={username}
                            onClickHandle={handleChangeUsername}
                            type="text"
                            placeholder={i18n.t("login.usernamePlaceholder")}
                        />
                        <Input
                            logo={<LockLogo />}
                            value={password}
                            onClickHandle={handleChangePassword}
                            type="password"
                            placeholder={i18n.t("login.passwordPlaceholder")}
                            showErrorMessage={containsOtherThanLettersNumbersAndSpecialChar(password)}
                        />
                    </div>
                    <div className='login-buttons-container'>
                        <PrimaryButton
                            label={i18n.t("login.loginButton")}
                            onClickHandle={handleLoginClick}
                            disabled={containsOtherThanLettersNumbersAndSpecialChar(password)}
                        />
                        <TertiaryButton
                            label={i18n.t("login.forgotPasswordButton")}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
