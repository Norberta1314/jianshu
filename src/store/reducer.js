import { combineReducers } from 'redux-immutable';
//as是ES6的语法 取别名
import { reducer as headerReducer } from '../common/header/store'
import { reducer as homeReducer } from '../pages/home/store'

export default combineReducers({
    header: headerReducer,
    home: homeReducer
})
