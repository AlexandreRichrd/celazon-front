import { FC } from 'react';
import './index.scss'

interface SideMenuButtonProps {
    label: string;
    onClick: () => void;
}

const SideMenuButton: any = ({ label, onClick }: SideMenuButtonProps) => {
    return (
        <button onClick={onClick} id="side-menu-button">
            {label}
        </button>
    );
}

export default SideMenuButton;