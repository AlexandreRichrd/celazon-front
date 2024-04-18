import './styles.scss'

import { Outlet } from 'react-router-dom';

import SideMenu from '@components/back-office/nav/side-menu/SideMenu';
import BackOfficeBrand from './brand/Brand';
import BackOfficeProducts from './products/BackOfficeProducts';

const BackOffice = () => {

    
    return (
        <div id="back-office">
            <SideMenu />
            <Outlet />
        </div>
    )
}

export default BackOffice;