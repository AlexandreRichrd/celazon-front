export interface IRegisterPayload {
    username: string;
    email: string;
    password: string;
}

export interface ILoginPayload {
    username: string;
    password: string;
}

export interface IValidateCodePayload {
    code: string;
    user_id: number;
}