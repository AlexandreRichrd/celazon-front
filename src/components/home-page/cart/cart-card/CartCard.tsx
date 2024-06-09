import './styles.scss'
import { IProductInCart } from '../../../../interfaces/product.interface';
import { Link } from 'react-router-dom';

interface ICartCardProps {
    item: IProductInCart
}

const CartCard = ({item}: ICartCardProps) => {
    return (
        <div id="cart-card">
            <img src={item.product.cover} alt="" />
            <div className="infos-cart-product">
                <div className="top">
                    <Link to={'/product/' + item.product.id}>{item.product.title}</Link>
                </div>
                <div className="quantity">
                    <p>{item.quantity}</p>
                </div>
            </div>
            <div className="price">
                <p>{item.product.price * item.quantity}€</p>
            </div>
        </div>
    );
}

export default CartCard;