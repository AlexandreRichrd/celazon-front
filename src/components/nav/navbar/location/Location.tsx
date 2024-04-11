import './styles.scss'

import { FC } from "react";
import LocationIcon from '@assets/images/icon/location.svg';


const Location: FC = () => {
    return (
        <div id="location">
            <div className="content">
                <div className="image">
                    <img src={LocationIcon} alt="location-logo" />
                </div>
                <div className="text">
                    <p>LP - CARREFOUR CITY</p>
                    <h4>Angers 49100</h4>
                </div>
            </div>
        </div>
    )
}

export default Location;