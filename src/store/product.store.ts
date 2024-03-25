import { createContext, useState, useContext, useEffect, useMemo } from "react";
import type { IProduct } from "../interfaces/product.interface";
import VanillaLatte from '../assets/images/product-cover/vanilla_latte.png'
import Espresso from '../assets/images/product-cover/espresso.png'
import HazelnutLatte from '../assets/images/product-cover/hazelnut_latte.png'
import CafeGlace from '../assets/images/product-cover/cafe-glace.webp'
import Cafe from '../assets/images/product-cover/cafe.jpg'
import Chocolat from '../assets/images/product-cover/chocolat.jpg'
import ChocolatFat from '../assets/images/product-cover/chocolat-fat.jpg'
import axios from "axios";

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
    },
    {
        id: 4,
        name: 'Café Glacé',
        price: 5.5,
        description: 'Un café glacé pour les journées chaudes.',
        notation: 4,
        orderCount: 15023,
        cover: CafeGlace,
        sizes: ['S', 'M', 'L']
    },
    {
        id: 5,
        name: 'Café classique',
        price: 3.5,
        description: 'Un café classique.',
        notation: 4.5,
        orderCount: 30345,
        cover: Cafe,
        sizes: ['S', 'M', 'L']
    },
    {
        id: 6,
        name: 'Chocolat chaud',
        price: 4.5,
        description: 'Un chocolat chaud pour les journées froides.',
        notation: 4.5,
        orderCount: 23456,
        cover: Chocolat,
        sizes: ['S', 'M', 'L']
    },
    {
        id: 7,
        name: 'Chocolat chaud extra',
        price: 5.5,
        description: 'Un chocolat chaud pour les petits gourmands.',
        notation: 4.5,
        orderCount: 23456,
        cover: ChocolatFat,
        sizes: ['S', 'M', 'L']
    
    }
]


export const useProductStore = () => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [ready, setReady] = useState<boolean>(false);

    const processProducts = useMemo(() => products && ready, [products, ready]);

    const fetchProducts = async (): Promise<void> => {
        axios.get('http://localhost:3333/products', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then((response) => {
            setProducts(response.data);
            setReady(true);
        }).catch((error) => {
            console.error(error);
        });
    }

    const getHottestProducts = (limit: number): IProduct[] => {
        return sortProductsByOrderCount().slice(0, limit);
    }

    const sortProductsByOrderCount = (): IProduct[] => {
        return products.sort((a, b) => b.orderCount - a.orderCount);
    }

    useEffect(() => {
        fetchProducts();
    }, [])

    return {
        products,
        processProducts,
        getHottestProducts
    }
}

export type ProductStore = ReturnType<typeof useProductStore>;
export const ProductStoreContext = createContext<ProductStore>({} as ProductStore);

export const useProductStoreContext = () => useContext(ProductStoreContext);