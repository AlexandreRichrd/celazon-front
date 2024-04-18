export interface IBrand{
    id: number;
    name: string;
    cover?: string;
    created_at: Date;
    updated_at: Date;
}

export interface IBackOfficeBrand{
    id: number;
    name: string;
    cover?: string;
}