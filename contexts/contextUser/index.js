import React, { createContext, useState, useContext, useEffect } from 'react'
import { ListUser } from '../../services/ServiceUser'

const ContextUser = createContext();

export default function UserProvider({ children }) {

    const [user, setUser] = useState([]);

    useEffect(() => {

        async function List() {
            const data = await ListUser();
            setUser(data);
        }
        List();

    }, []);

    async function GetList() {
        const data =  await ListUser();
        setUser(data);
    }

    return (
        <ContextUser.Provider
            value={{
                user,
                setUser,
                GetList
            }}
        >
            {children}
        </ContextUser.Provider>
    );

}

export function useContextUser() {
    const context = useContext(ContextUser);
    const { user, setUser, GetList } = context;
    return { user, setUser, GetList }
}