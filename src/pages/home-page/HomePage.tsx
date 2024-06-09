import './styles.scss'

import TerciaryButton from '@components/buttons/terciary-btn';
import Categories from '@components/home-page/categories';
import HotDeals from '@components/home-page/hot-deals';


const HomePage = () => {
    return (
        <div id="home-page">
            <div className="main">
                <div className="left-part">
                    <p>Découvrez les meilleures promotions du jour</p>
                    <TerciaryButton text="Voir les promotions" CTA={() => console.log('Voir les promotions')} />
                </div>
            </div>
            <Categories />
            <HotDeals />
        </div>
    );
}

export default HomePage;