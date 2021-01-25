import {
  GET_DATA_REQUEST,
  GET_DATA_SUCCESS,
  GET_DATA_REJECT,
} from '../actions/types';

import {dummyData} from '../../dummyData';

const initialState = {
  list: dummyData,
  fetching: false,
  error: null,
};

const restuarantReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_REQUEST:
      return {...state, fetching: true, error: null};
    case GET_DATA_SUCCESS:
      return {
        ...state,
        list: dummyData,
        fetching: false,
        error: null,
      };
    case GET_DATA_REJECT:
      return {
        ...state,
        list: [],
        error: action.payload,
        fetching: false,
      };

    default:
      return state;
  }
};

export default restuarantReducer;
