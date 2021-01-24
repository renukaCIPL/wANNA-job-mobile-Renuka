import {
  GET_DATA_REQUEST,
  GET_DATA_SUCCESS,
  GET_DATA_REJECT,
} from '../actions/types';

export const getDataRequest = () => ({type: GET_DATA_REQUEST, payload: null});
export const getDataSuccess = (list) => ({
  type: GET_DATA_SUCCESS,
  payload: list,
});

export const getDataReject = (error) => ({
  type: GET_DATA_REJECT,
  payload: error,
});
