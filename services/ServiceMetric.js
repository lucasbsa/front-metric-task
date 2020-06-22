import React from 'react'
import axios from 'axios';



const api = { baseURL: 'http://localhost:59413/api/' }


// export async function GetMetric(user){
//     const m = user[0];
//     console.log('chegou o user na service: ', m)
//     const response = await axios.post('http://localhost:59413/api/Metric/GetMetricUser', user)
//     return response;
// }

export const GetMetric = async (IdUser, IdSprint, IdBoard) => {
    console.log('chegou os IDs na service: ', IdUser, IdSprint, IdBoard)

    const response = await axios.get('http://localhost:59413/api/Metric/GetMetricUser?IdUser=' + IdUser + '&IdSprint=' + IdSprint + '&IdBoard=' + IdBoard)
    console.log('retorno na service metricas: ', response.data)
    return response.data;

}

export const GetMetricSprint = async (IdSprint) => {
    console.log('chegou os IDs na service: ', IdSprint)

    const response = await axios.get('http://localhost:59413/api/Metric/GetMetricSprint?IdSprint=' + IdSprint)
    console.log('retorno na service metricas: ', response.data)
    return response.data;

}

export const GetMetricTeam = async (IdSprint) => {
    console.log('chegou os IDs na service: ', IdSprint)

    const response = await axios.get('http://localhost:59413/api/Metric/GetMetricTeam?IdSprint=' + IdSprint)
    console.log('retorno na service metricas: ', response.data)
    return response.data;

}

export const GetProgressSprint = async (IdSprint) => {
    console.log('chegou os IDs na service: ', IdSprint)

    const response = await axios.get('http://localhost:59413/api/Metric/GetMetricProgressSprint?IdSprint=' + IdSprint)
    console.log('retorno na service metricas: ', response.data)
    return response.data;

}
