import {fromJS} from "immutable";
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
  title: '',
  content: ''
})

export default (state = defaultState, action) => {
  if (action.type === actionTypes.GET_DETAIL) {
    return state.merge({
      title: action.result.get('title'),
      content: action.result.get('content')
    })
  }
  return state
}