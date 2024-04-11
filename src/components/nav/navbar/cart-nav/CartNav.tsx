import { FC } from 'react';
import './styles.scss'

import ShoppingIcon from '@assets/images/icon/shopping-cart.svg'

const CartNav: FC = () => {
    return(
        <div id="cart-nav">
            <span className='cart-count'>2</span>
            <img src={ShoppingIcon} alt="shopping-cart-icon" />
            <h4>Panier</h4>
        </div>
    )
}

export default CartNav;