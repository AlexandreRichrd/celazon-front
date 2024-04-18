export interface IProduct {
    id: number;
    title: string;
    type: string;
    price: number;
    cover: string;
    brand: string;
    category: string;
    score: number;
    withdraw_time: number;
    purchase_amount: number;
    is_prime: boolean;
    is_number_one: boolean;
    created_at: Date;
    updated_at: Date;
}

export interface IBackOfficeProductTabHeader{
    name: string;
    hasInput: boolean;
    function?: (e: any) => void;
    placeholder?: string;
}

export interface IProductInCart {
    product: IProduct;
    quantity: number;
}

