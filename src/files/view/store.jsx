import React, { useEffect } from 'react';
import '../../style/main.scss';
import SideDrawer from '../components/drower'
import Software from '../components/software'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'

function Store() {
    const filteredData = useSelector(state => state.filteredData)
    const allData = useSelector(state => state.allData)
    var data;
    if (filteredData.length === 0) {
        data = allData
    } else {
        data = filteredData
    }
    const dispatch = useDispatch()
    useEffect(() => {
        if (allData.length === 0) {
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
                        data.map((app, index) =>
                            <Software key={index} name={app.name} src={app.src} id={app.id} />
                        )
                    }
                </div>
            </div>

        </div>
    );
}

export default Store;
