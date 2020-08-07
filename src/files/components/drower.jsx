import React from 'react';
import '../../style/main.scss';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Searchbar from './searchbar'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';

function Switchbar(props) {
    return (
        <FormControlLabel
            control={
                <Switch
                    checked={props.state}
                    onChange={props.event}
                    name={props.name}
                    color="primary"
                />
            }
            label={props.label}
        />
    )
}

function Sidebar() {

    const [value, setValue] = React.useState('All');

    const handleChangeradio = (event) => {
        setValue(event.target.value);
    };

    const [state, setState] = React.useState({
        New: false,
        Download: false,
        Rating: false,
        Free: false
    });

    React.useEffect(() => {
        console.log(state)
    }, [state])

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    return (
        <div className="Sidebar">
            <div className="sidebar">
                <Searchbar />
                <FormGroup row>
                    <h5 className="filter-title">Filter</h5><br />
                    <Switchbar event={handleChange} label="New" name="New" state={state.New} />
                    <Switchbar event={handleChange} label="Rating" name="Rating" state={state.Rating} />
                    <Switchbar event={handleChange} label="Free" name="Free" state={state.Free} />
                    <Switchbar event={handleChange} label="Download" name="Download" state={state.Download} />
                </FormGroup>
                <h5 className="filter-title">Category</h5>
                <FormControl>
                    <RadioGroup value={value} onChange={handleChangeradio}>
                        <FormControlLabel value="All" control={<Radio />} label="All" />
                        <FormControlLabel value="Development" control={<Radio />} label="Development" />
                        <FormControlLabel value="programming" control={<Radio />} label="programming" />
                        <FormControlLabel value="Graphics" control={<Radio />} label="Graphics" />
                        <FormControlLabel value="Internet" control={<Radio />} label="Internet" />
                        <FormControlLabel value="Offic" control={<Radio />} label="Offic" />
                        <FormControlLabel value="Tools" control={<Radio />} label="Tools" />
                    </RadioGroup>
                    <Button size="small" variant="contained" color="primary">
                        Apply
                    </Button>
                </FormControl>
            </div>
        </div>
    );
}

export default Sidebar;
