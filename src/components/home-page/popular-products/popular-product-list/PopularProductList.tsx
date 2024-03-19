import './styles.scss'
import PopularProductItem from '../propular-product-item/PopularProductItem';
import { useProductStore } from '../../../../store/product.store';
import { IProduct } from '../../../../interfaces/product.interface';


const PopularProductList = () => {

    const coffeeList: IProduct[] = useProductStore().products;
    return (
        <div id='popular-product-list'>
            {coffeeList.map((coffee: IProduct) => {
                return <PopularProductItem key={coffee.id} coffee={coffee}/>
            }
            )}
        </div>
    );
}

export default PopularProductList;