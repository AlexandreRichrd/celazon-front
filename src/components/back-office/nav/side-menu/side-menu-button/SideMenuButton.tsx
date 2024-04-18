import { FC } from 'react';
import './index.scss'
import { Link } from 'react-router-dom';

interface SideMenuButtonProps {
    label: string;
    route:string;
}

const SideMenuButton: any = ({ label, route }: SideMenuButtonProps) => {
    return (
        <Link to={route} id="side-menu-button">
            {label}
        </Link>
    );
}

export default SideMenuButton;