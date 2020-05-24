
import React, { useState } from 'react';
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import { CardDeckBoard } from '../../components/Board/style';
import { useContextBoard } from '../../contexts/contextBoard'

const DashboardListSprint = () => {

    const { board, setBoard } = useContextBoard();


    function handleBoardVisible(idSprint) {

        localStorage.setItem("showSprint", idSprint);

        // board.forEach(function (item) {
        //     return item.listSprint.forEach(function (s) {
        //         if (s.idSprint == idSprint) {
        //             s.show = true;
        //         }
        //     })
        // })
        // setBoard(board);
    }


    return (
        <table key={board.idBoard * 23, 6}>
            <tbody>
                <tr key={board.IdBoard * 3, 14} >
                    {board != undefined &&
                        board.map(card => (
                            card.listSprint.map(sprint =>
                                <td key={sprint.idBoard}>
                                    <CardDeckBoard >
                                        <CardDeck>
                                            <Card style={{ width: '18rem' }} bg='light' onClick={() => handleBoardVisible(sprint.idSprint)}>
                                                <Card.Body>
                                                    <Card.Title >{sprint.name}</Card.Title>
                                                    <Card.Link href='/Sprint/viewSprint'>Access Board</Card.Link>
                                                </Card.Body>
                                            </Card>
                                        </CardDeck>
                                    </CardDeckBoard>
                                </td>
                            )

                        ))
                    }
                </tr>
            </tbody>

        </table>
    );
}

export default DashboardListSprint;





