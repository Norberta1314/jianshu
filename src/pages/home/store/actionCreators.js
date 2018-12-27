import axios from 'axios';
import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'

const changeHomeData = (result) => ({
    type: actionTypes.CHANGE_HOME_DATA,
    topicList: result.topicList,
    articleList: result.articleList,
    recommendList: result.recommendList,
    writerList: result.writerList
})

const addHomeList = (result, nextPage) => ({
    type: actionTypes.ADD_HOME_LIST,
    list: fromJS(result),
    nextPage: nextPage
})

export const changeScrollTrue = () => ({
    type: actionTypes.SCROLL_SHOW_FALSE
})

export const changeScrollFalse = () => ({
    type: actionTypes.SCROLL_SHOW_TRUE
})

export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then((res) => {
            const result = res.data.data;
            const action = changeHomeData(result);
            dispatch(action);
        })
    }
}

export const getMoreList = (page) => {
    return (dispatch) => {
        axios.get('/api/homeList.json?page=' + page).then((res) => {
            const result = res.data.data;
            const action = addHomeList(result, page + 1);
            dispatch(action);
        })
    }
}