import './styles.scss'

import { FC } from "react";
import SideMenuButton from './side-menu-button/SideMenuButton';

const SideMenu: FC = () => {
    const menus = [
        { label: 'Dashboard', route:'' },
        { label: 'Statistiques', route: 'stats' },
        { label: 'Marques', route: 'brands' },
        { label: 'Produits', route:'products' },
        { label: 'Paramètres', route: 'settings' },
    ];
    return (
        <div id="side-menu">
            {menus.map((menu, index) => (
                <SideMenuButton key={index} label={menu.label} route={menu.route} />
            ))}
        </div>
    );
};

export default SideMenu;