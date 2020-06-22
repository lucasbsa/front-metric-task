import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useContextMetric } from '../../../contexts/contextMetric'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { DivSelectTeamSprintProgress,DivSelectTeamBoardProgress } from '../styles';
import { GetMetricTeam } from '../../../services/ServiceMetric'
import { useContextBoard } from '../../../contexts/contextBoard'


export default function TeamProgress() {


  const [listColumn, setListColumn] = useState([]);
  const [series, setSeries] = useState([]);

  const {
    idUserFilter,
    setIdSprintFilter,
    idBoardFilter,
    setIdBoardFilter,
    sprint,
    GetSprintUser
    // board,
  } = useContextMetric();


  const { board } = useContextBoard();

  async function onChangeSprint(event) {

    if (event.target.value != 'Select') {
      const sprintSelecionado = sprint.filter(element => {
        if (element.name == event.target.value)
          return element;
      });
      // setIdBoardFilter(boardSelecionado[0].idBoard);
      setIdSprintFilter(sprintSelecionado[0].idSprint)

      const response = await GetMetricTeam(sprintSelecionado[0].idSprint, idBoardFilter);

      console.log('o que chegou no response: ', response);

      if (response.length > 0) {
        let list = '';
        list = response.map(element => {
          return element.nameColumn + ',';
        });
        let listColumn = list.map(item => {
          return item.replace(',', '')
        })

        let listUser = [];
        response[0].metricUserSprint.map(element => {
          return listUser.push({ name: element.user.name, data: element.numberTask });
        })

        setListColumn(listColumn)
        setSeries(listUser);

      }
      else {
        setListColumn([])
        setSeries([]);
      }
    }
    else {
      setListColumn([]);
      setSeries([]);
      setIdSprintFilter(0);

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


  const myChart = {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Tasks in the teams'
    },
    subtitle: {
      // text: 'Source: WorldClimate.com'
    },
    xAxis: {
      categories: listColumn,
      // categories: [
      //   'to do',
      //   'to doing',
      //   'in progress',
      //   'to test',
      //   'done',
      // ],
      crosshair: true
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Tasks (un)'
      }
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0
      }
    },
    series: series
  }

  return (
    <>
      <Form style={{ width: '160px' }}>
        <Row>
          <Col>
            <Form.Group controlId="exampleForm.SelectCustom">
              <DivSelectTeamBoardProgress>
                <Form.Label>Select Board</Form.Label>
                <Form.Control as="select" custom onChange={onChangeBoard}>
                  <option>Select</option>
                  {board != undefined && board.map(item => (
                    <option>{item.name}</option>
                  ))}

                </Form.Control>
              </DivSelectTeamBoardProgress>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="exampleForm.SelectCustom">
              <DivSelectTeamSprintProgress>
                <Form.Label>Select Sprint</Form.Label>
                <Form.Control as="select" custom onChange={onChangeSprint} disabled={idBoardFilter == 0}>
                  <option>Select</option>
                  {sprint != undefined && sprint.map(item => (
                    <option>{item.name}</option>
                  ))}

                </Form.Control>
              </DivSelectTeamSprintProgress>
            </Form.Group>
          </Col>
        </Row>
      </Form>

      {listColumn != undefined && listColumn.length>0 && series != undefined && series.length>0 &&
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



