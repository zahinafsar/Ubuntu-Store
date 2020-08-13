import React, { useState, useEffect } from 'react';
import '../../style/main.scss';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import { useSelector, useDispatch } from 'react-redux'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Alert from 'react-bootstrap/Alert'

AOS.init({
    offset: 50,
    duration: 800,
});
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
    const [notfound, setnotfound] = useState(false)
    const allData = useSelector(state => state.allData)
    const filteredData = useSelector(state => state.filteredData)
    const dispatch = useDispatch()
    const handleChangeradio = (event) => {
        setState({ ...state, category: event.target.value });
    };
    const [state, setState] = useState({
        input: "",
        New: false,
        Download: false,
        Rating: false,
        Free: false,
        category: 'All'
    });
    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };
    const inputhandle = (event) => {
        setState({ ...state, input: event.target.value });
    }
    useEffect(() => {
        const filtered_data = allData.filter(a => a.category === state.category);
        if (state.category !== "All") {
            dispatch({
                type: "filter_data",
                data: {
                    data: filtered_data
                }
            })
        } else {
            dispatch({
                type: "filter_data",
                data: {
                    data: allData
                }
            })
            setState({
                ...state,
                category: 'All'
            });
        }
    }, [state.category])
    useEffect(() => {
        setState({
            ...state,
            category: 'All'
        });
        const searchedData = allData.filter((single) => {
            return single.name.toLowerCase().indexOf(state.input.toLowerCase()) !== -1
        })
        if (searchedData.length !== 0) {
            dispatch({
                type: "filter_data",
                data: {
                    data: searchedData
                }
            })
            setnotfound(false)
        } else {
            dispatch({
                type: "filter_data",
                data: {
                    data: allData
                }
            })
            if (state.input !== "") {
                setnotfound(true)
            }
        }
    }, [state.input])
    return (
        <div className="Sidebar">
            <div className="sidebar">
                <div className="Searchbar">
                    <div>
                        <input onChange={inputhandle} value={state.input} className="search" type="text" />
                    </div>
                </div>
                {
                    notfound ? <Alert variant="danger" onClick={() => setnotfound(false)} dismissible>Not Found!</Alert> : ""
                }
                <FormGroup row>
                    <h5 className="filter-title">Filter</h5><br />
                    <Switchbar event={handleChange} label="New" name="New" state={state.New} />
                    <Switchbar event={handleChange} label="Rating" name="Rating" state={state.Rating} />
                    <Switchbar event={handleChange} label="Free" name="Free" state={state.Free} />
                    <Switchbar event={handleChange} label="Download" name="Download" state={state.Download} />
                </FormGroup>
                <h5 className="filter-title">Category</h5>
                <FormControl>
                    <RadioGroup value={state.category} onChange={handleChangeradio}>
                        <FormControlLabel value="All" control={<Radio />} label="All" />
                        <FormControlLabel value="Development" control={<Radio />} label="Development" />
                        <FormControlLabel value="programming" control={<Radio />} label="programming" />
                        <FormControlLabel value="Graphics" control={<Radio />} label="Graphics" />
                        <FormControlLabel value="Internet" control={<Radio />} label="Internet" />
                        <FormControlLabel value="Offic" control={<Radio />} label="Offic" />
                        <FormControlLabel value="Tools" control={<Radio />} label="Tools" />
                    </RadioGroup><br />
                </FormControl>
            </div>
        </div>
    );
}

export default Sidebar;
