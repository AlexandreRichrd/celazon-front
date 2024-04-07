import { getModalStore } from "@store/modal.store"
import  { FC } from "react"

import './styles.scss'

const Modal: FC = () => {
    const {isOpen, modalProps} = getModalStore()

    if(!isOpen || !modalProps) return null

    return (
    <div id="modal">
        {modalProps.content}
    </div>)
}

export default Modal