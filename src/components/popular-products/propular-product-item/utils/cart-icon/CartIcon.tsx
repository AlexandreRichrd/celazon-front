import cartIcon from "../../../../../assets/images/cart-blanc.svg"
import './styles.scss'

interface ICartIconProps{
    event: () => void
}

const CartIcon = (props: ICartIconProps) => {
    return (
        <div id="cart-icon-product-list" onClick={props.event}>
            <img src={cartIcon} alt="" />
        </div>
    );
}

export default CartIcon;