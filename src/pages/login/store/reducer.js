import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes'

//immutable库，避免不小心改变state的情况
const defaultState = fromJS({
  login: false
});

export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }

}