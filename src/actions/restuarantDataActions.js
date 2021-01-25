import {
  GET_DATA_REQUEST,
  GET_DATA_SUCCESS,
  GET_DATA_REJECT,
} from '../actions/types';

import axios from 'axios';

export const getDataRequest = () => {
  console.log('GetUsers');

  return (dispatch) => {
    console.log('get data request');
    dispatch({
      type: GET_DATA_REQUEST,
      payload: null,
    });

    try {
      axios
        .get(
          `https://github.com/Anna-works/wANNA-job-mobile/blob/master/dummyData/applications.json`,
        )
        .then((res) => {
          const response = res.data;

          dispatch({
            type: GET_DATA_SUCCESS,
            payload: response,
          });
        });
    } catch (error) {
      dispatch({
        type: GET_DATA_REJECT,
        payload: error,
      });
    }
  };
};
