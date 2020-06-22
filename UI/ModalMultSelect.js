import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import MultipleSelect from './MultSelect';
import { useContextSprint } from '../contexts/contextSprint';
import { useContextBoard } from '../contexts/contextBoard';


export default function ModalSelect(show) {

    const {
        handleCloseModalSelectUser,
        inviteUserBoardSprint
    } = useContextSprint();

    const { board } = useContextBoard();

    console.log('BORD COM USERS',board)
    return (
        <>
            <Modal show={show} onHide={handleCloseModalSelectUser}>
                <Modal.Header closeButton>
                    <Modal.Title>Invite Users</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <MultipleSelect
                        optionList={ board.listUserOutBoard}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModalSelectUser}>
                        Close
            </Button>
                    <Button variant="primary" onClick={inviteUserBoardSprint}>
                        Save
            </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

