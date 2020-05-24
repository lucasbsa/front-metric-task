import React, { createContext, useState, useContext, useEffect } from 'react'
import { GetSprint, AddCollumn, AddTask, GetTask, MoveTaskOfCollumn } from '../../services/ServiceSprint'
import { ListUser } from '../../services/ServiceUser'


const ContextSprint = createContext();


export default function SprintProvider({ children }) {

    const [usersList, setUsersList] = useState([]);

    const [userBoard, setUserBoard] = useState([]);

    const [sprint, setSprint] = useState();

    const [show, setShow] = useState(false);

    const [task, setTask] = useState();

    const [showModalSelectUser, setShowModalSelectUser] = useState(false);

    const [taskModal, setTaskModal] = useState({ name: '', description: '', effort: '' });

    const [dropNameColumns, setNameCollumn] = useState([]);

    useEffect(() => {
        GetSprint()
            .then(response => {
                const sprint = response.data;
                populateDropNameCollumn(sprint.listCollumns)
                setSprint(sprint);
            });
        ListUser().then(resp => {
            const list = resp;
            setUsersList(list);
        })
    }, [])

    async function GetTaskModal(IdTask) {
        const taskModal = await GetTask(IdTask);
        setTaskModal(taskModal);
    }

    async function UpdateTaskModal(taskModal) {
        setTaskModal(taskModal);
    }
    function handleClose() {
        setShow(false);
    }

    function handleShow(IdTask) {
        if (IdTask != undefined && IdTask > 0)
            GetTaskModal(IdTask)
        else {
            setTaskModal({ name: '', description: '', effort: '' })
        }
        setShow(true);
    }

    function populateDropNameCollumn(collumns) {
        const dropNameColumns = [];
        const i = 0;
        collumns.forEach(element => {
            dropNameColumns.push({ value: element.idCollumn, label: element.name });
        });
        setNameCollumn(dropNameColumns);
    }

    async function newCollumn(name) {
        const response = await AddCollumn(name);
        if (response) {
            const sprint = await GetSprint();
            setSprint(sprint.data);
        }

    }

    const PopulateTask = (task) => {
        task.idCollumn = sprint.listCollumn[0].idCollumn
    }

    async function addTaskCollumn(task) {
        task.idCollumn = sprint.listCollumns[0].idCollumn
        task.effort = 1
        const response = await AddTask(task);
        if (response.data > 0) {
            const sprint = await GetSprint();
            setSprint(sprint.data);
        }
    }

    async function ChangeTaskOfCollumn(IdCollumn, IdTask) {
        const response = await MoveTaskOfCollumn(IdCollumn, IdTask);
        if (response) {
            const sprint = await GetSprint();
            setSprint(sprint.data);
        }
    }


    function newSprint(name) {
        const sprint = { Name: name }
        setSprint(sprint);
    }

    function submitSprint(sprint) {

        ApiServiceSprint.Add(sprint)
            .then(response => {
                const resp = response.data;
                return resp;
            })
            .catch(error => {
            })
    }


    function handleShowModalSelectUser() {
        setShowModalSelectUser(true)

    }

    function handleCloseModalSelectUser() { setShowModalSelectUser(false) };


    return (
        <ContextSprint.Provider
            value={{
                sprint,
                setSprint,
                newCollumn,
                handleClose,
                handleShow,
                show,
                setShow,
                addTaskCollumn,
                task,
                setTask,
                dropNameColumns,
                GetTaskModal,
                taskModal,
                setTaskModal,
                UpdateTaskModal,
                ChangeTaskOfCollumn,
                showModalSelectUser,
                setShowModalSelectUser,
                handleShowModalSelectUser,
                handleCloseModalSelectUser,
                usersList

            }}
        >
            {children}
        </ContextSprint.Provider>
    );

}

export function useContextSprint() {
    const context = useContext(ContextSprint);
    const {
        sprint,
        newCollumn,
        setSprint,
        handleClose,
        handleShow,
        show,
        setShow,
        addTaskCollumn,
        task,
        setTask,
        dropNameColumns,
        GetTaskModal,
        taskModal,
        setTaskModal,
        UpdateTaskModal,
        ChangeTaskOfCollumn,
        showModalSelectUser,
        setShowModalSelectUser,
        handleShowModalSelectUser,
        handleCloseModalSelectUser,
        usersList

    } = context;
    return {
        sprint,
        newCollumn,
        setSprint,
        handleClose,
        handleShow,
        show,
        setShow,
        addTaskCollumn,
        task,
        setTask,
        dropNameColumns,
        GetTaskModal,
        taskModal,
        setTaskModal,
        UpdateTaskModal,
        ChangeTaskOfCollumn,
        showModalSelectUser,
        setShowModalSelectUser,
        handleShowModalSelectUser,
        handleCloseModalSelectUser,
        usersList

    }
}

