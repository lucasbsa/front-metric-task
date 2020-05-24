
import React from 'react'
import Layout from '../../components/Layout'
import BoardProvider from '../../contexts/contextBoard';
import DashboardListSprint from '../../components/Sprint/dashboardSprint'
import SprintProvider from '../../contexts/contextSprint';
import MenuSprint from '../../components/MenuSprint';


export default function DashboardSprints() {

    return (
        <>
            <Layout>
                <BoardProvider>
                    <SprintProvider>
                        <MenuSprint
                            showAddCollumn={true}
                        />
                        <DashboardListSprint />
                    </SprintProvider>
                </BoardProvider>
            </Layout>

        </>
    );

}

