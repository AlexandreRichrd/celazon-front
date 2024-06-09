import './style.scss'

import { useState } from 'react';
import InputText from '@components/form/inputs/text/InputText';

import SecondaryBtn from '@components/buttons/secondary-btn';
import { getModalStore } from '@store/modal.store';

import SignupModal from '../signup-modal/SingupModal';
import { getAuthStore } from '@store/auth.store';
import { getProductStore } from '@store/product.store';
import ResetPasswordModal from '../reset-password-modal';

const ConnectionModal = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const modalStore = getModalStore();
    const productStore = getProductStore();

    const authStore = getAuthStore()

    const handleClose = () => {
        modalStore.close();
    }

    const accountCreation = () => {
        modalStore.open({
            content: <SignupModal />
        })
    }

    const handleSubmit = async () => {
        const res = await authStore.setAuthentication({username, password});
        if(res){
            productStore.fetchProducts();
            modalStore.close();
        }
    }

    const sendResetEmail = () => {
        modalStore.open({content: <ResetPasswordModal/>})
    }

    return(
        <div className="connection-modal-content">
            <div className="header">
                <div className="close">
                    <p onClick={handleClose}>X</p>
                </div>
                <h1>Connexion</h1>
            </div>
            <form onSubmit={handleSubmit} className="form-content">
                <InputText
                    placeholder="Nom d'utilisateur"
                    id="username"
                    type='text'
                    label="Nom d'utilisateur"
                    value={username}
                    onChange={setUsername}
                />
                <InputText
                    placeholder="Mot de passe"
                    id="password"
                    type='password'
                    label="Mot de passe"
                    value={password}
                    onChange={setPassword}
                />
                <p className='link-form' onClick={sendResetEmail}>Mot de passe oublié</p>
            </form>
            <div className="container-btn">
                <SecondaryBtn event={() => handleSubmit()}>Connexion</SecondaryBtn>
            </div>
            <p className='link-form' onClick={accountCreation}>
                Je n'ai pas de compte
            </p>
        </div>
    )
}

export default ConnectionModal;