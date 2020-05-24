import { useContextUser } from '../../contexts/contextUser'
import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import tableIcons from '../../UI/icons'
import { DeleteUser, AddUser } from '../../services/ServiceUser'
import { DivListUser } from './style'


export default function ListUser() {

    const { user, setUser, GetList } = useContextUser();

    const [state] = useState({
        columns: [
            { title: 'Name', field: 'name' },
            { title: 'CPF', field: 'cpf', type: 'string' },
            { title: 'E-mail', field: 'email', type: 'string' },
            { title: 'Date Board', field: 'dataInclusao', type: 'date' },
            { title: 'Profile', field: 'profile', type: 'string' }        
        ],

    });

     function handleDelete(oldData) {
        const respose =  DeleteUser(oldData.idUser);
       
        GetList();
    }

     function handleAdd(newData) {
        const response =  AddUser(newData);
        GetList();
    }

    return (
        <DivListUser>
            <MaterialTable
                icons={tableIcons}
                title="List of Users"
                columns={state.columns}
                data={user}
                editable={{
                    onRowAdd: (newData) =>
                        new Promise((resolve) => {
                            setTimeout(() => {
                                resolve();
                            }, 3000);
                            handleAdd(newData);
                        }),
                    onRowUpdate: (newData, oldData) =>
                        new Promise((resolve) => {
                            setTimeout(() => {
                                resolve();
                                if (oldData) {
                                    setUser((prevState) => {
                                        const data = [...prevState];
                                        data[data.indexOf(oldData)] = newData;
                                        return { ...prevState, data };
                                    });
                                }
                            }, 600);
                        }),
                    onRowDelete: (oldData) =>
                        new Promise((resolve) => {
                            setTimeout(() => {
                                resolve();
                                handleDelete(oldData);
                            }, 1000);
                        }),
                }}
            />
        </DivListUser>
    )

}

