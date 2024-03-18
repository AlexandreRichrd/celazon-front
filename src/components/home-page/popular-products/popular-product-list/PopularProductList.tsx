import './styles.scss'
import PopularProductItem from '../propular-product-item/PopularProductItem';
import VanillaLatte from '../../../../assets/images/product-cover/vanilla_latte.png'
import Espresso from '../../../../assets/images/product-cover/espresso.png'
import HazelnutLatte from '../../../../assets/images/product-cover/hazelnut_latte.png'
import { useProductStore } from '../../../../store/product.store';
import { IProduct } from '../../../../interfaces/product.interface';

interface ICoffee{
    id: number
    name: string
    notation: number
    orderCount: number
    cover: string
}

const PopularProductList = () => {

    const coffeeList: IProduct[] = useProductStore().products;
    console.log(coffeeList)
    return (
        <div id='popular-product-list'>
            {coffeeList.map((coffee: ICoffee) => {
                return <PopularProductItem key={coffee.id} coffee={coffee}/>
            }
            )}
        </div>
    );
}

export default PopularProductList;