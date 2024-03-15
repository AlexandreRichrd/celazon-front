import './styles.scss'
import PopularProductList from './popular-product-list/PopularProductList';

const PopularProducts = () => {
    return (
        <div id='popular-products'>
            <h1>Les Buzz <em>Caf'</em></h1>
            <PopularProductList />
        </div>
    );
}

export default PopularProducts;