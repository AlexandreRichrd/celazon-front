import './styles.scss'

import { FC, useState } from "react";
import Down from '@assets/images/icon/icon _down.svg'
import ProfileMenu from './profile-menu';
import { Link } from 'react-router-dom';

interface IProfile {
    img: string;
}

const Profile = ({img}: IProfile) => {
    const [isProfileMenuToggled, setIsProfileMenuToggled] = useState<boolean>(false);
    const toggleProfileMenu = () => {
        setIsProfileMenuToggled(!isProfileMenuToggled);
    }
    return (
        <div id="profile">
            <div className="profile" onClick={toggleProfileMenu}>
                <div className="profile-pic">
                    <img src={img} alt="" />
                </div>
                <img src={Down} alt="" className={isProfileMenuToggled ? 'rotation' : ''}/>
            </div>
            <ProfileMenu isProfileMenuToggled={isProfileMenuToggled}/>
        </div>
    )
}

export default Profile;