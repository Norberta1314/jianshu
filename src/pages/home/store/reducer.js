import { fromJS } from 'immutable';

//immutable库，避免不小心改变state的情况
const defaultState = fromJS({
    topicList: [{
        id: 1,
        title: '社会热点',
        imgUrl: 'http://pic.90sjimg.com/design/01/50/45/23/591459062ba92.png'
    }, {
        id: 2,
        title: '手绘',
        imgUrl: 'http://pic.90sjimg.com/design/01/50/45/23/591459062ba92.png'
    }],

    articleList: [{
        id: 1,
        title: '35岁程序员裸辞两月，找不到工作，感慨程序员是碗青春饭！',
        desc: '今天一位网友发帖：裸辞两个月了，投了简历石沉大海，难道35岁以上就没一点机会了吗？ 程序员这行业就是吃青春饭的，于是也有许多这个行业的新手开始追...',
        imgUrl: 'https://upload-images.jianshu.io/upload_images/138513-1c760482c56ddf86.jpeg?imageMogr2/auto-orient/',
    }, {
        id: 2,
        title: '新手刚开始写手帐要写什么内容？2019年要买什么新的手帐本',
        desc: '经常有小可爱们留言或者私信我： 刚开始了解手帐，不知道手帐要写些什么内容，你能给我些建议吗？ 马上要2019年了，又到了立flag的时候了，新年...',
        imgUrl: 'https://upload-images.jianshu.io/upload_images/138513-1c760482c56ddf86.jpeg?imageMogr2/auto-orie'
    }]
});

export default (state = defaultState, action) => {

    return state;
}