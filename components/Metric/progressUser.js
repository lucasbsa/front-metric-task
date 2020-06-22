import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useContextMetric } from '../../contexts/contextMetric'
import { useContextBoar } from '../../contexts/contextBoard'
import { useEffect } from 'react';
import { useContextUser } from '../../contexts/contextUser'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { DivSelectUser } from './styles';
import { DivSelectSprint } from './styles';
import { DivSelectBoard } from './styles';
import { GetMetric } from '../../services/ServiceMetric'


export default function Progress() {

  const { user, setUser } = useContextUser();
  const [collumn, setCollumn] = useState([]);
  const [task, setTask] = useState([]);

  const {
    getMetricUser,
    metricUser,
    idUserFilter,
    setIdUserFilter,
    idSprintFilter,
    setIdSprintFilter,
    idBoardFilter,
    setIdBoardFilter,
    sprint,
    board,
    GetBoardUser,
    GetSprintUser
  } = useContextMetric();


  async function onChangeSprint(event) {

    if (event.target.value != 'Select') {
      const sprintSelecionado = sprint.filter(element => {
        if (element.name == event.target.value)
          return element;
      });
      // setIdBoardFilter(boardSelecionado[0].idBoard);
      setIdSprintFilter(sprintSelecionado[0].idSprint)

      const response = await GetMetric(idUserFilter, sprintSelecionado[0].idSprint, idBoardFilter);


      const collumn = []
      const task = []

      response.listColumn.map(item => {
        collumn.push(item.name)
      })
      response.listColumn.map(item => {
        task.push(item.listTask.length)
      })

      const taskIni = { name: response.user.name, data: task }

      const ListSeries = []
      ListSeries.push(taskIni)

      console.log('nome das dolunas: ', collumn)
      setCollumn(collumn)

      console.log('nome das task: ', ListSeries)




      setTask(ListSeries)

    } else {
      setIdSprintFilter(0)
    }

  }

  async function onChangeBoard(event) {

    if (event.target.value != 'Select') {
      const boardSelecionado = board.filter(element => {
        if (element.name == event.target.value)
          return element;
      });
      setIdBoardFilter(boardSelecionado[0].idBoard);
      const response = await GetSprintUser(boardSelecionado[0].idBoard);

    } else {
      setIdBoardFilter(0);
    }



  }

  async function onChangeUser(event) {
    const userPopulado = { name: event.target.value }
    if (event.target.value != 'Select') {
      const listUser = []
      const userSelecionado = user.filter(element => {
        if (element.name == userPopulado.name)
          return element;
      });
      if (userSelecionado != undefined) {

        const IdUser = userSelecionado[0].idUser
        setIdBoardFilter(0);
        setIdSprintFilter(0);
        setIdUserFilter(userSelecionado[0].idUser)
        const response = await GetBoardUser(userSelecionado[0].idUser);

        console.log('estou no progress com o response: ', response)


      }

    }
    else {
      setIdUserFilter(0);
      setIdBoardFilter(0);
      setIdSprintFilter(0);

    }

  }


  const myChart = {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Tasks of Sprint'
    },
    xAxis: {
      categories: collumn
    },
    yAxis: {
      title: {
        text: 'Task Sprint'
      }
    },
    series: task
  }

  return (
    <>
      <Form style={{ width: '160px' }}>
        <Row>
          <Col>
            <Form.Group controlId="exampleForm.SelectCustom">
              <DivSelectUser>
                <Form.Label>Select User</Form.Label>
                <Form.Control as="select" custom onChange={onChangeUser}>
                  <option>Select</option>
                  {user != undefined && user.map(item => (
                    <option>{item.name}</option>
                  ))}

                </Form.Control>
              </DivSelectUser>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="exampleForm.SelectCustom">
              <DivSelectSprint>
                <Form.Label>Select Board</Form.Label>
                <Form.Control as="select" custom onChange={onChangeBoard} disabled={idUserFilter == 0}>
                  <option>Select</option>
                  {board != undefined && board.map(item => (
                    <option>{item.name}</option>
                  ))}

                </Form.Control>
              </DivSelectSprint>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="exampleForm.SelectCustom">
              <DivSelectBoard>
                <Form.Label>Select Sprint</Form.Label>
                <Form.Control as="select" custom onChange={onChangeSprint} disabled={idBoardFilter == 0}>
                  <option>Select</option>
                  {sprint != undefined && sprint.map(item => (
                    <option>{item.name}</option>
                  ))}

                </Form.Control>
              </DivSelectBoard>
            </Form.Group>
          </Col>
        </Row>
      </Form>

      {
        task.length > 0 && task != undefined && collumn != undefined && collumn.length > 0 &&
        <div style={{ marginTop: '2%', maxWidth: '1000px',
        margin: '1em auto'
        }}>
          <HighchartsReact
            highcharts={Highcharts}
            options={myChart}
          />
        </div>
      }
    </>
  );

}



