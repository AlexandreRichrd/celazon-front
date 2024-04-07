import './style.scss'

import InputIcon from '../../form/inputs/input-icon/InputIcon';
import { useState } from 'react';

import UserIcon from '@assets/images/user.svg'
import PassIcon from '@assets/images/lock.svg'
import SecondaryBtn from '@components/buttons/secondary-btn';
import { getModalStore } from '@store/modal.store';

const ConnectionModal = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const modalStore = getModalStore();

    const handleClose = () => {
        modalStore.close();
    }

    return(
        <div className="connection-modal-content">
            <div className="header">
                <p onClick={handleClose}>X</p>
                <h1>Connexion</h1>
            </div>
            <div className="form-content">
                <InputIcon
                    type='text'
                    placeholder="Nom d'utilisateur"
                    id="username"
                    label="Nom d'utilisateur"
                    value={username}
                    onChange={setUsername}
                    icon={UserIcon}
                />
                <InputIcon
                    type='password'
                    placeholder=""
                    id="password"
                    label="Mot de passe"
                    value={password}
                    onChange={setPassword}
                    icon={PassIcon}
                />
                <p className='link-form'>Mot de passe oublié</p>
            </div>
            <div className="container-btn">
                <SecondaryBtn event={() => console.log('click')}>Créer un compte</SecondaryBtn>
            </div>
            <p className='link-form'>
                Je n'ai pas de compte
            </p>
        </div>
    )
}

export default ConnectionModal;