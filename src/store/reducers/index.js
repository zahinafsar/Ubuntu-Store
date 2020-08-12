import { combineReducers } from 'redux'
import allData from './allData'
import filteredData from './filteredData'

const reducers = combineReducers({
    allData,
    filteredData
})

export default reducers;