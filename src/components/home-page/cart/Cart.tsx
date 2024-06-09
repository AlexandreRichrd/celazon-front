import CartCard from './cart-card/CartCard';
import './styles.scss'

import { getCartStore } from '../../../store/cart.store';
import { useEffect, useState } from 'react';
import { IProductInCart } from '../../../interfaces/product.interface';
import PrimaryButton from '@components/buttons/primary-btn/PrimaryBtn';
import { getProductStore } from '@store/product.store';
import { useNavigate } from 'react-router-dom';

interface ICartProps{
    isToggled: boolean;
}

const Cart = ({isToggled}: ICartProps) => {

    const cartStore = getCartStore();
    const navigate = useNavigate();

    const [cart, setCart] = useState<IProductInCart[]>(cartStore.cart);

    useEffect(() => {
        setCart(cartStore.cart);
    }, [cartStore.cart]);

    const renderProductsInCart = () => {
        return cart.map((product: IProductInCart) => (
            <CartCard item={product} />
        ));
    }

    const order = () => {
        
        navigate('/order');
    }

    return (
        <div id={isToggled ? 'cart-container' : 'no-cart-container'}>
            <h1>Cart</h1>
            <div className="main">
                {renderProductsInCart()}
                <PrimaryButton event={order}>Passer au paiement</PrimaryButton>
            </div>
        </div>
    );
}

export default Cart;