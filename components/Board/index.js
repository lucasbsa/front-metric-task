
import React, { useState } from 'react';
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import { CardDeckBoard } from '../../components/Board/style';
import { useContextBoard } from '../../contexts/contextBoard'

const DashBoard = () => {

  const { board, setBoard } = useContextBoard();

  return (
    <table key={board.IdBoard * 7}>
      <tbody>
        <tr key={board.IdBoard * 3, 14}>
          {board != undefined &&
            board.map(card => (
              <td key={board.IdBoard}>
                <CardDeckBoard>
                  <CardDeck>
                    <Card style={{ width: '18rem' }} bg='light'>
                      <Card.Body>
                        <Card.Title >{card.name}</Card.Title>
                        <Card.Link href={card.name == 'Support' ? '/DashboardSprints/dashboardList' : ''}>Access Board</Card.Link>
                      </Card.Body>
                    </Card>
                  </CardDeck>
                </CardDeckBoard>
              </td>
            ))
          }
        </tr>
      </tbody>

    </table>
  );
}

export default DashBoard;





