import * as actionTypes from './actionType'

const defaultState = {
    focused: false
};

export default (state = defaultState, action) => {
    if (action.type === actionTypes.SEARCH_FOUCE) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.focused = true;
        // console.log("focus")
        // console.log(newState);
        return newState;
    }
    if (action.type === actionTypes.SEARCH_BLUR) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.focused = false;
        // console.log("blur")
        // console.log(newState)
        return newState;
    }
    return state;
}