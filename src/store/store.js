import {createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import ReduxThunk from 'redux-thunk';
import _ from 'lodash';

import rootReducer from './reducers/rootReducer';
import getStoredState from 'redux-persist/es/getStoredState';

const migrate = async state => {
  if (_.isEmpty(state)) {
    try {
      const asyncState = await getStoredState({
        key: 'userInfo',
        transforms: [encryptor],
        storage: AsyncStorage,
      });
      if (!_.isEmpty(asyncState)) {
        return asyncState;
      }
    } catch (ex) {}
  }
  return state;
};

const persistConfig = {
  key: 'userInfo',
  storage: AsyncStorage,
  whitelist: ['user'],
  blacklist: [],
  migrate,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(ReduxThunk));
const persistor = persistStore(store);
export {store, persistor};
