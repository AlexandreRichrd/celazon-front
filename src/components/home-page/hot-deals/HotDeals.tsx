import './styles.scss'


import ScrollBtn from './scroll-btn/ScrollBtn'
import ProductCard from '@components/products/product-card/ProductCard'
import { getProductStore } from '@store/product.store'
import { useState } from 'react'
import { getBrandStore } from '@store/brand.store'
import { getAuthStore } from '@store/auth.store'
import {  toast } from 'react-toastify'


const HotDeals = () => {
    const productStore = getProductStore()
    const brandStore = getBrandStore()
    const { currentUser } = getAuthStore()

    const productList = productStore.products

    const brandList = brandStore.brands


    const getbrand = (brandId: number) => {
        return brandList.find((brand) => brand.id === brandId)
    }

    const [scrollAmount, setScrollAmount] = useState(0)

    const scroll = (direction: string) => {
        if (direction === 'left') {
            setScrollAmount((prevScrollAmount) => Math.max(prevScrollAmount - 1, 0))
        } else {
            setScrollAmount((prevScrollAmount) => Math.min(prevScrollAmount + 1, productList.length - 1))
        }
    }

    const maxScroll = productList.length - 1
    const isLeftDisabled = scrollAmount === 0
    const isRightDisabled = scrollAmount >= maxScroll


    const handleFavorite = (productId: number) => {
        console.log(currentUser)
        if(currentUser){
            if(productStore.isFavorite(productId)){
                productStore.removeFavorite(productId, 1)
            }else{
                productStore.addFavorite(productId, 1)
            }
        }else{
            toast.error('Vous devez être connecté pour ajouter un produit à vos favoris')
        }
    }

    return (
        <div id="hot-deals">
            <header>
                <h2>Meilleures Offres</h2>
                <div className="navigation">
                    <ScrollBtn side="left" isDisabled={isLeftDisabled} CTA={() => scroll('left')} />
                    <ScrollBtn side="right" isDisabled={isRightDisabled} CTA={() => scroll('right')} />
                </div>
            </header>
            <main style={{ transform: `translateX(-${scrollAmount * 210}px)` }}>
                {productList.map((product) => (
                    <ProductCard key={product.id} product={product} isFavorite={(productStore.favoritesItems.includes(product.id) && (currentUser!==null))} brand={getbrand(product.brand_id)} sale={3} eventFavorite={handleFavorite}/>
                ))}
            </main>
        </div>
    )
}

export default HotDeals