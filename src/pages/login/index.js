import React, { PureComponent } from 'react';
import {Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionCreators from './store/actionCreators'
import {
  LoginWrapper,
  LoginBox,
  LoginInput,
  Button
} from './style';

class Login extends PureComponent {
  render() {
    const {login, logIn} = this.props;
    if(!logIn) {
      return (
        <LoginWrapper>
          <LoginBox>
            <LoginInput placeholder='账号' innerRef={(input) => {this.account = input}}/>
            <LoginInput placeholder='密码' type='password' innerRef={(input) => {this.password = input}}/>
            <Button onClick={() => login(this.account, this.password)}>登陆</Button>
          </LoginBox>

        </LoginWrapper>
      );
    } else {
            return <Redirect to='/'/>
    }

  }

  componentDidMount() {
  }
}

const mapState = (state) => ({
  logIn: state.getIn(['login', 'login'])
})

const mapDispatch = (dispatch) => ({
  login(account, password) {
    dispatch(actionCreators.login(account, password))
  }
})

export default connect(mapState, mapDispatch)(Login);