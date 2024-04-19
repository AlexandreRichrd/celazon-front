import { createContext, useState, useContext, useEffect, useMemo } from "react";
import axios from "axios";
import type { IFullProduct, ICreationProduct } from "@interfaces/product.interface";







export const useProductStore = () => {
    const [products, setProducts] = useState<IFullProduct[]>([]);
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

    const createProduct = async (title: string, cover: string | null, brand_id: number, product_type_id: number, price: number): Promise<void> => {
        
        axios.post('http://localhost:3333/products', {
            title,
            cover,
            brand_id,
            product_type_id,
            price,
            withdraw_time: 0,
            purchase_amount: 0,
            is_number_one: false,
            is_prime: false
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(() => {
            fetchProducts();
        }).catch((error) => {
            console.error(error);
        });
    }



    useEffect(() => {
        fetchProducts();
    }, [])

    return {
        products,
        processProducts,
        createProduct
    }
}

export type ProductStore = ReturnType<typeof useProductStore>;
export const ProductStoreContext = createContext<ProductStore>({} as ProductStore);

export const getProductStore = () => useContext(ProductStoreContext);