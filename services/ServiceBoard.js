import axios from 'axios';

export const ListBoard = async () => {

    const response = await axios.get('http://localhost:59413/api/Board/GetListBoard?IdUser='+1)
    return response.data;

}

