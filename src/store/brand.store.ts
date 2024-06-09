import type { IBrand } from "@interfaces/brand.interface";
import axios from "axios";
import { useState, useContext, useMemo, createContext, useEffect } from "react";

export const useBrandStore = () => {
    const [brands, setBrands] = useState<IBrand[]>([]);
    const [ready, setReady] = useState<boolean>(false);
    const [currentBrand, setCurrentBrand] = useState<IBrand>()

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

    const getBrandById = async (id: number) => {
        if(brands.length === 0){
            await fetchBrands()
        }
        setCurrentBrand(brands.find((brand) => brand.id === id))
    }

    const createBrand = (name: string, cover: string | null, user_id: number) => {
        console.log(name, cover, user_id);
        axios.post('http://localhost:3333/brands', {
            name,
            cover,
            user_id
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(() => {
            fetchBrands();
        }).catch((error) => {
            console.error(error);
        });
        return brands;
    }

    useEffect(() => {
        fetchBrands();
    }, [])

    return {
        brands,
        processBrands,
        createBrand,
        getBrandById,
        currentBrand
    }
}

export type BrandStore = ReturnType<typeof useBrandStore>;
export const BrandStoreContext = createContext<BrandStore>({} as BrandStore);

export const getBrandStore = () => useContext(BrandStoreContext);