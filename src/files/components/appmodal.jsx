import React from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

function Appdetail(props) {
    const data = props.details[0];
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {data.name}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h6>Dating : {data.rating}</h6>
                <h6>Download : {data.download} times</h6>
                <h4>Commands</h4>
                <ul>
                    {data.command.map((a) =>
                        <li key={a} >{a}</li>
                    )}
                </ul>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default Appdetail;