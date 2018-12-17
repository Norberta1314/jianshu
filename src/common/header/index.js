import React, { Component } from 'react';
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    SearchWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoList,
    SearchInfoItem,
    Addition,
    Button,
} from './style';
import { actionCreators } from './store'

class Header extends Component {

    getListArea = () => {
        if ( this.props.focused ) {
            return (
                <SearchInfo>
                    <SearchInfoTitle>热门搜索
                        <SearchInfoSwitch>换一批</SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {
                            this.props.list.map((item) => {
                                return <SearchInfoItem
                                    key = {item}
                                >{item}</SearchInfoItem>
                            })
                        }
                    </SearchInfoList>
                </SearchInfo>
            )
        }
    }

    render() {
        const {focused, handleInputFocus, handleInputBlur, list} = this.props;
        return (
            <HeaderWrapper>
                <Logo/>
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载app</NavItem>
                    <NavItem className='right'>登陆</NavItem>
                    <NavItem className='right'>
                        <i className='iconfont'> &#xe636;</i>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={ focused }
                            timeout={ 200 }
                            classNames="slide"
                        >
                            <NavSearch
                                className={ focused ? 'focused' : '' }
                                onFocus={ handleInputFocus }
                                onBlur={ handleInputBlur }
                            >
                            </NavSearch>
                        </CSSTransition>
                        <i className={ focused ? 'focused iconfont' : 'iconfont' }> &#xe623;</i>
                        { this.getListArea() }
                    </SearchWrapper>
                    <Addition>
                        <Button className='writting'>
                            <i className='iconfont'> &#xe617;</i>
                            写文章
                        </Button>
                        <Button className='reg'>注册</Button>
                    </Addition>
                </Nav>
            </HeaderWrapper>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        //immutable语法
        focused: state.getIn(['header', 'focused']),
        //等价于
        //focused: state.get('header').get('focused')
        list: state.getIn(['header', 'list'])

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus() {
            dispatch(actionCreators.getList());
            dispatch(actionCreators.SearchFouceAction());
        },

        handleInputBlur() {
            dispatch(actionCreators.SearchBlurAction());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);