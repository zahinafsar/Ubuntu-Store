import React, { useEffect } from 'react';
import '../../style/main.scss';
import SideDrawer from '../components/drower'
import Software from '../components/software'
import { useSelector, useDispatch } from 'react-redux'
import db from '../../firebase'
import CircularProgress from '@material-ui/core/CircularProgress';


function Store() {
    const filteredData = useSelector(state => state.filteredData)
    const dispatch = useDispatch()

    useEffect(() => {
        db.ref('apps').on('value', snapshot => {
            const data = snapshot.val();
            console.log(data)
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
    return (
        <div className="Store">
            <SideDrawer />
            <div className="appsbody">
                {
                    filteredData.length === 0 ?
                        <div style={{ marginLeft: "50%", marginTop: "45vh" }}>
                            <CircularProgress color="secondary" />
                        </div>
                        :
                        <div className="appsbox">
                            {
                                filteredData.map((app, index) =>
                                    <Software key={index} name={app.name} src={app.src} id={app.id} />
                                )
                            }
                        </div>
                }
            </div>

        </div>
    );
}

export default Store;
