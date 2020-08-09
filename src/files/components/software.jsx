import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Appdetail from './appmodal'

function Software(props) {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <Card style={{ width: '18rem' }}>
            <Appdetail
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <Card.Img variant="top" src={props.src} />
            <Card.Body>
                <h6>{props.name}</h6>
                <Button onClick={() => setModalShow(true)} variant="primary">Download</Button>
            </Card.Body>
        </Card>
    );
}
export default Software;