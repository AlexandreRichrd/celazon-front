import { FC, ReactNode, createContext, useContext, useState } from "react";


interface OpenDropDown {
    readonly content: ReactNode
    readonly position: { x: number, y: number }
}

export const useDropDownStore = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [dropDownProps, setDropDownProps] = useState<OpenDropDown>()

    // Actions
    const open = (props: OpenDropDown) => {
        setIsOpen(true)
        setDropDownProps(props)
    }

    const close = () => {
        setIsOpen(false)
        setDropDownProps(undefined)
    }

    return {
        isOpen,
        dropDownProps,

        open,
        close
    }
}

export type DropDownStore = ReturnType<typeof useDropDownStore>;
export const DropDownStoreContext = createContext<DropDownStore>({} as DropDownStore);

export const getDropDownStore = () => useContext(DropDownStoreContext);






