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
    const dispatch = useDispatch()
    const handleChangeradio = (event) => {
        setState({ ...state, category: event.target.value });
    };
    const [state, setState] = useState({
        input: "",
        Download: false,
        Rating: false,
        Alphabet: false,
        category: 'All'
    });
    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };
    const inputhandle = (event) => {
        setState({ ...state, input: event.target.value });
    }

    useEffect(() => {
        var filtered_data = allData
        if (state.category !== "All") {
            const filtered_by_category = allData.filter(a => a.category === state.category);
            filtered_data = filtered_by_category
        }
        if (state.input !== "") {
            const filtered_by_search = filtered_data.filter((single) => {
                return single.name.toLowerCase().indexOf(state.input.toLowerCase()) !== -1
            })
            filtered_data = filtered_by_search
        }
        if (state.Alphabet) {
            const sorted_by_alphabet = filtered_data.slice().sort((a, b) => {
                if (a.name < b.name) {
                    return -1;
                } else if (a.name > b.name) {
                    return 1;
                } else {
                    return 0;
                }
            });
            filtered_data = sorted_by_alphabet
        }
        if (state.Download) {
            const sorted_by_download = filtered_data.slice().sort((a, b) => {
                if (parseInt(a.download) < parseInt(b.download)) {
                    return 1;
                } else if (parseInt(a.download) > parseInt(b.download)) {
                    return -1;
                } else {
                    return 0;
                }
            });
            filtered_data = sorted_by_download
        }
        console.log(filtered_data)
        if (state.Rating) {
            const sorted_by_Rating = filtered_data.slice().sort((a, b) => {
                if (parseInt(a.rating) < parseInt(b.rating)) {
                    return 1;
                } else if (parseInt(a.rating) > parseInt(b.rating)) {
                    return -1;
                } else {
                    return 0;
                }
            });
            filtered_data = sorted_by_Rating
        }

        if (filtered_data.length === 0 && allData.length !== 0) {
            setnotfound(true)
        } else {
            setnotfound(false)
        }
        dispatch({
            type: "filter_data",
            data: {
                data: filtered_data
            }
        })
    }, [state])
    return (
        <div className="Sidebar">
            <div className="sidebar">
                {
                    notfound ? <Alert data-aos="fade-left" variant="danger" onClick={() => setnotfound(false)} dismissible>No Application Found!</Alert> : ""
                }
                <div className="Searchbar">
                    <div>
                        <input onChange={inputhandle} value={state.input} className="search" type="text" />
                    </div>
                </div>

                <FormGroup row>
                    <h5 className="filter-title">Sort By</h5><br />
                    <Switchbar event={handleChange} label="Rating" name="Rating" state={state.Rating} />
                    <Switchbar event={handleChange} label="Download" name="Download" state={state.Download} />
                    <Switchbar event={handleChange} label="Alphabet" name="Alphabet" state={state.Alphabet} />
                </FormGroup>
                <h5 className="filter-title">Category</h5>
                <FormControl>
                    <RadioGroup value={state.category} onChange={handleChangeradio}>
                        <FormControlLabel value="All" control={<Radio />} label="All" />
                        <FormControlLabel value="IDE" control={<Radio />} label="Text Editor/IDE" />
                        <FormControlLabel value="Database" control={<Radio />} label="Database" />
                        <FormControlLabel value="Programming" control={<Radio />} label="Programming" />
                        <FormControlLabel value="Graphics" control={<Radio />} label="Graphics" />
                        <FormControlLabel value="Internet" control={<Radio />} label="Internet" />
                        <FormControlLabel value="Offic" control={<Radio />} label="Offic" />
                        <FormControlLabel value="Media" control={<Radio />} label="Media" />
                        <FormControlLabel value="Basic" control={<Radio />} label="basic" />
                        <FormControlLabel value="Tools" control={<Radio />} label="Tools" />
                    </RadioGroup><br />
                </FormControl>
            </div>
        </div >
    );
}

export default Sidebar;
