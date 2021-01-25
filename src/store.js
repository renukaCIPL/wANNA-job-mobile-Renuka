import {createStore, combineReducers, applyMiddleware} from 'redux';
import restuarantReducer from './reducers/restuarantReducer';
import thunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage: storage,
};
const rootReducer = combineReducers({
  restuarants: restuarantReducer,
});

const middlewares = [thunk];

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  let store = createStore(persistedReducer, applyMiddleware(...middlewares));

  let persistor = persistStore(store);
  return {store, persistor};
};
