import './styles.scss'
import { FC } from 'react';

import logo from '@assets/images/logo/logo.svg'

import SearchBar from '@components/inputs/search-bar/SearchBar';
import Location from './location/Location';
import Profile from './profile/Profile';
import Order from './order/Order';
import CartNav from './cart-nav/CartNav';

const NavBar: FC = () => {
    return(
    <nav id="navbar">
        <img src={logo} alt="logo-amazon" className='logo-amazon'/>
        <Location />
        <SearchBar />
        <Profile />
        <Order />
        <CartNav />
    </nav>
    )
}
 export default NavBar;