import type {IBrand} from "@interfaces/brand.interface";

export interface IProduct {
    id: number;
    brand_id: number;
    product_type_id: number;
    title: string;
    price: number;
    cover: string;
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

export interface IFullProduct extends IProduct{
    brand: IBrand;
    productType: string;
}

export interface ICreationProduct{
    title: string,
    cover: string | null,
    brand_id: number,
    product_type_id: number,
    price: number
    withdraw_time: number,
    purchase_amount: number,
    is_number_one: boolean,
    is_prime: boolean
}
