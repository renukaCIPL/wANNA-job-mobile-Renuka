import {createStore, combineReducers} from 'redux';
import restuarantReducer from './reducers/restuarantReducer';

const rootReducer = combineReducers({
  restuarants: restuarantReducer,
});

const configureStore = () => createStore(rootReducer);

export default configureStore;
