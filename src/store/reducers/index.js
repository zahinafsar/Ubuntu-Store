import { combineReducers } from 'redux'
import allData from './allData'
import filteredData from './filteredData'
import adminLogin from './adminLogin'

const reducers = combineReducers({
    allData,
    filteredData,
    adminLogin
})

export default reducers;