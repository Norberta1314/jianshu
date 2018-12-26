import styled from 'styled-components'

export const HomeWrapper = styled.div`
  overflow: hidden;
  width: 960px;
  margin: 0 auto;
`

export const HomeLeft = styled.div`
  margin-left: 15px;
  padding-top: 30px;
  width: 625px;
  float: left;
  .banner-img {
  width: 625px;
  height: 270px;
  }
`

export const HomeRight = styled.div`
  width: 280px;
  float: right;
`

export const TopicWrapper = styled.div`
  padding: 20px 0 10px 0;
  overflow: hidden;
  margin-left: -18px;
  border-bottom: 1px solid #dcdcdc;
`

export const TopicItem = styled.div`
  float: left;
  background: #f7f7f7;
  height: 32px;
  line-height: 32px;
  margin-left: 18px;
  margin-bottom: 18px;
  padding-right: 10px;
  font-size: 14px;
  color: #000;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  .topic-pic {
    display: block;
    margin-right: 10px;
    float: left;
    width: 32px;
    height: 32px;
  }
`

export const ListItem = styled.div`
  overflow: hidden;
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  .list-pic {
    display: block;
    float: right;
    width: 125px;
    height: 100px;
    border-radius: 10px;
  }
`

export const ListInfo = styled.div`
  width: 500px;
  float: left;
  .title {
    line-height: 27px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }
  .desc {
    line-height: 24px;
    font-size: 13px;
    color: #999;
  }
`

export const RecommendWrapper = styled.div`
  margin: 20px 0;
  width: 280px;
`

export const RecommendItem = styled.div`
  width: 280px;
  height: 50px;
  background: url(${(props) => props.imgUrl});
  background-size: contain;
`

export const WriterWrapper = styled.div`
  width: 278px;
 // border: 1px solid #dcdcdc;
  //border-radius: 3px;
  height: 300px;
  line-height: 300px;
`

export const WriterTitle = styled.div`
  overflow: hidden;
  margin-bottom: 10px;
  .title {
    display: block;
    float: left;
    font-size: 14px;
    color: #969696;
    height: 20px;
    line-height: 20px;
  }
  .right {
    float: right;
  }
`

export const WriterItem = styled.div`
  width: 278px;
  height: 48px;
  line-height: 48px;
  margin-bottom: 15px;
  .writer-pic {
    display: block;
    float: left;
    width: 48px;
    border-radius: 24px;
  }
`

export const WriterInfo = styled.div`
  overflow: hidden;
  padding-left: 10px;
  box-sizing: padding-box;
  .title {
    float: left;
    height: 24px;
    width: 150px;
    line-height: 24px;
    color: #333;
  }
  
  .desc {
    float: left;
    height: 24px;
    width: 150px;
    line-height: 24px;
    font-size: 12px;
    color: #969696;
  }
`

export const WriterFouce = styled.div`
  display: block;
  float: right;
  font-size: 13px;
  color: #42c02e;
`

export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  margin: 30px  0;
  line-height: 40px;
  text-align: center;
  background: #a5a5a5;
  border-radius: 20px;
  color: #fff;
  cursor: pointer;
`