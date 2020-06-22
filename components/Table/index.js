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
import { blue } from '@material-ui/core/colors'

export default function TableMain() {

  const {
    sprint,
    show,
    handleShow
  } = useContextSprint();

  useEffect(() => {

  }, []);

  return (
    <>
      {show &&
        <ModalTask
          newTask={true}>
        </ModalTask>
      }
      <div style={{ background: '#263558', position: 'relative', marginTop: '2%', marginLeft: '2%', width: '96%' }}>
        <Table responsive size='sm' style={{ height: '100px' }} >
          <body style={{
            height: '430px',
            overflowY: 'auto',
            overflowX: 'hidden',
            background: '#263558',
          }}>

            <tr>
              <Tooltip title="Add Task" aria-label="add" onClick={() => handleShow(0)} style={{ position: 'relative', marginLeft: '1%', marginTop: '1%' }}>
                <Fab size="small" color='red' aria-label="add">
                  <AddIcon />
                </Fab>
              </Tooltip>
              {sprint != undefined && sprint.listCollumns != undefined &&
                sprint.listCollumns.map(collumns => (
                  <td>
                    <StyledDiv >
                      <Styledtr style={{ background: '#DEDFEF' }}>
                        <Table>
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
                                {console.log('aqui tem a task: ',task)}
                                <Column style={{ width: '100px' }}
                                  Name={task.name}
                                  Description={task.description}
                                  IdTask={task.idTask}
                                  Priority={task.priority} 
                                  Effort = {task.effort}                             >
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
          </body>

        </Table>
      </div>
    </>
  );
}

