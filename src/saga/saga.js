import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';
import {fetchData} from '../api';
import {GET_DATA_REQUEST} from '../actions/types';
import {getDataSuccess, getDataReject} from '../actions/types';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* getRestuarantData(action) {
  try {
    const response = yield call(fetchData);
    yield put(getDataSuccess(response));
  } catch (e) {
    yield put(getDataReject(e));
  }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* mySaga() {
  yield takeEvery(GET_DATA_REQUEST, getRestuarantData);
}

export default mySaga;
