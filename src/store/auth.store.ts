import { useState, useEffect, useMemo, createContext, useContext } from 'react';
import type { ICreadentials, IUser } from '../interfaces/user.interface';
import type { IRegisterPayload, IValidateCodePayload } from '@interfaces/payload.interface';
import { userList } from './user.store';
import axios from 'axios';


export const useAuthStore = () => {
    const [auth, setAuth] = useState<boolean>(false);
    const [ready, setReady] = useState<boolean>(false);
    const [currentUser, setCurrentUser] = useState<IUser | null>(null);
    const [token, setToken] = useState<string | null>(null);
    const [additionalUserInfos, setAdditionalUserInfos] = useState<any>(null);

    const processAuth = useMemo(() => auth && ready, [auth, ready]);

    const checkLocalStorage = () => {
        const token = localStorage.getItem('token');
        if (token) {
            setToken(token);
            setAuth(true);
            setReady(true);
        }
    }

    const setAuthentication = async (credentials: ICreadentials) => {
        const res = await axios.post('http://localhost:3333/auth/login', {
            username: credentials.username,
            password: credentials.password
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then((result) => {
            return result.data;
        }
        ).catch((error) => {
            console.error(error);
        });
        if (res.status == 200) {
            setCurrentUser(res.user);
            setAuth(true);
            setToken(res.value);
            localStorage.setItem('token', res.value);
            setReady(true);
            localStorage.setItem('user_id', res.user.id.toString());
            const additional = await axios.get(`http://localhost:3333/additional_user_infos/${res.user.id}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }).then((result) => {
                return result.data;
            }).catch((error) => {
                console.error(error);
            });
            setAdditionalUserInfos(additional);
            return true;
        }
        return false;
    }

    const register = async (payload: IRegisterPayload) => {
        
        const res: any = await axios.post('http://localhost:3333/auth/register', {
            username: payload.username,
            email: payload.email,
            password: payload.password
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then((result) => {
            return result.data;
        }).catch((error) => {
            console.error(error);
        });
        if(!res.status){
            return false;
        }
        const userId = res.userId[0];
        console.log(userId)
        const result = await axios.post('http://localhost:3333/code/generate', {
            user_id : userId
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(() => {
            return true;
        }).catch((error) => {
            console.error(error);
            return false;
        });
        return {status: result, user_id: userId};
    }

    const validateValidationCode = async (payload: IValidateCodePayload) => {
        const res = await axios.post('http://localhost:3333/code/verify', {
            code: payload.code,
            user_id: payload.user_id
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then((result) => {
            return result.data;
        }).catch((error) => {
            console.error(error);
        });
        return res
    }

    const disconnect = () => {
        setAuth(false);
        setToken(null);
        localStorage.removeItem('token');
        setCurrentUser(null);
    }


    const resetPassword = async (email: string) => {
        const res = await axios.post('http://localhost:3333/auth/reset', {
            email: email
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then((result) => {
            return result.data;
        }).catch((error) => {
            console.error(error);
        });

        console.log(res);
    }

    const codeExists = async (code: string | undefined) => {
        if(!code) return false;
        return await axios.post('http://localhost:3333/auth/codeExists', {
                code
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }).then((result) => {
                return result.data;
            }).catch((error) => {
                console.error(error);
            });

    }

    const updatePassword = async (password: string, code: string) => {
        const res = await axios.post('http://localhost:3333/auth/changePassword', {
            password,
            code
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then((result) => {
            return result.data;
        }).catch((error) => {
            console.error(error);
        });
        return res;
    }

    useEffect(() => {
        if (currentUser) {
            setAuth(true);
            setReady(true);
        }
    }, [currentUser])

    return {
        auth,
        processAuth,
        currentUser,
        token,
        setAuthentication,
        register,
        checkLocalStorage,
        validateValidationCode,
        disconnect,
        resetPassword,
        codeExists,
        updatePassword,
        additionalUserInfos
    }
}

export type AuthStore = ReturnType<typeof useAuthStore>;
export const AuthStoreContext = createContext<AuthStore>({} as AuthStore);

export const getAuthStore = () => useContext(AuthStoreContext);