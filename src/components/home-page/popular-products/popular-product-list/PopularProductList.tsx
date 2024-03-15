import './styles.scss'
import PopularProductItem from '../propular-product-item/PopularProductItem';
import VanillaLatte from '../../../../assets/images/product-cover/vanilla_latte.png'
import Espresso from '../../../../assets/images/product-cover/espresso.png'
import HazelnutLatte from '../../../../assets/images/product-cover/hazelnut_latte.png'

interface ICoffee{
    id: number
    name: string
    notation: number
    orderCount: number
    cover: string
}

const PopularProductList = () => {

    const coffeeList: ICoffee[] = [
        {
            id: 1,
            name: 'Vanilla Latte',
            notation: 4.5,
            orderCount: 21023,
            cover: VanillaLatte
        },
        {
            id:2,
            name: 'Espresso',
            notation: 4.5,
            orderCount: 12654,
            cover: Espresso
        },
        {
            id:3,
            name: 'Hazelnut Latte',
            notation: 4.5,
            orderCount: 23467,
            cover: HazelnutLatte
        }
    ]
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