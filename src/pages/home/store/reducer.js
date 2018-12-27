import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes'

//immutable库，避免不小心改变state的情况
const defaultState = fromJS({
    topicList: [],
    articleList:[],
    recommendList:[],
    writerList:[],
    articlePage: 1,
    showScroll: false
});

export default (state = defaultState, action) => {
    if(action.type === actionTypes.CHANGE_HOME_DATA) {
        return state.merge({
            topicList: fromJS(action.topicList),
            articleList: fromJS(action.articleList),
            recommendList: fromJS(action.recommendList),
            writerList: fromJS(action.writerList)
        })
    } else if (action.type === actionTypes.ADD_HOME_LIST) {
        //concat 追加
        return state.merge({
            'articleList': state.get('articleList').concat(action.list),
            'articlePage': action.nextPage
        })

    } else if (action.type === actionTypes.SCROLL_SHOW_TRUE) {
        return state.set('showScroll', false)
    } else if (action.type === actionTypes.SCROLL_SHOW_FALSE) {
        return state.set('showScroll', true)
    }

    return state;
}