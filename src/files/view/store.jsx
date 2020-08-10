import React, { useEffect } from 'react';
import '../../style/main.scss';
import SideDrawer from '../components/drower'
import Software from '../components/software'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'

function Store() {
    const appData = useSelector(state => state.appData)
    const dispatch = useDispatch()

    useEffect(() => {
        if (appData.length === 0) {
            axios.get('https://mdzahin.github.io/jsontest/ubuntustore.json')
                .then((res) => {
                    dispatch({
                        type: "set_data",
                        data: res
                    })
                })
        }
    }, [])
    return (
        <div className="Store">
            <SideDrawer />
            <div className="appsbody">
                <div className="appsbox">
                    {
                        appData.map(app =>
                            <Software key={app.id} name={app.name} src={app.src} id={app.id} />
                        )
                    }
                </div>
                <h3>Recomanded</h3>
                <div className="appsbox">
                    {
                        appData.map(app =>
                            <Software key={app.id} name={app.name} src={app.src} id={app.id} />
                        )
                    }
                </div>
            </div>

        </div>
    );
}

export default Store;
