import * as actionTypes from './actionType'
import { fromJS } from "immutable";
import axios from 'axios';

export const SearchFouceAction = () => ({
    type: actionTypes.SEARCH_FOUCE
})

export const SearchBlurAction = () => ({
    type: actionTypes.SEARCH_BLUR
})

export const ChangeList = (data) => ({
    type: actionTypes.CHANGE_LIST,
    data: fromJS(data)
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