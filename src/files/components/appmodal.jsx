import React, { useRef, createRef } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import '../../style/main.scss';
import Rating from '@material-ui/lab/Rating';


function Appdetail(props) {
    const data = props.details[0];
    var refArray = []
    data.command.forEach(() => {
        refArray.push(createRef())
    });
    const ref = useRef(refArray);
    const copy = (command, index) => {
        navigator.clipboard.writeText(command)
        ref.current[index].current.style.backgroundColor = "green"
    }
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <img alt="appicon" src={data.src} style={{ height: "35px", marginRight: "20px" }} />
                <Modal.Title id="contained-modal-title-vcenter">
                    {data.name}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <Rating name="half-rating-read" defaultValue={parseInt(data.rating)} precision={0.5} readOnly />
                    <h6 style={{ marginTop: "4px" }}>{data.download} downloads</h6>
                </div>
                <br />
                <div>{data.description}</div>
                <br />
                <h5 style={{ fontWeight: "bold" }}>Commands: </h5>
                {data.command.map((a, index) =>
                    <div key={index} className="copytoclip">
                        <h6>{a}</h6>
                        <FileCopyOutlinedIcon ref={ref.current[index]} onClick={() => copy(a, index)} />
                    </div>
                )}
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default Appdetail;