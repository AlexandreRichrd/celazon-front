import { createContext, useState, useContext, useEffect, useMemo } from "react";
import axios from "axios";
import type { IFullProduct } from "@interfaces/product.interface";
import { getAuthStore } from "./auth.store";


export const useProductStore = () => {
    const [products, setProducts] = useState<IFullProduct[]>([]);
    const [favoritesItems, setFavoritesItems] = useState<number[]>([]);
    const [currentCategory, setCurrentCategory] = useState<string>('')
    const [currentCategoryProducts, setCurrentCategoryProducts] = useState<any[]>([])
    const [currentProduct, setCurrentProduct] = useState<any | undefined>()
    const [traffic, setTraffic] = useState<any>([])
    const [ready, setReady] = useState<boolean>(false);
    const { currentUser } = getAuthStore()

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
        console.log('currentUSer: ' + currentUser)
        if(currentUser){
            getFavorites(currentUser.id);
        }
        getTraffic();
    }

    const getTraffic = async (): Promise<void> => {
        const res = await axios.get('http://localhost:3333/traffic', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then((response) => {
            return response.data
        }).catch((error) => {
            console.error(error);
        })
        setTraffic(res)
    }

    const getById = async (id: number): Promise<IFullProduct | undefined> => {
        if(products.length === 0){
            await fetchProducts();
        }
        return products.find((product) => product.id === id);
    }

    const getFavorites = async (userId: number): Promise<void> => {
        axios.get(`http://localhost:3333/favorites/${userId}`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then((response) => {
            setFavoritesItems(response.data.map((item: any) => item.product_id));
            console.log(response.data)
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

    const addFavorite = async (product_id: number, userId: number): Promise<void> => {
        
        axios.post('http://localhost:3333/favorites', {
            product_id,
            user_id: userId
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

    const removeFavorite = async (product_id: number, userId: number): Promise<void> => {
        axios.delete(`http://localhost:3333/favorites/${product_id}/${userId}`, {
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

    const isFavorite = (product_id: number): boolean => {
        return favoritesItems.includes(product_id);
    }


    const getByCategory = async (product_type_id: number): Promise<boolean> => {
        const result = await axios.post('http://localhost:3333/products/getByCategory', {
            product_type_id
        },{
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then((result) => {
            return result.data
        }).catch((err) => {
            console.error(err)
        })


        
        if(result && result.categoryName && Array.isArray(result.products)){
            setCurrentCategory(result.categoryName)
            setCurrentCategoryProducts(result.products)     
            return true
        }

        return false
    }

    const getProductDetail = async (id: number): Promise<void> => {
        const result = await axios.post('http://localhost:3333/products/getProductDetails', {
            product_id: id
        },{
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then((result) => {
            return result.data
        }).catch((err) => {
            console.error(err)
        })

        console.log(result)
        
        if(result && result.product){
            setCurrentProduct(result)
        }
    }

    const order = async (products: any[], user_id: number) => {
        const res = await axios.post('http://localhost:3333/orders', {
            user_id,
            products,
            status: 'pending'
        },{
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(() => {
            fetchProducts();
            return true
        }).catch((err) => {
            console.error(err)
        })
        console.log(res)
        return res
    }

    const applySold = (product_id: number, price: number) => {
        alert('apply sold')
    }

    const getProductBrand = (brand_id: number) => {
    }



    useEffect(() => {
        fetchProducts();
    }, [])

    return {
        products,
        favoritesItems,
        processProducts,
        createProduct,
        addFavorite,
        removeFavorite,
        isFavorite,
        getByCategory,
        currentCategory,
        currentCategoryProducts,
        getById,
        currentProduct,
        getProductDetail,
        fetchProducts,
        traffic,
        order,
        applySold,
        getProductBrand
    }
}

export type ProductStore = ReturnType<typeof useProductStore>;
export const ProductStoreContext = createContext<ProductStore>({} as ProductStore);

export const getProductStore = () => useContext(ProductStoreContext);