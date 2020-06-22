
import React, { useState } from 'react';
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import { CardDeckBoard } from '../../components/Board/style';
import { useContextBoard } from '../../contexts/contextBoard'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core';

import {ContainerBoard} from './style'


const DashBoard = () => {

  const { board, setBoard } = useContextBoard();

  const color = ['#455267', '#082756']
//455267
  function handleAccessBoard(idBoard) {
    console.log('AQUI EU VOU SETAR O IDBOARD', idBoard)
    localStorage.setItem("showBoard", idBoard);
    // window.location.href="http://localhost:3000/DashboardSprints/dashboardList";

  }

  return (
<ContainerBoard>
      <div style={{position:'relative', marginTop:'1%'}}>
        <table key={Math.random(1, 4) * 1, 7}>
          <tbody key={Math.random(1, 4) * 3, 33}>
            <tr key={Math.random(1, 4) * 3, 14}>
              {board != undefined &&
                board.map(card => (
                  <td key={Math.random(1, 4) * 2, 3}>
                    <CardDeckBoard>
                      <CardDeck>
                        <Card style={{ width: '18rem', background: color[card.idBoard - 1] }}>
                          <Card.Body>
                            <Card.Title >{card.name}</Card.Title>
                            <Card.Link href='/DashboardSprints/dashboardList' onClick={() => handleAccessBoard(card.idBoard)}> Access Board</Card.Link>
                            {/* <Button onClick={()=>handleAccessBoard(card.idBoard)}>Access Board</Button> */}
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
      </div>
      </ContainerBoard>

  );
}

export default DashBoard;





