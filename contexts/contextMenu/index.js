import React, { createContext, useState, useEffect, useContext } from 'react'

import { ListUser } from '../../services/ServiceUser'


const ContextMenu = createContext();

export default function MenuProvider({ children }) {

    const [usersList, setUsersList] = useState([]);

    const [showModalSelectUser, setShowModalSelectUser] = useState(false);

    useEffect(() => {

        ListUser().then(resp => {
            const list = resp;
            setUsersList(list);
        })
    }, [])


    function handleCloseModalSelectUser() { setShowModalSelectUser(false) };

    function handleShowModalSelectUser() { 
        setShowModalSelectUser(true) }

        ;

    return (

        <ContextMenu.Provider
            value=
            {{
                usersList,
                setUsersList,
                showModalSelectUser,
                handleCloseModalSelectUser,
                handleShowModalSelectUser,
            }}
        >
            {children}

        </ContextMenu.Provider>
    );
}

export function useContextMenu() {

    const context = useContext(ContextMenu);

    const {
        usersList,
        setUsersList,
        showModalSelectUser,
        handleCloseModalSelectUser,
        handleShowModalSelectUser,
    } = context;

    return {
        usersList,
        setUsersList,
        showModalSelectUser,
        handleCloseModalSelectUser,
        handleShowModalSelectUser,
    }
}