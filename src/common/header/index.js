import React, {Component} from 'react';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWripper
} from './style'

class Header extends Component {
    render() {
        return (
            <HeaderWrapper>
                <Logo />
                <Nav>
                    <NavItem className = 'left active'>首页</NavItem>
                    <NavItem className = 'left'>下载app</NavItem>
                    <NavItem className = 'right'>登陆</NavItem>
                    <NavItem className = 'right'>
                        <i className='iconfont'> &#xe636;</i>
                    </NavItem>
                    <SearchWripper>
                        <NavSearch></NavSearch>
                        <i className='iconfont'> &#xe623;</i>
                    </SearchWripper>
                    <Addition>
                        <Button className = 'writting'>
                            <i className='iconfont'> &#xe617;</i>
                            写文章
                        </Button>
                        <Button className = 'reg'>注册</Button>
                    </Addition>
                </Nav>
            </HeaderWrapper>
        );
    }
}

export default Header;