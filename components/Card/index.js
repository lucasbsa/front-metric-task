import Table from 'react-bootstrap/Table'
import { ColunmStyle } from './style';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { useContextSprint } from '../../contexts/contextSprint'
import { useEffect } from 'react';


export default function Column({ Name, Description, IdTask }) {

    const {
        handleShow,
    } = useContextSprint();

    return (
        <td style={{height: '100px'}}>
            <Card onClick={()=>handleShow(IdTask)} style={{ cursor: 'pointer',height: '160px' }}>
                <Card.Header>{Name}</Card.Header>
                <Card.Body>
                    {/* <Card.Title>Special title treatment</Card.Title> */}
                    <Card.Text>
                        {Description}.
                    </Card.Text>
                </Card.Body>
            </Card>
        </td>

    );

}

