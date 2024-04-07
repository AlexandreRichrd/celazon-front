import { useState, useEffect, useMemo, createContext, useContext } from "react";

import { IUser } from "@interfaces/user.interface"




export const userList: IUser[] = [
    {
        id: 1,
        firstname: 'John',
        name: 'Doe',
        username: 'johndoe',
        email: 'john.doe@prout.fr',
        password: 'password',
        role: 'admin',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        id: 2,
        firstname: 'Jane',
        name: 'Doe',
        username: 'janedoe',
        email: 'jane.doe@prout.fr',
        password: 'password',
        role: 'user',
        createdAt: new Date(),
        updatedAt: new Date()
    }
]


export const useUserStore = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [ready, setReady] = useState<boolean>(false);

    const processUsers = useMemo(() => users && ready, [users, ready]);

    const fetchUsers = async (): Promise<void> => {
        setUsers(userList);
        setReady(true);
    }

    useEffect(() => {
        fetchUsers();
    }, [])

    return {
        users,
        processUsers
    }
}

export type UserStore = ReturnType<typeof useUserStore>;
export const UserStoreContext = createContext<UserStore>({} as UserStore);
export const getUserStore = () => useContext(UserStoreContext);