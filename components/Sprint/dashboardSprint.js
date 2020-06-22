
import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import { CardDeckBoard } from '../../components/Board/style';
import { useContextBoard } from '../../contexts/contextBoard'
import { ContainerDashSprint } from './style'
function DashboardListSprint() {

    const { board, setBoard } = useContextBoard();
    const color = ['#455267', '#082756', '#474F5A']

    useEffect(() => {
        const idBoard = parseInt(localStorage.showBoard)
        console.log('AQUI É PARA TER O IDBOARD', parseInt(localStorage.showBoard))
    })

    function handleBoardVisible(idSprint) {
        localStorage.setItem("showSprint", idSprint);
    }

    console.log('aquitem ',board)
    return (
        <ContainerDashSprint>
            <table key={Math.random(1, 3) * 23, 6}>
                <tbody key={Math.random(1, 4) * 3, 6}>
                    <tr key={Math.random(1, 6) * 3, 14} >
                        {board != undefined &&
                            board.map(card => (
                                card.listSprint.map(sprint =>
                                    (
                                        sprint.idBoard == parseInt(localStorage.showBoard) &&
                                        <td key={Math.random(1, 9) * 1, 22}>
                                            <CardDeckBoard >
                                                <CardDeck>
                                                    <Card style={{ width: '18rem',background:color[sprint.idSprint-1] }} onClick={() => handleBoardVisible(sprint.idSprint)}>
                                                        <Card.Body>
                                                            <Card.Title >{sprint.name}</Card.Title>
                                                            <Card.Link href='/Sprint/viewSprint'>Access Board</Card.Link>
                                                        </Card.Body>
                                                    </Card>
                                                </CardDeck>
                                            </CardDeckBoard>
                                        </td>
                                    )

                                )

                            ))
                        }
                    </tr>
                </tbody>

            </table>
        </ContainerDashSprint>

    );
}

export default DashboardListSprint;





