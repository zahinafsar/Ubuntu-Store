import React, { useEffect } from 'react';
import '../style/main.scss';
import SideDrawer from './components/drower'
import Software from './components/software'
import { useSelector, useDispatch } from 'react-redux'

function Store() {
    const data = useSelector(state => state)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({
            type: "fetch_data"
        })
    }, [])
    return (
        <div className="Store">
            <SideDrawer />
            <div className="appsbody">
                <div className="appsbox">
                    {
                        data.map(app =>
                            <Software name={app.name} src={app.src} />
                        )
                    }
                </div>
                <h3>Recomanded</h3>
                <div className="appsbox">
                    {
                        data.map(app =>
                            <Software name={app.name} src={app.src} />
                        )
                    }
                </div>
            </div>

        </div>
    );
}

export default Store;
