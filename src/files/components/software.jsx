import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Appdetail from './appmodal'

function Software() {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <Card style={{ width: '18rem' }}>
            <Appdetail
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/1024px-Visual_Studio_Code_1.35_icon.svg.png" />
            <Card.Body>
                <h6>VS Code</h6>
                <Button onClick={() => setModalShow(true)} variant="primary">Download</Button>
            </Card.Body>
        </Card>
    );
}
export default Software;