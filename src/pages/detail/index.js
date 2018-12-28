import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actionCreators from './store/actionCreators'
import {
  DetailWrapper,
  DetailHeader,
  Content
} from './style';

class Detail extends Component {
  render() {
    return (
      <DetailWrapper>
        <DetailHeader>{this.props.title}</DetailHeader>
        <Content
          dangerouslySetInnerHTML={{__html: this.props.content}}
        />
      </DetailWrapper>
    );
  }

  componentDidMount() {
        this.props.getDetail();
  }
}

const mapState = (state) => ({
  title: state.getIn(['detail', 'title']),
  content: state.getIn(['detail', 'content'])
})

const mapDispatch = (dispatch) => ({
  getDetail() {
    dispatch(actionCreators.getDetail())
  }
})

export default connect(mapState,mapDispatch)(Detail);