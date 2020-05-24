import React, { createContext, useState, useContext, useEffect } from 'react'
import Table from 'react-bootstrap/Table'
import { Styledtr, StyledDiv, StyledTR } from './style'
import Column from '../Card'
import Card from 'react-bootstrap/Card'
import Fab from '@material-ui/core/Fab';
import { useContextSprint } from '../../contexts/contextSprint'
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';
import ModalTask from '../Card/modalCard'
import { Container, TableSortLabel } from '@material-ui/core'

export default function TableMain() {

  const {
    sprint,
    show,
    handleShow
  } = useContextSprint();


  const [listTasks, setlistTasks] = useState();

  useEffect(() => {

  }, []);

  return (
    <>
      {show &&
        <ModalTask
           newTask={true}>
        </ModalTask>
      }
      <Container>
        <Table responsive={true}>
          <tr>
            <Tooltip title="Add Task" aria-label="add" onClick={()=>handleShow(0)}>
              <Fab size="small" color='primary' aria-label="add">
                <AddIcon />
              </Fab>
            </Tooltip>
            {sprint != undefined && sprint.listCollumns != undefined &&
              sprint.listCollumns.map(collumns => (
                <td>
                  <StyledDiv>
                    <Styledtr>
                      <Table style={{ height: '100vh', width: '30%' }} responsive={true}>
                        <thead>
                          <th style={{ border: 'hidden' }}>
                            <Card>
                              <Card.Header style={{ textAlign: 'center', fontSize: '12px', minWidth: '150px' }}>{collumns.name}</Card.Header>
                            </Card>
                          </th>
                        </thead>
                        <tbody>

                          {collumns != undefined && collumns.listTask != undefined && collumns.listTask.map(task => (
                            <tr>
                              <Column style={{ width: '100px'}}
                                Name={task.name}
                                Description={task.description}
                                IdTask={task.idTask}
                              >
                              </Column>
                            </tr>

                          ))}
                        </tbody>
                      </Table>
                    </Styledtr>
                  </StyledDiv>
                </td>
              ))
            }
          </tr>
        </Table>
      </Container>
    </>
  );
}

