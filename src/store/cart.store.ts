import { useState, useEffect, useMemo, createContext, useContext } from "react";

import type { IProduct, IProductInCart } from "../interfaces/product.interface";


export const useCartStore = () => {
    const [cart, setCart] = useState<IProductInCart[]>([]);
    const [total, setTotal] = useState<number>(0);
    const [ready, setReady] = useState<boolean>(false);

    const processCart = useMemo(() => cart && ready, [cart, ready]);


    const addToCart = (product: IProduct, quantity: number): void => {
        setCart(currentCart => {
            const productIndex = currentCart.findIndex(p => p.product.id === product.id);
            if (productIndex >= 0) {
                const newCart = [...currentCart];
                newCart[productIndex] = {
                    ...newCart[productIndex],
                    quantity: newCart[productIndex].quantity + quantity
                };
                return newCart;
            } else {
                return [...currentCart, { product, quantity }];
            }
        });
       
    }

    const emptyCart = (): void => {
        setCart([]);
    }
    

    const removeFromCart = (product: IProduct): void => {
        const productInCart = cart.find(p => p.product.id === product.id);
        if (productInCart) {
            const index = cart.indexOf(productInCart);
            cart.splice(index, 1);
            setCart([...cart]);
        }
    }

    const updateQuantity = (product: IProduct, quantity: number): void => {
        const productInCart = cart.find(p => p.product.id === product.id);
        if (productInCart) {
            productInCart.quantity = quantity;
            setCart([...cart]);
        }
    }

    const calculateTotal = (): void => {
        const total = cart.reduce((acc, product) => acc + (product.product.price * product.quantity), 0);
        setTotal(total);
    }

    useEffect(() => {
        calculateTotal();
    }, [cart])

    useEffect(() => {
        setReady(true);
    }, [])

    return {
        cart,
        total,
        processCart,
        addToCart,
        removeFromCart,
        updateQuantity,
        emptyCart
    }
}

export type CartStore = ReturnType<typeof useCartStore>;
export const CartStoreContext = createContext<CartStore>({} as CartStore);
export const getCartStore = () => useContext(CartStoreContext);