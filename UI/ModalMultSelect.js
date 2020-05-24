import React, { useState, useEffect } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import MultipleSelect from './MultSelect';
import { useContextSprint } from '../contexts/contextSprint';


export default function ModalSelect(show) {

    const {
        usersList,
        handleCloseModalSelectUser
    } = useContextSprint();
    return (
        <>

            <Modal show={show} onHide={handleCloseModalSelectUser}>
                <Modal.Header closeButton>
                    <Modal.Title>Invite Users</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <MultipleSelect
                        optionList={usersList}
                    />

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModalSelectUser}>
                        Close
            </Button>
                    <Button variant="primary" onClick={handleCloseModalSelectUser}>
                        Save Changes
            </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

