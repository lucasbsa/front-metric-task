import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import MultipleSelectUser from './MultSelectUserTask';
import { useContextSprint } from '../contexts/contextSprint';
import { useContextBoard } from '../contexts/contextBoard';


export default function ModalSelectTaskUser({IdTask}) {

    const {
        handleCloseModalSelectUserTaskSprint,
        inviteUserTaskSprint,
        showModalSelectUserInTask
    } = useContextSprint();

    const { board } = useContextBoard();


    console.log('mostrar o board: ',board)
    return (
        <>
            <Modal show= {showModalSelectUserInTask} onHide={handleCloseModalSelectUserTaskSprint}>
                <Modal.Header closeButton>
                    <Modal.Title>add Users in the task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <MultipleSelectUser
                        optionList={ board.listUserBoard}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModalSelectUserTaskSprint}>
                        Close
            </Button>
                    <Button variant="primary" onClick={()=>inviteUserTaskSprint(IdTask, parseInt(localStorage.getItem('showBoard')))}>
                        Save
            </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

