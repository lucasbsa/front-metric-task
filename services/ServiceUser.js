import React from 'react'
import axios from 'axios';



const api = { baseURL: 'http://localhost:59413/api/' }


export async function DeleteUser(IdUser){

    const response = await axios.post('http://localhost:59413/api/User/DeleteUser?IdUser=' + IdUser)
    return response;
}

export async function ListUser() {
    const users = await axios.get('http://localhost:59413/api/User/GetListUser?IdSprint=' + 1)
    return users.data;
}


export async function AddUser(user){
    const response = await axios.post('http://localhost:59413/api/User/AddUser', user)
    return response;

}
export async function addUserTask(listUser, IdTask){
    const response = await axios.post('http://localhost:59413/api/Task/addUserTask?IdTask='+IdTask, listUser)
    return response;
}
