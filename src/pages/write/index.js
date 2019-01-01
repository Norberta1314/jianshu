import React, { PureComponent } from 'react';
import {Redirect} from 'react-router-dom';
import { connect } from 'react-redux';

class Write extends PureComponent {
  render() {
    const {logIn} = this.props;
    if(logIn) {
      return (
        <div>
          xiewenzhangg
        </div>
      );
    } else {
      return <Redirect to='/login'/>
    }

  }

  componentDidMount() {
  }
}

const mapState = (state) => ({
  logIn: state.getIn(['login', 'login'])
})

export default connect(mapState, null)(Write);