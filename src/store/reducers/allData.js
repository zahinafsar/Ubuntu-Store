export default function allData(state = [], action) {
    switch (action.type) {
        case "set_data":
            return state = action.data.data
        default:
            return state
    }
}