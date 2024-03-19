import logo from '../../../assets/images/cart.svg'
import './styles.scss'

interface IconProps {
    event: () => void;
}

const CartIcon = (props: IconProps) => {
    return(
        <img src={logo} alt="cart" id="cart" onClick={props.event}/>
    )
}

export default CartIcon