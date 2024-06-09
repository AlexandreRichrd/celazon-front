import { useNavigate, useParams } from 'react-router-dom'
import './styles.scss'
import { FC, useEffect, useState } from 'react'
import PrimaryBtn from '@components/buttons/primary-btn'
import InputText from '@components/form/inputs/text/InputText'
import { getAuthStore } from '@store/auth.store'
import { toast } from 'react-toastify'
import { getModalStore } from '@store/modal.store'
import ConnectionModal from '@components/modals/connection-modal'

const ResetPasswordPage: FC = () => {
    const [password, setPassword] = useState<string>('')
    const [confirmPassword, setConfirmPassword] = useState<string>('')
    const [rightCode, setRightCode] = useState<boolean>(false)
    const {code} = useParams()
    const {codeExists, updatePassword} = getAuthStore()

    const modalStore = getModalStore()
    const navigate = useNavigate()

    const resetPassword = async () => {
        if(password !== confirmPassword) {
            toast.error("Les mots de passe ne correspondent pas")
            return
        }
        if(!code){
            toast.error("Code invalide")
            return
        }
        const result = await updatePassword(password, code)
        if(result){
            toast.success("Mot de passe modifié")
            modalStore.open({content: <ConnectionModal />})
            navigate('/')
        } else {
            toast.error("Erreur lors de la modification du mot de passe")
        }
    }
    
    useEffect(() => {
        codeExists(code).then((res) => {
            setRightCode(res)
        })
    })
    if(!rightCode) return (
        <div id="reset-password-page">
            <h1>Code invalide</h1>
        </div>
    )

    return (
        <div id="reset-password-page">
            <div className='form'>
                <h1>Reset password</h1>
                <InputText
                    placeholder="New password"
                    id="password"
                    type="password"
                    label="New password"
                    value={password}
                    onChange={setPassword}
                />
                <InputText
                    placeholder="Confirm new password"
                    id="confirm-password"
                    type="password"
                    label="Confirm new password"
                    value={confirmPassword}
                    onChange={setConfirmPassword}
                />
                <PrimaryBtn event={resetPassword}>Valider</PrimaryBtn>
            </div>
        </div>
    )
}

export default ResetPasswordPage