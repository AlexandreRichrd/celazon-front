import CartIcon from './utils/cart-icon/CartIcon';
import TemperatureCard from './utils/temperature/TemperatureCard';

interface IPopularProductItemProps{
    coffee: IProduct
}

import './styles.scss'
import { useCartStore } from '../../../../store/cart.store';
import { IProduct } from '../../../../interfaces/product.interface';


const PopularProductItem = (props: IPopularProductItemProps) => {

    const cardStore = useCartStore();

    const addToCart = (product: IProduct, quantity: number) => {
        
        cardStore.addToCart(product, quantity);
    }

    return (
        <div id='popular-product-item'>
            <div id="product-item">
                <img src={props.coffee.cover} alt={props.coffee.name} className='img-coffee'/>
                <div className='product-info'>
                    <h5>{props.coffee.name}</h5>
                    <h5>{Math.floor(props.coffee.orderCount/1000)}k</h5>
                </div>
                <div className="bottom-container">
                    <div className='temperature-cards'>
                        <TemperatureCard temperature='chaud' isactive={true}/>
                        <TemperatureCard temperature='froid'/>
                    </div>
                    <CartIcon event={() => addToCart(props.coffee, 1)}/>
                </div>
            </div>
        </div>
    );
}

export default PopularProductItem;