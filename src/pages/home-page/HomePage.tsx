import './styles.scss'
import cafeImage from '../../assets/images/img-hero.png'

const HomePage = () => {
    return (
        <div id="home-page">
            <h1>Home Page</h1>
            <img src={cafeImage} alt="cafe" id="cafe-image"/>
        </div>
    );
}

export default HomePage;