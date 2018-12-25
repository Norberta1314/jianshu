
import { fromJS } from 'immutable';

//immutable库，避免不小心改变state的情况
const defaultState = fromJS({
    topicList:[{
        id: 1,
        title: '社会热点',
        imgUrl: 'http://pic.90sjimg.com/design/01/50/45/23/591459062ba92.png'
    }, {
        id: 2,
        title: '手绘',
        imgUrl: 'http://pic.90sjimg.com/design/01/50/45/23/591459062ba92.png'
    }]
});

export default (state = defaultState, action) => {

    return state;
}