import { ADD_INPUT_FOUCE, DEL_INPUT_FOUCE } from "../../../store/actionType";

const defaultState = {
    focused: false
};

export default (state = defaultState, action) => {
    if (action.type === ADD_INPUT_FOUCE) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.focused = true;
        // console.log("focus")
        // console.log(newState);
        return newState;
    }
    if (action.type === DEL_INPUT_FOUCE) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.focused = false;
        // console.log("blur")
        // console.log(newState)
        return newState;
    }
    return state;
}