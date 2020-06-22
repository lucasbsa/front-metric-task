import Card from 'react-bootstrap/Card'
import { useContextSprint } from '../../contexts/contextSprint'
import Chip from '@material-ui/core/Chip';
import InputGroup from 'react-bootstrap/InputGroup'

export default function Column({ Name, Description, IdTask, Priority, Effort }) {

    const {
        handleShow,
    } = useContextSprint();

    function editDescription(description) {
        return description.substring(0, 5) + ' ...';
    }

    console.log('cor', Priority)
    return (
        <td style={{ height: '100px' }}>
            <Card onClick={() => handleShow(IdTask)} style={{ cursor: 'pointer', height: '160px' }}>
                <table>
                    <tr style={{ marginLeft: '0%', width: '10%', marginTop: '0px', height: '10%'}}>
                        <td style={{ marginLeft: '0%', width: '10%', marginTop: '0px', height: '10%', backgroundColor: `${Priority}` }}>
                            <div style={{ marginLeft: '0%', width: '10%', marginTop: '0px', height: '10%', backgroundColor: `${Priority}` }}></div>
                        </td>
                        <td style={{ marginLeft: '0%', width: '100%', margin: '0px', height: '10%',    padding: '0px'}}>
                            <Card.Header >
                                {/* <Chip variant="outlined" size="small" label="" style={{marginLeft:'10%', width: '10%', marginTop: '0px', height: '50%',backgroundColor:`${Priority}`  }} /> */}
                                {Name}
                            </Card.Header>
                        </td>
                    </tr>
                </table>


                <Card.Body>
                    <Card.Text>
                        {editDescription(Description)}
                    </Card.Text>

                    <Chip variant="outlined" size="small" label={Effort} style={{marginLeft:'90%', color: 'white', width: '25%', marginTop: '20px', fontWeight: 'bold', background: '#263558' }} />
                </Card.Body>
            </Card>
        </td>

    );

}

