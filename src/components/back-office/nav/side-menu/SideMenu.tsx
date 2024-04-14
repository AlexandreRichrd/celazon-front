import './styles.scss'

import { FC } from "react";
import SideMenuButton from './side-menu-button/SideMenuButton';

const SideMenu: FC = () => {
    const menus = [
        { label: 'Dashboard', onClick: () => console.log('dashboard') },
        { label: 'Produits', onClick: () => console.log('produits') },
        { label: 'Commandes', onClick: () => console.log('commandes') },
        { label: 'Clients', onClick: () => console.log('clients') },
        { label: 'Statistiques', onClick: () => console.log('statistiques') },
        { label: 'Paramètres', onClick: () => console.log('paramètres') },
    ];
    return (
        <div id="side-menu">
            {menus.map((menu, index) => (
                <SideMenuButton key={index} label={menu.label} onClick={menu.onClick} />
            ))}
        </div>
    );
};

export default SideMenu;