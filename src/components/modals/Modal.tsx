import { getModalStore } from "@store/modal.store"
import  { FC } from "react"

import './styles.scss'

const Modal: FC = () => {
    const {isOpen, modalProps, close} = getModalStore()

    if(!isOpen || !modalProps) return null

    const handleClick = () => {
        close()
    }
    const handleContentClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.stopPropagation()
    };

    return (
    <div id="modal" onClick={handleClick}>
        <div onClick={handleContentClick}>
            {modalProps.content}
        </div>
    </div>)
}

export default Modal