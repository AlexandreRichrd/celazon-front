import { FC, ReactNode, createContext, useContext, useEffect, useMemo, useState } from "react";


interface OpenModal {
    readonly content: ReactNode

    onSubmit?: () => void
}

export const useModalStore = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [modalProps, setModalProps] = useState<OpenModal>()

    // Actions
    const open = (props: OpenModal) => {
        setIsOpen(true)
        setModalProps(props)
    }

    const close = () => {
        setIsOpen(false)
        setModalProps(undefined)
    }

    return {
        isOpen,
        modalProps,

        open,
        close
    }
}

// export const useModalStore = () => {
//     const [modals, setModals] = useState<IModal[]>(
//         [
//             {
//                 show: false,
//                 name: 'ConnectionModal'
//             }
//         ]
//     );
//     const [ready, setReady] = useState<boolean>(false);

//     const processModals = useMemo(() => modals && ready, [modals, ready]);

//     const toggleModal = (name: string) => {
//         const updatedModals = modals.map(modal => {
//             if (modal.name === name) {
//                 return {
//                     ...modal,
//                     show: !modal.show
//                 }
//             }
//             return modal;
//         });
//         setModals(updatedModals);
//         console.log(modals)
//         return ready;
//     }

//     useEffect(() => {
//         if (modals) {
//             setReady(true);
//         }
//     }, [modals])

//     return {
//         modals,
//         processModals,
//         toggleModal
//     }
// }

export type ModalStore = ReturnType<typeof useModalStore>;
export const ModalStoreContext = createContext<ModalStore>({} as ModalStore);

export const getModalStore = () => useContext(ModalStoreContext);






