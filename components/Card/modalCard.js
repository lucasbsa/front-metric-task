import React, { useState, useEffect } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { useContextSprint } from '../../contexts/contextSprint'
import Form from 'react-bootstrap/Form'
import InputBase from '@material-ui/core/InputBase';
import { useForm } from "react-hook-form";
import Input from '@material-ui/core/Input';
import Select from "react-select";
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { TextArea } from './style'
import Avatar from '@material-ui/core/Avatar';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import Chip from '@material-ui/core/Chip';

export default function modal(newTask) {
  const {
    show,
    handleClose,
    addTaskCollumn,
    dropNameColumns,
    taskModal,
    GetTaskModal,
    setTaskModal,
    UpdateTaskModal,
    ChangeTaskOfCollumn
  } = useContextSprint();


  const etiqueta = [
    { value: "1", label: "Vermelho" },
    { value: "2", label: "Verde" },
    { value: "3", label: "Amarelo" },
    { value: "4", label: "Azul" },
    { value: "5", label: "Branco" }
  ]
  const options = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" }
  ];


  const handleSubmit = event => 
  {
    event.preventDefault();  
      addTaskCollumn(taskModal);
  };


  async function onChangeTaskOfCollumn(e) {
    const response = await ChangeTaskOfCollumn(e, taskModal.idTask);
  }

  function onChangeTask(event) {
    if (event.target.name == 'name')
      setTaskModal({ ...taskModal, name: event.target.value });
    else if (event.target.name == 'effort')
      setTaskModal({ ...taskModal, effort: event.target.value });
    else if (event.target.name == 'description')
      setTaskModal({ ...taskModal, description: event.target.value });
    else if (event.target.name == 'status')
      setTaskModal({ ...taskModal, status: event.target.value });

  }


  return (
    <>
      <Modal show={show} onHide={handleClose} size='lg'>
        <Form onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>
              <Input placeholder="Name Task" style={{ width: '430px' }} name="name" value={taskModal.name}
                onChange={onChangeTask} />
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <table>
              <tr>
                <div>
                  <td style={{ width: '630px' }}>
                    {/* <TextArea style={{    position: 'relative', top: '-54px'}}> */}
                    <TextareaAutosize
                      rowsMax={3}
                      aria-label="Description of task"
                      placeholder="Description of task"
                      name='description'
                      style={{ minWidth: '100%', height: '140px' }}
                      value={taskModal.description}
                      onChange={onChangeTask}
                    />
                    {/* </TextArea> */}

                  </td>
                </div>
                <td>
                  <div style={{ marginLeft: 'auto', height: '155px', position: 'relative', width: '150px' }}>

                    <ButtonGroup vertical style={{ width: '148px' }} >

                      <DropdownButton as={ButtonGroup} variant="light" title="Etiqueta" id="bg-vertical-dropdown-1" style={{ color: 'white' }} >
                        {etiqueta.map(etiq => (
                          <Dropdown.Item eventKey={etiq.value} variant="light">{etiq.label}</Dropdown.Item>
                        ))}
                      </DropdownButton>

                      <DropdownButton as={ButtonGroup} variant="light" title="Effor" id="bg-vertical-dropdown-1">
                        {options.map(op => (<Dropdown.Item eventKey="1" variant="light" >{op.label}</Dropdown.Item>
                        ))}
                      </DropdownButton>

                      <DropdownButton as={ButtonGroup} variant="light" title="Move" id="bg-vertical-dropdown-1" onSelect={onChangeTaskOfCollumn}>
                        {dropNameColumns.map(op => (
                          <Dropdown.Item eventKey={op.value} variant="light">{op.label}</Dropdown.Item>
                        ))}
                      </DropdownButton>
                    </ButtonGroup>
                  </div>
                </td>
              </tr>

            </table>

            <div style={{ height: '72px', top: '6px', position: 'relative' }}>
              <label>Members</label>
              <table>
                <tr>
                  <AvatarGroup max={4}>
                    <Avatar alt="Remy Sharp" />
                    <Avatar alt="Travis Howard" />
                    <Avatar alt="Cindy Baker" />
                    <Avatar alt="Agnes Walker" />
                    <Avatar alt="Trevor Henderson" />
                  </AvatarGroup>
                  <td>
                    <Tooltip title="Add Task" aria-label="add">
                      <Fab size="small" color='primary' aria-label="add">
                        <AddIcon />
                      </Fab>
                    </Tooltip>
                  </td>
                  <td>
                    <div style={{ marginLeft: '450px' }}>
                      <Chip variant="outlined" size="small" label="Effort" />
                      <Chip variant="outlined" size="small" label="Vermelha" />
                    </div>
                  </td>
                </tr>
              </table>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button type="submit" variant="primary">
              Save
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

