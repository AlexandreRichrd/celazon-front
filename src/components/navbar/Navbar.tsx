import './styles.scss'
import { FC } from 'react';

import logo from '@assets/images/logo/logo.svg'

import SearchBar from '@components/inputs/search-bar/SearchBar';
import Location from './location/Location';

const NavBar: FC = () => {
    return(
    <nav id="navbar">
        <img src={logo} alt="logo-amazon" />
        <Location />
        <SearchBar />
    </nav>
    )
}
 export default NavBar;