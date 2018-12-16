import React from 'react';
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper
} from './style';
import { actionCreators } from './store'

const Header = (props) => {

    const {focused, handleInputFocus, handleInputBlur} = props;

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
                        />
                    </CSSTransition>
                    <i className={ focused ? 'focused iconfont' : 'iconfont' }> &#xe623;</i>
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
    );
}

const mapStateToProps = (state) => {
    return {
        //immutable语法
        focused: state.header.get('focused')
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus() {
            dispatch(actionCreators.SearchFouceAction());
        },

        handleInputBlur() {
            dispatch(actionCreators.SearchBlurAction());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);