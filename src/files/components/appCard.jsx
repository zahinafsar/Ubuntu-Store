import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Appdetail from './appmodal'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useSelector } from 'react-redux'
import Rating from '@material-ui/lab/Rating';
import { navigation } from 'create-react-nav'

AOS.init({
    offset: 50,
    duration: 800,
});

function Software(props) {
    const navigate = navigation.useHistory()
    const admin = useSelector(state => state.adminLogin)
    const [modalShow, setModalShow] = React.useState(false);
    const filteredData = useSelector(state => state.filteredData)
    var appData = filteredData
    const [data, setData] = React.useState([{
        id: "",
        name: "",
        src: "",
        download: "",
        rating: "",
        description: "",
        command: []
    }]);

    const clickhandle = (id) => {
        setModalShow(true);
        const result = appData.filter(a => a.id === id);
        setData(result)
    }

    const edit = (id) => {
        navigate.push(`/admin?id=${id}`);
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
                <Rating className="cardrat" name="half-rating-read" value={parseFloat(props.rating)} precision={0.5} readOnly />
            </Card.Body>
            {
                admin ?
                    <div> <Button onClick={() => edit(props.id)} variant="primary">Edit</Button> <br /> <Button onClick={() => clickhandle(props.id)} variant="primary">Download</Button> </div>:
                    <Button onClick={() => clickhandle(props.id)} variant="primary">Download</Button>
            }
        </Card>
        
    );
}
export default Software;
