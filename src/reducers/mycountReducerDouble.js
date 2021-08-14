const initState = {};
export default function (state = initState, action) {
    switch (action.type) {
        case "INCREMENT2":
            console.log("INCREMENT2");
            return { count: state.count + 2 }
        case "DICREMENT2":
            console.log("DICREMENT2");
            return { count: state.count - 2 }

        default:
            return { count: 800 }
    }
}