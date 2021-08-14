const initState = { count: 0 };
export default function (state=initState, action) {
    switch (action.type) {
        case "INCREMENT3":
            return { count: state.count + 1 }
        case "DICREMENT3":
            return { count: state.count - 1 }
        case "GET":
            return { count: action.payload }
        default:
            return state
    }
}