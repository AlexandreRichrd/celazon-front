import { useParams } from 'react-router-dom';
import './styles.scss';
import { getProductStore } from '@store/product.store';
import { useEffect } from 'react';
import ProductCard from '@components/products/product-card/ProductCard';
import { getBrandStore } from '@store/brand.store';

const CategoryPage = () => {
    const { id } = useParams();
    const { getByCategory, currentCategory, currentCategoryProducts } = getProductStore();
    const {brands} =getBrandStore()

    
    useEffect(() => {
        getByCategory(Number(id));
    }, [id]);

    const getbrand = (brandId: number) => {
        return brands.find((brand) => brand.id === brandId)
    }

    return (
        <div id="category-page">
            <h1>Category: {currentCategory}</h1>
            <div className="products">
                {currentCategoryProducts.length > 0 ? (
                    currentCategoryProducts.map((product) => (
                        <ProductCard key={product.basicInfos.id} product={product.basicInfos} isFavorite={false} brand={getbrand(product.basicInfos.brand_id)} sale={3}/>
                    ))
                ) : (
                    <p>No products found</p>
                )}
            </div>
        </div>
    );
};

export default CategoryPage;
