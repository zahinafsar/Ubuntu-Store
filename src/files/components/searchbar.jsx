import React from 'react';
import '../../style/main.scss';
import SearchIcon from '@material-ui/icons/Search';

function Searchbar() {
    return (
        <div className="Searchbar">
            <div>
                <input className="search" type="text" />
                <SearchIcon />
            </div>
        </div>
    );
}

export default Searchbar;
