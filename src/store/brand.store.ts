import type { IBrand } from "@interfaces/brand.interface";
import axios from "axios";
import { useState, useContext, useMemo, createContext, useEffect } from "react";

export const useBrandStore = () => {
    const [brands, setBrands] = useState<IBrand[]>([]);
    const [ready, setReady] = useState<boolean>(false);

    const processBrands = useMemo(() => brands && ready, [brands, ready]);

    const fetchBrands = async (): Promise<void> => {
        axios.get('http://localhost:3333/brands', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then((response) => {
            setBrands(response.data);
            setReady(true);
        }).catch((error) => {
            console.error(error);
        });
    }

    useEffect(() => {
        fetchBrands();
    }, [])

    return {
        brands,
        processBrands
    }
}

export type BrandStore = ReturnType<typeof useBrandStore>;
export const BrandStoreContext = createContext<BrandStore>({} as BrandStore);

export const getBrandStore = () => useContext(BrandStoreContext);