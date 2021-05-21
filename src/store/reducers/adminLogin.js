export default function adminLogin(state = false, action) {
    switch (action.type) {
        case "set_admin":
            return state = action.data
        default:
            return state
    }
}