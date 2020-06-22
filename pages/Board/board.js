import React, { useState } from 'react';
import Layout from '../../components/Layout';
import BoardProvider from '../../contexts/contextBoard';
import DashBoard from '../../components/Board'
import MenuProvider from '../../contexts/contextMenu';

export default function PageBoard() {
    return (

        <Layout>
            <BoardProvider>
                <DashBoard />
            </BoardProvider>
        </Layout>
    );
}








