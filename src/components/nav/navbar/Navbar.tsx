import './styles.scss'
import { FC } from 'react';

import logo from '@assets/images/logo/logo.svg'
import remind from  '@assets/images/icon/icon _remind.svg'
import like from '@assets/images/icon/like.svg'

import SearchBar from '@components/inputs/search-bar/SearchBar';
import Profile from './profile/Profile';
import CartNav from './cart-nav/CartNav';
import PrimaryButton from '@components/buttons/primary-btn/PrimaryBtn';
import ConnectionModal from '@components/modals/connection-modal';

import { Link } from 'react-router-dom';
import { getAuthStore } from '@store/auth.store';
import { getModalStore } from '@store/modal.store';

const NavBar: FC = () => {

    const authStore = getAuthStore()
    const modaleStore = getModalStore()

    const handleAuth = () => {
        modaleStore.open({content: <ConnectionModal />})
    }

    return(
    <nav id="navbar">
        <Link to={'/'}><img src={logo} alt="logo-amazon" className='logo-amazon'/></Link>
        <SearchBar />
        <div className='right-navbar'>
            <Link to={'/favorites'}><img src={like} alt="" className='icon-navbar'/></Link>
            <CartNav />
            <img src={remind} alt="" className='icon-navbar'/>
            {authStore.auth ? <Profile img={'http://localhost:8081/images/user.jpg'}/> : <PrimaryButton event={() => handleAuth()}>S'identifier</PrimaryButton>}
        </div>
    </nav>
    )
}
 export default NavBar;