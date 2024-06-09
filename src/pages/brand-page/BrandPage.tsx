import { useParams } from 'react-router-dom';
import './styles.scss';
import { getBrandStore } from '@store/brand.store';
import { useEffect, useState } from 'react';
import { getProductStore } from '@store/product.store';
import ProductCard from '@components/products/product-card';

const BrandPage = () => {
    const brandId = useParams().id;
    const { brands, fetchBrands } = getBrandStore();
    const [brand, setBrand] = useState<any>();

    const { products } = getProductStore();

    useEffect(() => {
        fetchBrands();
    }, [fetchBrands]);

    useEffect(() => {
        if (brandId) {
            const foundBrand = brands.find((brand) => brand.id === Number(brandId));
            setBrand(foundBrand);
        }
    }, [brandId, brands]);

    return (
        <div>
            <h1>Category: {brand?.name}</h1>
            <div className="products">
                {products.filter(p => Number(brandId) === p.brand_id).map((product) => (
                    <ProductCard key={product.id} product={product} isFavorite={false} brand={brand} />
                ))}
                {products.filter(p => Number(brandId) === p.brand_id).length === 0 && (
                    <p>No products found</p>
                )}
            </div>
        </div>
    );
}

export default BrandPage;
