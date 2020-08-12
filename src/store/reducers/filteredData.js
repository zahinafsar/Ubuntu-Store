export default function filteredData(state = [], action) {
    switch (action.type) {
        case "filter_data":
            return state = action.data
        default:
            return state
    }
}