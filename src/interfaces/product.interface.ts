export interface IProduct {
    id: number;
    title: string;
    type: string;
    price: number;
    cover: string;
    withdraw_time: number;
    purchase_amount: number;
    is_prime: boolean;
    is_number_one: boolean;
    created_at: Date;
    updated_at: Date;
}

export interface IProductInCart {
    product: IProduct;
    quantity: number;
}

