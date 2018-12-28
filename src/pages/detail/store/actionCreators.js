import axios from 'axios';
import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'

const addDetail = (result) => ({
  type: actionTypes.GET_DETAIL,
  result: fromJS(result)
})

export const getDetail = () => {
  return (dispatch) => {
    axios.get('/api/detail.json').then((res) => {
      const result = res.data.data;
      console.log(result)
      dispatch(addDetail(result))
    })
  }
}