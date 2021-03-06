import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes'

//immutable库，避免不小心改变state的情况
const defaultState = fromJS({
  login: false
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_LOGIN:
      return state.set('login', action.value)
    case actionTypes.CHANGE_LOGOUT:
      return state.set('login', action.value)
    default:
      return state;
  }

}