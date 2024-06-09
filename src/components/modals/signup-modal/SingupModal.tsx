import './styles.scss'

import InputText from '@components/form/inputs/text/InputText';
import { useState } from 'react';

import SecondaryBtn from '@components/buttons/secondary-btn';
import { getModalStore } from '@store/modal.store';
import ConnectionModal from '@components/modals/connection-modal'
import ValidateCodeModal from '../validate-code-modal/ValidateCodeModal';

import { getAuthStore } from '@store/auth.store';

const SignupModal = () => {

    const [username, setUsername] = useState('');
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const modalStore = getModalStore();
    const authStore = getAuthStore();

    const handleClose = () => {
        modalStore.close();
    }

    const handleAlreadyAnAccount = () => {
        modalStore.open({
            content: <ConnectionModal />
        })
    }

    const handleSignUp = async () => {
        const res: any = await authStore.register({username, email: mail, password});
        console.log(res)

        if(res.status){
            modalStore.open({
                content: <ValidateCodeModal email={mail} user_id={res.user_id} />
            })
        }
    }

    return(
        <div className="signup-modal-content">
            <div className="header">
                <div className="close">
                    <p onClick={handleClose}>X</p>
                </div>
                <h1>Inscription</h1>
            </div>
            <form onSubmit={handleSignUp} className="form-content">
                <InputText
                    placeholder="Nom d'utilisateur"
                    id="create-username"
                    type='text'
                    label="Nom d'utilisateur"
                    value={username}
                    onChange={setUsername}
                />
                <InputText
                    placeholder="Adresse mail"
                    id="create-mail"
                    type='email'
                    label="Adresse mail"
                    value={mail}
                    onChange={setMail}
                />

                <div className="password">
                    <InputText
                        placeholder=""
                        id="create-password"
                        type='password'
                        label="Mot de passe"
                        value={password}
                        onChange={setPassword}
                    />
                    <InputText
                        placeholder=""
                        id="passwordConfirm"
                        type='password'
                        label="Confirmer le mot de passe"
                        value={passwordConfirm}
                        onChange={setPasswordConfirm}
                    />
                </div>
            </form>
            <div className="container-btn">
                <SecondaryBtn event={() => handleSignUp()}>Créer un compte</SecondaryBtn>
            </div>
            <p className='link-form' onClick={handleAlreadyAnAccount}>
                J'ai déjà un compte
            </p>
        </div>
    )
}
export default SignupModal;