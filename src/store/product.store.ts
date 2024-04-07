import { createContext, useState, useContext, useEffect, useMemo } from "react";
import axios from "axios";
import type { IProduct } from "@interfaces/product.interface";


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

export const getProductStore = () => useContext(ProductStoreContext);