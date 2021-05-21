import React, { useEffect } from 'react';
import '../../style/main.scss';
import SideDrawer from '../components/drower'
import Software from '../components/appCard'
import Card from 'react-bootstrap/Card'
import { useSelector, useDispatch } from 'react-redux'
import {db} from '../../firebase'


function Store() {
    const filteredData = useSelector(state => state.filteredData)
    const dispatch = useDispatch()
    const [loaders, setloaders] = React.useState(true);
    useEffect(() => {
        db.ref('apps').on('value', snapshot => {
            const data = Object.values(snapshot.val());
            setloaders(false);
            dispatch({
                type: "set_data",
                data: data
            })
            dispatch({
                type: "filter_data",
                data: data
            })
        })
    }, [])

    const loaderCardNum = parseInt(((window.innerHeight) * (window.innerWidth - 230)) / 36100)
    const loaderArr = []
    for (let x = 0; x < loaderCardNum; x++) {
        loaderArr.push("a")
    }
    const Loadercard = () => {
        return (
            loaderArr.map((a, key) =>
                <Card className="Loadercard" key={key} style={{ minHeight: "195px" }}>
                </Card>
            )
        )
    }

    return (
        <div className="Store">
            <SideDrawer />
            <div className="appsbody">
                <div className="appsbox">
                    {
                        loaders ?
                            <Loadercard />
                            :
                            filteredData.map((app, index) => <Software key={index} name={app.name} rating={app.rating} src={app.src} id={app.id} />)
                    }
                </div>
            </div>
        </div>
    );
}

export default Store;
