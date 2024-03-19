import './styles.scss'
import VanillaLatte from '../../../../assets/images/product-cover/vanilla_latte.png'
import { IProductInCart } from '../../../../interfaces/product.interface';

interface ICartCardProps {
    item: IProductInCart
}

const CartCard = (props: ICartCardProps) => {
    return (
        <div id="cart-card">
            <img src={VanillaLatte} alt="" />
            <div className="infos-cart-product">
                <div className="top">
                    <h3>Vanilla Latte</h3>
                    <div className="size">
                        <p><em>Size :</em></p>
                        <p>M</p>
                    </div>
                </div>
                <div className="quantity">
                    <p>1</p>
                </div>
            </div>
            <div className="price">
                <p>3,50€</p>
            </div>
        </div>
    );
}

export default CartCard;