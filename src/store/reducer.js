import { combineReducers } from "redux";
//as是ES6的语法 取别名
import { reducer as headerReducer } from '../common/header/store'

export default combineReducers({
    header: headerReducer,
})