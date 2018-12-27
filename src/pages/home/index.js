import React, { Component } from 'react';
import { connect } from 'react-redux';
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import * as actionCreators from './store/actionCreators'
import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
    BackTop
} from './style'

class Home extends Component {
    handleScrollTop() {
        window.scrollTo(0, 0)
    }

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
                    { this.props.showScroll ? <BackTop onClick={ this.handleScrollTop }>顶部</BackTop> : '' }

                </HomeWrapper>
            </div>
        );
    }

    componentDidMount() {
        this.props.changeHomeData();
        this.bindEvents();
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.props.changeScrollShow)
    }

    bindEvents() {
        window.addEventListener('scroll', this.props.changeScrollShow)
    }
}

const mapState = (state) => ({
    showScroll: state.getIn(['home', 'showScroll'])
})

const mapDispatch = (dispatch) => ({
    changeHomeData() {
        const action = actionCreators.getHomeInfo();
        dispatch(action)
    },
    changeScrollShow() {
        if(document.documentElement.scrollTop > 400) {
            dispatch(actionCreators.changeScrollTrue())
        } else {
            dispatch(actionCreators.changeScrollFalse())
        }
    }
})

export default connect(mapState, mapDispatch)(Home);