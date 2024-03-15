import './styles.scss'
import cafeImage from '../../assets/images/img-hero.png'
import PrimaryButtonIcon from '../../components/buttons/primary-btn-icon';
import TransparentButton from '../../components/buttons/transparent-button';
import whiteCart from '../../assets/images/cart-blanc.svg'

import PopularProducts from '../../components/home-page/popular-products/PopularProducts';

import { SECONDARY_SLOGAN } from '../../wording/homePage';

const HomePage = () => {
    return (
        <div id="home-page">
            <div className="first-container">
                <div className="title-part">
                    <h1>Le <em>café</em>, première étape de votre journée.</h1>
                    <p>{SECONDARY_SLOGAN}</p>
                    <div className="buttons-part">
                        <PrimaryButtonIcon icon={whiteCart}>Commander</PrimaryButtonIcon>
                        <TransparentButton>En savoir plus</TransparentButton>
                    </div>
                </div>
                <img src={cafeImage} alt="cafe" id="cafe-image"/>
            </div>
            <PopularProducts />
        </div>
    );
}

export default HomePage;