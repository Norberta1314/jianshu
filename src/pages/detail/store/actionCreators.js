import axios from 'axios';
import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'

const addDetail = (result) => ({
  type: actionTypes.GET_DETAIL,
  result: fromJS(result)
});

export const getDetail = (id) => {
  return (dispatch) => {
    axios.get('/api/detail.json?id='+ id).then((res) => {
      const result = res.data.data;
      dispatch(addDetail(result))
    })
  }
};