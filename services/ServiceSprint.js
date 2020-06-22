import React from 'react'
import axios from 'axios';


// 'http://localhost:59413/api/User/DeleteUser?IdUser='



    export const Add = sprint => {

        
        return axios({
            method: "POST",
            url: 'http://localhost:59413/api/User/DeleteUser?IdUser=',
            data: sprint
        });
    };

    export const  GetSprint = () =>{
        console.log('FUI BUSCAR A SPRINT: ', parseInt(localStorage.showSprint))
        const IdSprint = parseInt(localStorage.showSprint)
        return axios({
            method: "GET",
            url: 'http://localhost:59413/api/Sprint/GetSprint?IdSprint='+IdSprint
        });
    };

    export const AddCollumn = async (name)=>{
        const response = await axios.post('http://localhost:59413/api/Collumn/addCollumn',{Name:name, IdSprint: 1});
        return response.status;

    };

    export const GetTask = async (IdTask)=>{ 
        const response = await axios.get('http://localhost:59413/api/Task/GetTask?IdTask='+IdTask);
        return response.data;

    };

    export const UpdateTask = async (taskModal)=>{
        const response = await axios.post('http://localhost:59413/api/Task/UpdateTask',{taskModal});
        return response.status;

    };
    
    export const MoveTaskOfCollumn = async (IdCollumn,IdTask)=>{ 
        IdCollumn = parseInt(IdCollumn);
        const response = await axios.post('http://localhost:59413/api/Collumn/MoveTaskOfCollumn?IdCollumn='+IdCollumn+'&Idtask='+IdTask);
        return response.data;

    };
    
    export const AddTask =  (task)=>{
        
        return axios({
            method: "POST",
            url: 'http://localhost:59413/api/Task/addTask',
            data:task
        });
    };

    
    export const GetSprintForBoard = async (IdBoard)=>{ 
        const response = await axios.get('http://localhost:59413/api/Sprint/GetSprintForBoard?IdBoard='+IdBoard);
        return response.data;

    };

