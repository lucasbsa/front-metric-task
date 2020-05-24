
import React from 'react'
import Sprint from '../../components/Sprint'
import SprintProvider from '../../contexts/contextSprint';
import MenuSprint from '../../components/MenuSprint';
import Layout from '../../components/Layout';

export default function ListSprint() {

    return (
        <Layout>
            <SprintProvider>
                <MenuSprint
                showAddCollumn = {false}
                />
                <Sprint/>
            </SprintProvider>
        </Layout>
    );

}

