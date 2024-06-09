import { useState } from 'react'
import './styles.scss'

import InputText from '@components/form/inputs/text/InputText'
import PrimaryButton from '@components/buttons/primary-btn/PrimaryBtn'
import { getAuthStore } from '@store/auth.store'
import ConnectionModal from '../connection-modal/ConnectionModal'
import { getModalStore } from '@store/modal.store'

interface ValidateCodeModalProps {
    email: string
    user_id: number
}

const ValidateCodeModal = ({email, user_id}: ValidateCodeModalProps) => {
    const [code, setCode] = useState<string>('')
    const [error, setError] = useState<string>('')

    const authStore = getAuthStore()
    const modalStore = getModalStore()

    const submitCode = async () => {
        const result = await authStore.validateValidationCode({code, user_id})
        if(result){
            modalStore.open({content: <ConnectionModal/>})
        }else{
            setError('Le code est incorrect')
        }
    }
    return(
        <div id="validate-code-modal-content">
            <h1>Veuillez entrer le code envoyé à {email}</h1>
            <InputText
                placeholder="Code"
                id="code"
                type='text'
                label="Code"
                value={code}
                onChange={setCode}
            />
            {error=='' ? '' : <p className='error'>{error}</p>}
            <PrimaryButton event={submitCode}>
                Valider
            </PrimaryButton>
        </div>
    )
}

export default ValidateCodeModal