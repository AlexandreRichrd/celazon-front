import { FC, useState } from 'react'
import './styles.scss'

import InputText from '@components/form/inputs/text/InputText'
import PrimaryButton from '@components/buttons/primary-btn/PrimaryBtn'
import { getAuthStore } from '@store/auth.store'
import ConnectionModal from '../connection-modal/ConnectionModal'
import { getModalStore } from '@store/modal.store'
import { toast } from 'react-toastify'


const ResetPasswordModal : FC= () => {
    const [email, setEmail] = useState<string>('')

    const authStore = getAuthStore()

    const submitEmail = async () => {
        toast.success("Un email a été envoyé à l'adresse renseignée")
        authStore.resetPassword(email)
    }
    return(
        <div id="validate-code-modal-content">
            <h1>Veuillez entrer votre email</h1>
            <InputText
                placeholder="Email"
                id="Email"
                type='email'
                label="Email"
                value={email}
                onChange={setEmail}
            />
            <PrimaryButton event={submitEmail}>
                Valider
            </PrimaryButton>
        </div>
    )
}

export default ResetPasswordModal