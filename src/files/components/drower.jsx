import React from 'react';
import '../../style/main.scss';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
    offset: 50,
    duration: 800,
});
function Switchbar(props) {
    return (
        <FormControlLabel data-aos="fade-right"
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
                <div className="Searchbar">
                    <div>
                        <input className="search" type="text" />
                        <SearchIcon />
                    </div>
                </div>
                <FormGroup row>
                    <h5 className="filter-title">Filter</h5><br />
                    <Switchbar data-aos="fade-right" event={handleChange} label="New" name="New" state={state.New} />
                    <Switchbar data-aos="fade-right" event={handleChange} label="Rating" name="Rating" state={state.Rating} />
                    <Switchbar data-aos="fade-right" event={handleChange} label="Free" name="Free" state={state.Free} />
                    <Switchbar data-aos="fade-right" event={handleChange} label="Download" name="Download" state={state.Download} />
                </FormGroup>
                <h5 className="filter-title">Category</h5>
                <FormControl>
                    <RadioGroup value={value} onChange={handleChangeradio}>
                        <FormControlLabel data-aos="fade-right" value="All" control={<Radio />} label="All" />
                        <FormControlLabel data-aos="fade-right" value="Development" control={<Radio />} label="Development" />
                        <FormControlLabel data-aos="fade-right" value="programming" control={<Radio />} label="programming" />
                        <FormControlLabel data-aos="fade-right" value="Graphics" control={<Radio />} label="Graphics" />
                        <FormControlLabel data-aos="fade-right" value="Internet" control={<Radio />} label="Internet" />
                        <FormControlLabel data-aos="fade-right" value="Offic" control={<Radio />} label="Offic" />
                        <FormControlLabel data-aos="fade-right" value="Tools" control={<Radio />} label="Tools" />
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
