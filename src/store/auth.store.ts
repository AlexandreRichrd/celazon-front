import { useState, useEffect, useMemo, createContext, useContext } from 'react';
import type { ICreadentials, IUser } from '../interfaces/user.interface';
import { userList } from './user.store';


export const useAuthStore = () => {
    const [auth, setAuth] = useState<boolean>(false);
    const [ready, setReady] = useState<boolean>(false);
    const [currentUSer, setCurrentUser] = useState<IUser | null>(null);

    const processAuth = useMemo(() => auth && ready, [auth, ready]);

    const setAuthentication = (credentials: ICreadentials) => {
        const user = userList.find(user => user.username === credentials.username && user.password === credentials.password);
        if (user) {
            setCurrentUser(user);
            setAuth(true);
            setReady(true);
        }
        return ready;
    }


    useEffect(() => {
        if (currentUSer) {
            setAuth(true);
            setReady(true);
        }
    }, [currentUSer])

    return {
        auth,
        processAuth,
        currentUSer,
        setAuthentication
    }
}

export type AuthStore = ReturnType<typeof useAuthStore>;
export const AuthStoreContext = createContext<AuthStore>({} as AuthStore);

export const useAuthStoreContext = () => useContext(AuthStoreContext);