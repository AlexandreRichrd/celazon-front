import { useProductStore } from "../../store/product.store";
import PopularProductItem from "../../components/popular-products/propular-product-item";
import './styles.scss'

const ProductPage  = () => {
    const productStore = useProductStore()
    const productList = productStore.products
    return (
        <div id="product-page">
            <div className="list-of-products">
                {productList.map((product) => (
                    <PopularProductItem coffee={product} />
                ))}
            </div>
        </div>
    )
}

export default ProductPage;