import React from 'react';
import Layout from '../../components/Layout';
import ListUser from '../../components/User/list';
import UserProvider from '../../contexts/contextUser';
import MenuProvider from '../../contexts/contextMenu';


export default function PageListUser({ children }) {
    return (
            <Layout>
                <UserProvider>
                    <ListUser/>
                </UserProvider>
            </Layout>
    );

}

