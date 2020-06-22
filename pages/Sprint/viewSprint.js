
import React from 'react'
import Sprint from '../../components/Sprint'
import SprintProvider from '../../contexts/contextSprint';
import MenuSprint from '../../components/MenuSprint';
import Layout from '../../components/Layout';
import BoardProvider from '../../contexts/contextBoard';


export default function ListSprint() {

    return (
        <Layout>
            <BoardProvider>
                <SprintProvider>
                    <MenuSprint
                        showAddCollumn={false}
                    />
                    <Sprint />
                </SprintProvider>
            </BoardProvider>
        </Layout>
    );

}

