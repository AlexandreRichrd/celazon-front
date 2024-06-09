import './styles.scss'
import type { IProduct } from '../../../interfaces/product.interface'
import { FC, useEffect, useState } from 'react';

import Like from '@assets/images/icon/like.svg'
import Liked from '@assets/images/icon/liked.svg'
import { IBrand } from '@interfaces/brand.interface';
import { Link } from 'react-router-dom';

interface IProductCardProps {
    product: IProduct;
    isFavorite: boolean | null;
    brand: IBrand | undefined;
    sale: number | undefined;
    eventFavorite: (id: number) => void
}

const ProductCard: FC<IProductCardProps> = ({product, isFavorite, brand, sale, eventFavorite}) => {
    const jourSemaine = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi']

    const [popClass, setPopClass] = useState('')

    useEffect(() => {
        if (isFavorite) {
          setPopClass('pop');
          setTimeout(() => setPopClass(''), 300); // Réinitialise la classe après l'animation
        }
      }, [isFavorite]);

    const getDayDelivery = (deliveryTime: number) => {
        const today = new Date()
        const deliveryDate = new Date(today)
        deliveryDate.setDate(today.getDate() + deliveryTime)

        return jourSemaine[deliveryDate.getDay()]
    }

    const reduceTitleSize = (title: string) => {
        if (title.length > 18) {
            return title.slice(0, 18) + '...'
        }
        return title
    }


    return (
        <div id="product-card">
            <div className="cover">
                <div className="like">
                    <img src={isFavorite ? Liked : Like} alt="" onClick={() => eventFavorite(product.id)} className={popClass}/>
                </div>
                <img src={product.cover} alt={product.title} className='product-cart-cover'/>
            </div>
            <div className="product-info">
                <div className="top">
                    <Link to={'/product/' + product.id} className='title'>{reduceTitleSize(product.title)}</Link>
                    <Link to={'/brand/' + brand?.id} className='brand'>{brand ? brand.name : ''}</Link>
                </div>
                <div className={sale ? 'sale' : 'price'}>
                    <p className='salePrice'>{sale}€</p>
                    <p className='initialPrice'>{product.price}€</p>
                </div>
                <p>Retrait GRATUIT <b>{getDayDelivery(product.withdraw_time)}</b></p>

            </div>
        </div>
    )
}

export default ProductCard;