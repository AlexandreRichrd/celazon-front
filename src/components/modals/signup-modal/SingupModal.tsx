import './styles.scss'

import InputIcon from '../../form/inputs/input-icon/InputIcon';
import { useState } from 'react';

import UserIcon from '@assets/images/user.svg'
import PassIcon from '@assets/images/lock.svg'
import MailIcon from '@assets/images/mail.svg'
import SecondaryBtn from '@components/buttons/secondary-btn';
import { getModalStore } from '@store/modal.store';
import ConnectionModal from '@components/modals/connection-modal'

import type { IRegisterPayload } from '@interfaces/payload.interface';

const SignupModal = () => {

    const [username, setUsername] = useState('');
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const [registerPayload, setRegisterPayload] = useState<IRegisterPayload>({
        username: '',
        email: '',
        password: ''
    })

    const modalStore = getModalStore();

    const handleClose = () => {
        modalStore.close();
    }

    const handleAlreadyAnAccount = () => {
        modalStore.open({
            content: <ConnectionModal />
        })
    }

    return(
        <div className="signup-modal-content">
            <div className="header">
                <p onClick={handleClose}>X</p>
                <h1>Inscription</h1>
            </div>
            <div className="form-content">
                <InputIcon
                    type='text'
                    placeholder="Nom d'utilisateur"
                    id="create-username"
                    label="Nom d'utilisateur"
                    value={username}
                    onChange={setUsername}
                    icon={UserIcon}
                />
                <InputIcon
                    type='email'
                    placeholder="Adresse mail"
                    id="create-mail"
                    label="Adresse mail"
                    value={mail}
                    onChange={setMail}
                    icon={MailIcon}
                />

                <div className="password">
                    <InputIcon
                        type='password'
                        placeholder=""
                        id="create-password"
                        label="Mot de passe"
                        value={password}
                        onChange={setPassword}
                        icon={PassIcon}
                    />
                    <InputIcon
                        type='password'
                        placeholder=""
                        id="passwordConfirm"
                        label="Confirmer le mot de passe"
                        value={passwordConfirm}
                        onChange={setPasswordConfirm}
                        icon={PassIcon}
                    />
                </div>
            </div>
            <div className="container-btn">
                <SecondaryBtn event={() => console.log('click')}>Créer un compte</SecondaryBtn>
            </div>
            <p className='link-form' onClick={handleAlreadyAnAccount}>
                J'ai déjà un compte
            </p>
        </div>
    )
}

export default SignupModal;