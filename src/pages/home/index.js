import React, { Component } from 'react';
import { connect } from 'react-redux';
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import  * as actionCreators  from './store/actionCreators'
import {
    HomeWrapper,
    HomeLeft,
    HomeRight
} from './style'

class Home extends Component {
    render() {
        return (
            <div>
                <HomeWrapper>
                    <HomeLeft>
                        <img
                            className='banner-img'
                            src="//upload.jianshu.io/admin_banners/web_images/4581/a62223ffbbb6a2d881afe2cb1fa6db6695bf9fd0.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
                            alt=''
                        />
                        <Topic/>
                        <List/>
                    </HomeLeft>
                    <HomeRight>
                        <Recommend/>
                        <Writer/>
                    </HomeRight>
                </HomeWrapper>
            </div>
        );
    }

    componentDidMount() {
        this.props.changeHomeData();
    }
}

const mapDispatch = (dispatch) => ({
    changeHomeData() {
        const action = actionCreators.getHomeInfo();
        dispatch(action)
    }
})

export default connect(null, mapDispatch)(Home);