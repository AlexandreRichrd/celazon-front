import cartIcon from "../../../../../../assets/images/cart-blanc.svg"
import './styles.scss'

const CartIcon = () => {
    return (
        <div id="cart-icon-product-list">
            <img src={cartIcon} alt="" />
        </div>
    );
}

export default CartIcon;