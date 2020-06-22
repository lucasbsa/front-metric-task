import React, { createContext, useState, useContext, useEffect } from 'react'
import { GetSprint, AddCollumn, AddTask, GetTask, MoveTaskOfCollumn } from '../../services/ServiceSprint'
import { addUserTask } from '../../services/ServiceUser'
import { addUserBoardSprint } from '../../services/ServiceBoard'
import { useContextBoard } from '../../contexts/contextBoard'
import { ListBoard } from '../../services/ServiceBoard'


const ContextSprint = createContext();


export default function SprintProvider({ children }) {

    const [usersList, setUsersList] = useState([]);

    const [personName, setPersonName] = useState([]);

    const [userBoard, setUserBoard] = useState([]);

    const [sprint, setSprint] = useState();

    const [show, setShow] = useState(false);

    const [task, setTask] = useState();

    const [showModalSelectUser, setShowModalSelectUser] = useState(false);

    const [taskModal, setTaskModal] = useState({ name: '', description: '', effort: '' });

    const [dropNameColumns, setNameCollumn] = useState([]);

    const { board, setBoard } = useContextBoard();

    const [showModalSelectUserInTask, setShowModalSelectUserInTask] = useState(false)

    const [personNameUserTask, setPersonNameUserTask] = useState([]);


    useEffect(() => {
        const Idboard = parseInt(localStorage.getItem("showBoard"));

        GetSprint()
            .then(response => {
                const sprint = response.data;
                populateDropNameCollumn(sprint.listCollumns)
                setSprint(sprint);
            });

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

    function handleCloseModalSelectUserTaskSprint() {
        console.log("ENTREI AQUI? ", showModalSelectUserInTask);
        setShowModalSelectUserInTask(false)
    };

    function handleOpenModalSelectUserTaskSprint() {
        console.log("vou setar O SHOW DA MODAL", showModalSelectUserInTask);
        setShowModalSelectUserInTask(true);
        console.log("SETEI O SHOW DA MODAL", showModalSelectUserInTask);

    };

    async function inviteUserTaskSprint(IdTask, idboard) {
        const auxUser = [];
        const populateUserName = personNameUserTask.map(function (name) {
            const User = { name: name }
            auxUser.push(User);
        })
        console.log('O QUE TEM NA LISTA DE BOARDS: ', board)

        console.log('idboard que chegou: ', idboard)
        console.log('idtask que chegou: ', IdTask)


        const filterBoard = board.filter(element => {
            if (element.idBoard == idboard)
                return element;
        });
        console.log('PEGUEI O BOARD: ', filterBoard)

        const listUser = []
        filterBoard[0].listUserBoard.forEach(element => {
            auxUser.forEach(ele => {
                if (element.name == ele.name)
                    listUser.push(element);
            });
        });

        console.log('LISTA DE USUARIOS SETADA: ', listUser)


        const response = await addUserTask(listUser, IdTask);
        console.log('RESPONSE context: ', response)
        setPersonNameUserTask([])
        if (response.status == 200) {
            console.log('VOU DAR GET NA SPRINT: ')

            GetSprint()
                .then(response => {
                    const sprint = response.data;
                    populateDropNameCollumn(sprint.listCollumns)
                    setSprint(sprint);
                    console.log('ATUALIZEI A SPRINT: ', sprint)

                });

        }
        setShowModalSelectUserInTask(false);
    };

    async function inviteUserBoardSprint() {

        const Idboard = parseInt(localStorage.getItem('showBoard'))
        const auxUser = [];

        const populateUserName = personName.map(function (name) {
            const User = { name: name }
            auxUser.push(User);
        })

        const filterBoard = board.filter(element => {
            if (element.idBoard == Idboard)
                return element;
        });
        console.log('PEGUEI O BOARD: ', filterBoard)

        const listUser = []
        filterBoard[0].listUserOutBoard.forEach(element => {
            auxUser.forEach(ele => {
                if (element.name == ele.name)
                    listUser.push(element);
            });
        });

        console.log('AQUI ESTÁ OS USERS: ', listUser)
        const response = await addUserBoardSprint(listUser, sprint.idBoard);
        console.log('RESPONSE DO ADD context: ', response)
        if (response.status == 200) {
            GetSprint()
                .then(response => {
                    const sprint = response.data;
                    populateDropNameCollumn(sprint.listCollumns)
                    setSprint(sprint);
                    console.log('ATUALIZEI A SPRINT: ', sprint)
                });
            const responseBoard = await ListBoard();
            console.log('ATUALIZEI O BOARD: ', responseBoard)
            if (responseBoard != undefined)
                setBoard(responseBoard)
        }
        setPersonName([]);
        setShowModalSelectUser(false);
    }

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
                usersList,
                inviteUserBoardSprint,
                personName,
                setPersonName,
                handleCloseModalSelectUserTaskSprint,
                inviteUserTaskSprint,
                handleOpenModalSelectUserTaskSprint,
                showModalSelectUserInTask,
                personNameUserTask,
                setPersonNameUserTask
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
        usersList,
        inviteUserBoardSprint,
        personName,
        setPersonName,
        handleCloseModalSelectUserTaskSprint,
        inviteUserTaskSprint,
        handleOpenModalSelectUserTaskSprint,
        showModalSelectUserInTask,
        personNameUserTask,
        setPersonNameUserTask

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
        usersList,
        inviteUserBoardSprint,
        personName,
        setPersonName,
        handleCloseModalSelectUserTaskSprint,
        inviteUserTaskSprint,
        handleOpenModalSelectUserTaskSprint,
        showModalSelectUserInTask,
        personNameUserTask,
        setPersonNameUserTask
    }
}

