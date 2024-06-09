import { FC, useState } from 'react';
import './styles.scss'
import Cart from '@components/home-page/cart/Cart';

import ShoppingIcon from '@assets/images/icon/icon _shopping.svg'

const CartNav: FC = () => {
    const [isCartToggled, setIsCartToggled] = useState(false);

    const handleCart = () => {
        setIsCartToggled(!isCartToggled);
    }

    return(
        <div>
            <div id="cart-nav" onClick={handleCart}>
                <img src={ShoppingIcon} alt="shopping-cart-icon" />
            </div>
            <Cart isToggled={isCartToggled}/>
        </div>
    )
}

export default CartNav;