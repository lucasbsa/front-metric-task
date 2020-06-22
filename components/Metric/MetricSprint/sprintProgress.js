import React, { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useContextMetric } from '../../../contexts/contextMetric'
import { DivSelectSprintProgress, DivSelectBoardProgress } from '../styles';
import { GetProgressSprint } from '../../../services/ServiceMetric'
import { useContextBoard } from '../../../contexts/contextBoard'
import highchartsGantt from "highcharts/modules/gantt";

import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts/highcharts-gantt'

export default function SprintProgress() {

    const [dateBegin, setDateBegin] = useState();
    const [dateEnd, setDateEnd] = useState();
    const [data, setData] = useState([]);
    const [completed, setCompleted] = useState();
    const [dayBegin, setDayBegin] = useState();
    const [monthBegin, setMonthBegin] = useState();
    const [yearBegin, setYearBegin] = useState();
    const [dayEnd, setDayEnd] = useState();
    const [monthEnd, setMonthEnd] = useState();
    const [yearEnd, setYearEnd] = useState();
    const [show, setShow] = useState(false);



    const {
        idUserFilter,
        setIdSprintFilter,
        idBoardFilter,
        setIdBoardFilter,
        sprint,
        GetSprintUser
        // board,
    } = useContextMetric();

    useEffect(() => {

        highchartsGantt(Highcharts);

    }, [])

    const { board } = useContextBoard();

    async function onChangeSprint(event) {

        if (event.target.value != 'Select') {
            const sprintSelecionado = sprint.filter(element => {
                if (element.name == event.target.value)
                    return element;
            });
            // setIdBoardFilter(boardSelecionado[0].idBoard);
            setIdSprintFilter(sprintSelecionado[0].idSprint)

            const response = await GetProgressSprint(sprintSelecionado[0].idSprint);

            console.log('RETORNO PROGRESS METRIC', response);

            let date = new Date(response.dateBegin)
            setDayBegin(date.getDate())
            setMonthBegin(date.getMonth());
            setYearBegin(date.getFullYear());

            let dateEnd = new Date(response.dateClose)
            setDayEnd(dateEnd.getDate())
            setMonthEnd(dateEnd.getMonth());
            setYearEnd(dateEnd.getFullYear());

            // setDateBegin(response.dateBegin);
            // setDateEnd(response.dateClose);
            setData([response.easy, response.average, response.hard])
            setCompleted({ amount: response.completed.amount, fill: response.completed.fill });
            setShow(true)
        }
        else
            setIdSprintFilter(0)


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

    const teste = {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Tasks and Effort'
        },
        subtitle: {
            text: 'Source: <a href="https://en.wikipedia.org/wiki/World_population">Wikipedia.org</a>'
        },
        xAxis: {
            categories: ['Easy', 'Average', 'Hard'],
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Tasks',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valueSuffix: ' task'
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -40,
            y: 50,
            floating: true,
            borderWidth: 1,
            backgroundColor:
                Highcharts.defaultOptions != undefined && Highcharts.defaultOptions.legend != undefined && Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
            shadow: true
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'Sprint A',
            data: data
        },
        ]
    }



    return (
        <>
            <Form style={{ width: '160px' }}>
                <Row>
                    <Col>
                        <Form.Group controlId="exampleForm.SelectCustom">
                            <DivSelectBoardProgress>
                                <Form.Label>Select Board</Form.Label>
                                <Form.Control as="select" custom onChange={onChangeBoard}>
                                    <option>Select</option>
                                    {board != undefined && board.map(item => (
                                        <option>{item.name}</option>
                                    ))}

                                </Form.Control>
                            </DivSelectBoardProgress>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="exampleForm.SelectCustom">
                            <DivSelectSprintProgress>
                                <Form.Label>Select Sprint</Form.Label>
                                <Form.Control as="select" custom onChange={onChangeSprint} disabled={idBoardFilter == 0}>
                                    <option>Select</option>
                                    {sprint != undefined && sprint.map(item => (
                                        <option>{item.name}</option>
                                    ))}

                                </Form.Control>
                            </DivSelectSprintProgress>
                        </Form.Group>
                    </Col>
                </Row>
            </Form>

            {show &&
             <div style={{
                marginTop: '2%', maxWidth: '1000px',
                margin: '1em auto'
            }}>
                <HighchartsReact style={{
                    marginTop: '2%', maxWidth: '1000px',
                    margin: '1em auto'
                }}
                    highcharts={Highcharts}
                    constructorType='ganttChart'
                    options={{
                        title: {
                            text: 'Progress Sprint'
                        },
                        xAxis: {
                            min: Date.UTC(yearBegin, monthBegin, dayBegin),
                            max: Date.UTC(yearEnd, monthEnd, dayEnd)
                        },

                        series: [{
                            name: 'Sprint',
                            data: [
                                {
                                    name: 'Develop',
                                    start: Date.UTC(yearBegin, monthBegin, dayBegin),
                                    end: Date.UTC(yearEnd, monthEnd, dayEnd),
                                    completed: completed
                                }
                            ]
                        }]
                    }}
                />
                </div>
            }



            {show &&
                <div style={{
                    marginTop: '2%', maxWidth: '1000px',
                    margin: '1em auto'
                }}>
                    <HighchartsReact style={{
                        marginTop: '2%', maxWidth: '1000px',
                        margin: '1em auto'
                    }}
                        highcharts={Highcharts}
                        options={teste}
                    />
                </div>
            }

        </>
    );

}




