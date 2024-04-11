import './styles.scss'

import { FC } from "react";

const Profile: FC = () => {
    return (
        <div id="profile">
            <div className="text">
                <p>Bonjour John</p>
                <div className="bot">
                    <h4>Compte et liste</h4>
                    <div className="triangle-bas"></div>
                </div>
            </div>
        </div>
    )
}

export default Profile;