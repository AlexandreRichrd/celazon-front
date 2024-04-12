import { useProductStore } from "../../store/product.store";
import ProductCard from "@components/products/product-card/ProductCard";
import './styles.scss'

const ProductPage  = () => {
    const productStore = useProductStore()
    const productList = productStore.products
    return (
        <div id="product-page">
            <div className="list-of-products">
                {productList.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}

export default ProductPage;