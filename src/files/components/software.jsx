import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Appdetail from './appmodal'
import store from '../../store/store'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
    offset: 50,
    duration: 800,
});

function Software(props) {
    const [modalShow, setModalShow] = React.useState(false);
    const appData = store.getState()
    const [data, setData] = React.useState([{
        id: "",
        name: "",
        src: "",
        download: "",
        rating: "",
        description: "",
        command: ["", ""]
    }]);

    const clickhandle = (id) => {
        setModalShow(true);
        const result = appData.appData.filter(a => a.id === id);
        setData(result)
    }

    return (
        <Card data-aos="zoom-in" style={{ width: '18rem' }}>
            <Appdetail
                show={modalShow}
                onHide={() => setModalShow(false)}
                details={data}
            />
            <Card.Img variant="top" src={props.src} />
            <Card.Body>
                <h6>{props.name}</h6>
                <Button onClick={() => clickhandle(props.id)} variant="primary">Download</Button>
            </Card.Body>
        </Card>
    );
}
export default Software;