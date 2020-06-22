import axios from 'axios';

export const ListBoard = async (idUser) => {
    idUser = idUser == undefined ? 1 : idUser
    console.log('O que vem  no id do user', idUser )

    const response = await axios.get('http://localhost:59413/api/Board/GetListBoard?IdUser='+idUser)
    return response.data;

}

export async function addUserBoardSprint(listUser,IdBoard){
    const response = await axios.post('http://localhost:59413/api/Board/AddUserBoard?IdBoard='+IdBoard, listUser)
    return response;
}


