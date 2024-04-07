import CartCard from './cart-card/CartCard';
import './styles.scss'

import { getCartStore } from '../../../store/cart.store';
import { useEffect, useState } from 'react';
import { IProductInCart } from '../../../interfaces/product.interface';



const Cart = () => {

    const cartStore = getCartStore();

    const [cart, setCart] = useState<IProductInCart[]>(cartStore.cart);

    useEffect(() => {
        setCart(cartStore.cart);
    }, [cartStore.cart]);

    const renderProductsInCart = () => {
        return cart.map((product: IProductInCart) => (
            <CartCard item={product} />
        ));
    }

    return (
        <div id="cart-container">
        <h1>Cart</h1>
            {renderProductsInCart()}
        </div>
    );
}

export default Cart;