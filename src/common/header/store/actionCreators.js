import * as actionTypes from './actionType'
import { fromJS } from "immutable";
import axios from 'axios';

//不用导出的方法 分类放好
const ChangeList = (data) => ({
    type: actionTypes.CHANGE_LIST,
    data: fromJS(data),
    totalPage: fromJS(Math.ceil(data.length / 10))
})

export const SearchFouceAction = () => ({
    type: actionTypes.SEARCH_FOUCE
})

export const SearchBlurAction = () => ({
    type: actionTypes.SEARCH_BLUR
})

export const MouseEnter = () => ({
    type:actionTypes.MOUSE_ENTER
})

export const MouseLeave = () => ({
    type:actionTypes.MOUSE_LEAVE
})

export const ChangePage = (page, totalPage) => ({
    type:actionTypes.GHANGE_PAGE,
    page: fromJS(page),
    totalPage: fromJS(totalPage),
})

//redux-thunk
export const getList = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json').then((res) => {
            const data = res.data;
            dispatch(ChangeList(data.data));
        }).catch(() => {
            console.log("error");
        })
    }
}