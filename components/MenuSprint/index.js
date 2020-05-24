import React, { useState } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import { StyledButton } from './style'
import { useContextSprint } from '../../contexts/contextSprint'
import Modal from 'react-bootstrap/Modal'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import { AddCollumn } from '../../services/ServiceSprint'
import ModalSelect from '../../UI/ModalMultSelect'


export default function MenuSprint({ showAddCollumn }) {

    const [smShow, setSmShow] = useState(false);

    const [nameCollumn, setNameCollumn] = useState('');

    const {
        sprint,
        setSprint,
        newCollumn,
        showModalSelectUser,
        setShowModalSelectUser,
        handleShowModalSelectUser,
        handleCloseModalSelectUser } = useContextSprint();

    function handleNameCollumn() {
        newCollumn(nameCollumn);
        setSmShow(false);
    }

    function onChangeNameCollumn(event) {
        setNameCollumn(event.target.value);
    }


    return (
        <Container>
            <Navbar expand="lg" variant="light" bg="light">
                <StyledButton>
                    <table key={Math.random(1,30)*3,4} style={{    right: '184px',position: 'relative'}}>
                        <tbody>
                            <tr key={Math.random(1,30) * 3, 45}>
                                <td key={Math.random(1,30) * 3, 19}>
                                    {<Button disabled={showAddCollumn} variant="primary" style={{ fontSize: '0.8rem', width:'110px' }} onClick={() => setSmShow(true)}>Add Column</Button>}
                                </td>
                                <td key={Math.random(1,30) * 3, 49}>
                                    <Button variant="primary" style={{ fontSize: '0.8rem', width:'110px'}} onClick={() => handleShowModalSelectUser()} >Invite Users</Button>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </StyledButton>
            </Navbar>

            {showModalSelectUser &&
                <ModalSelect
                    show={showModalSelectUser}
                >
                </ModalSelect>
            }

            <Modal
                size="lg"
                show={smShow}
                onHide={() => setSmShow(false)}
                aria-labelledby="example-modal-sizes-title-sm"
            >

                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-sm">
                        Name Collumn
          </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <InputGroup>
                        <FormControl
                            placeholder="Name collumn"
                            aria-label="Name collumn"
                            aria-describedby="basic-addon2"
                            value={nameCollumn}
                            onChange={onChangeNameCollumn}
                        />
                        <InputGroup.Append>
                            <Button variant="success" onClick={handleNameCollumn}>Save</Button>
                            <Button variant="danger" onClick={() => setSmShow(false)}>Cancel</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </Modal.Body>
            </Modal>


        </Container >
    );
}