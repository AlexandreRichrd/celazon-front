import { useParams } from 'react-router-dom';
import './styles.scss';
import { getProductStore } from '@store/product.store';
import { useEffect, useState } from 'react';
import { getBrandStore } from '@store/brand.store';
import PrimaryBtn from '@components/buttons/primary-btn';
import { getCartStore } from '@store/cart.store';

const ProductDetailPage = () => {
    const { id } = useParams<{ id: string }>();

    const { currentProduct, getProductDetail } = getProductStore();
    const { brands } = getBrandStore();
    const { addToCart } = getCartStore()

    const getBrand = (id: number) => {
        if (brands.length === 0) {
            return;
        }
        return brands.find((brand) => brand.id === id)?.name;
    };

    useEffect(() => {
        getProductDetail(Number(id));
    }, [id]);

    if (!currentProduct || !currentProduct.product) {
        return <div>Loading...</div>;
    }

    return (
        <div id="product-detail-page">
            <img src={currentProduct.product.cover} alt="" />
            <div className="right-part">
                <h1>{currentProduct.product.title}</h1>
                <h4>{getBrand(currentProduct.product.brand_id)}</h4>
                <p>{currentProduct.product.price} €</p>
                <div className="sizes">
                    <p>Tailles:</p>
                    {currentProduct.productDetail.size}
                </div>
                <PrimaryBtn event={() => addToCart(currentProduct.product, 1)}>Ajouter au panier</PrimaryBtn>
            </div>
        </div>
    );
};

export default ProductDetailPage;
