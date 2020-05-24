import React from 'react'
import axios from 'axios';



const api = { baseURL: 'http://localhost:59413/api/' }


export const DeleteUser =  (IdUser) => {

    axios.post('http://localhost:59413/api/User/DeleteUser?IdUser=' + IdUser)
        .then(res => {
           return res.data;
        })

}

export async function ListUser(){
     const users = await axios.get('http://localhost:59413/api/User/GetListUser')
        return  users.data;
}


    export const AddUser =  (user) => {
        axios.post('http://localhost:59413/api/User/AddUser', user)
            .then(res => {
                return res.data;
            })

    }
