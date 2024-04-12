import './styles.scss'
import type { IProduct } from '../../../interfaces/product.interface'
import { FC } from 'react';

interface IProductCardProps {
    product: IProduct;
}

const ProductCard: FC<IProductCardProps> = ({product}) => {
    const jourSemaine = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi']

    const getDayDelivery = (deliveryTime: number) => {
        const today = new Date()
        const deliveryDate = new Date(today)
        deliveryDate.setDate(today.getDate() + deliveryTime)

        return jourSemaine[deliveryDate.getDay()]
    }


    return (
        <div id="product-card">
            <img src={product.cover} alt={product.title} className='product-cart-cover'/>
            <div className="product-info">
                <h3>{product.title}</h3>
                <p>{product.price}</p>
                <p>{product.is_prime}</p>
                <p>Retrait GRATUIT <b>{getDayDelivery(product.withdraw_time)}</b></p>

            </div>
        </div>
    )
}

export default ProductCard;