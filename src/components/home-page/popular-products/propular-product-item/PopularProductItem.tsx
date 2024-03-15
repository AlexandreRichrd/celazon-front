import CartIcon from './utils/cart-icon/CartIcon';
import TemperatureCard from './utils/temperature/TemperatureCard';


interface ICoffee{
    id: number
    name: string
    notation: number
    orderCount: number
    cover: string
}

interface IPopularProductItemProps{
    coffee: ICoffee
}

import './styles.scss'


const PopularProductItem = (props: IPopularProductItemProps) => {
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
                    <CartIcon/>
                </div>
            </div>
        </div>
    );
}

export default PopularProductItem;