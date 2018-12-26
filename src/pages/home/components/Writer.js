import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
    WriterWrapper,
    WriterTitle,
    WriterItem,
    WriterInfo,
    WriterFouce
} from '../style';

class Writer extends Component {
    render() {
        const {list} = this.props;
        return (
            <WriterWrapper>
                <WriterTitle>
                    <span className='title'>
                    推荐作者
                    </span>
                    <span className='title right'>
                    换一批
                    </span>
                </WriterTitle>

                {
                    list.map((item) => {
                        return (
                            <WriterItem
                                key={item.get('id')}
                            >
                                <img
                                    className='writer-pic'
                                    src={item.get('imgUrl')}
                                    alt=''
                                />
                                <WriterFouce>
                                    +关注
                                </WriterFouce>
                                <WriterInfo>
                                    <h3 className='title'>
                                        {item.get('title')}
                                    </h3>
                                    <p className='desc'>
                                        {item.get('desc')}
                                    </p>
                                </WriterInfo>
                            </WriterItem>
                        )
                    })
                }
            </WriterWrapper>
        );
    }
}

const mapStateToProps = (state) => ({
    list: state.getIn(['home', 'writerList'])
})

export default connect(mapStateToProps, null)(Writer);