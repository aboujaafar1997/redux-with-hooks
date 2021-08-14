const initState = { count: 565 };
export default function (state = initState, action) {
    console.log(state);
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + 1 }
        case "DICREMENT":
            return { count: state.count - 1 }
    
        default:
            return state
    }
}