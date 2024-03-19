import { createContext, useState, useContext, useEffect, useMemo } from "react";
import type { IProduct } from "../interfaces/product.interface";
import VanillaLatte from '../assets/images/product-cover/vanilla_latte.png'
import Espresso from '../assets/images/product-cover/espresso.png'
import HazelnutLatte from '../assets/images/product-cover/hazelnut_latte.png'

const coffeeList: IProduct[] = [
    {
        id: 1,
        name: 'Vanilla Latte',
        price: 4.5,
        description: 'Un latte à la vanille.',
        notation: 4.5,
        orderCount: 21023,
        cover: VanillaLatte,
        sizes: ['S', 'M', 'L'],
    },
    {
        id:2,
        name: 'Espresso',
        price: 3.5,
        description: 'Espresso simple et plein de malice.',
        notation: 4.5,
        orderCount: 12654,
        cover: Espresso,
        sizes: ['S', 'M', 'L'],
    },
    {
        id:3,
        name: 'Hazelnut Latte',
        price: 4.5,
        description: 'Un latte à la noisette.',
        notation: 4.5,
        orderCount: 23467,
        cover: HazelnutLatte,
        sizes: ['S', 'M', 'L'],
    }
]


export const useProductStore = () => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [ready, setReady] = useState<boolean>(false);

    const processProducts = useMemo(() => products && ready, [products, ready]);

    const fetchProducts = async (): Promise<void> => {
        setProducts(coffeeList);
        setReady(true);
    }

    useEffect(() => {
        fetchProducts();
    }, [])

    return {
        products,
        processProducts
    }
}

export type ProductStore = ReturnType<typeof useProductStore>;
export const ProductStoreContext = createContext<ProductStore>({} as ProductStore);

export const useProductStoreContext = () => useContext(ProductStoreContext);