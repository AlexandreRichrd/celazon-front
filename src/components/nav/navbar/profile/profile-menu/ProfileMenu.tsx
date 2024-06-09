import { FC } from 'react';
import './styles.scss'
import { Link } from 'react-router-dom';
import { getAuthStore } from '@store/auth.store';

interface IProfileMenuProps {
    isProfileMenuToggled: boolean;
}

const ProfileMenu = ({ isProfileMenuToggled }: IProfileMenuProps) => {
    const {disconnect} = getAuthStore()
    return (
        <div id={isProfileMenuToggled ? 'profile-menu' : 'no-profile-menu'}>
            <ul>
                <li><Link to='/profile'>Mon compte</Link></li>
                <li><Link to=''>Mes commandes</Link></li>
                <li><Link to='/back-office'>Vendre sur celazon</Link></li>
                <li onClick={disconnect}><p>Se déconnecter</p></li>
            </ul>
        </div>
    )
}

export default ProfileMenu;