import * as actionTypes from './actionType'
import { fromJS } from "immutable";

//immutable库，避免不小心改变state的情况
const defaultState = fromJS({
  focused: false,
  mouseIn: false,
  list: [],
  page: 1,
  totalPage: 1
});

export default (state = defaultState, action) => {
  if ( action.type === actionTypes.SEARCH_FOUCE ) {
    //immutable对象的set方法，会结合之前immutable对象的值和设置的值
    //返回一个全新的对象
    return state.set('focused', true);
  }
  if ( action.type === actionTypes.SEARCH_BLUR ) {
    return state.set('focused', false);
  }
  if ( action.type === actionTypes.CHANGE_LIST ) {
    //list是immutable数组
    return state.merge({
      list: action.data,
      totalPage: action.totalPage
    })
    //等价于
    // return state.set('list', action.data)
    //     .set('totalPage', action.totalPage);
  }
  if ( action.type === actionTypes.MOUSE_ENTER ) {
    // console.log("123");
    return state.set('mouseIn', true);
  }
  if ( action.type === actionTypes.MOUSE_LEAVE ) {
    // console.log("456");
    return state.set('mouseIn', false);
  }
  if ( action.type === actionTypes.GHANGE_PAGE ) {
    if ( action.page < action.totalPage ) {
      return state.set('page', action.page + 1)
    } else {
      return state.set('page', 1)
    }
  }
  return state;
}