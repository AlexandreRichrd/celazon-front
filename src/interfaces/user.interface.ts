import { IProduct } from "./product.interface";

export interface IUser {
    id: number;
    firstname: string;
    name: string;
    username: string;
    email: string;
    password: string;
    role: string;
    createdAt: Date;
    updatedAt: Date;
    cart?: IProduct[];
}

export interface ICreadentials {
    username: string;
    password: string;
}
