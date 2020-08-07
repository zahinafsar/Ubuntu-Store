import React from 'react';
import '../style/main.scss';
import SideDrawer from './components/drower'
import Software from './components/software'

function Store() {
    return (
        <div className="Store">
            <SideDrawer />
            <div className="appsbody">
                <div className="appsbox">
                    <Software />
                    <Software />
                    <Software />
                    <Software />
                    <Software />
                    <Software />
                    <Software />
                    <Software />
                    <Software />
                </div>
                <h3>Recomanded</h3>
                <div className="appsbox">
                    <Software />
                    <Software />
                    <Software />
                    <Software />
                    <Software />
                    <Software />
                    <Software />
                    <Software />
                    <Software />
                </div>
            </div>

        </div>
    );
}

export default Store;
