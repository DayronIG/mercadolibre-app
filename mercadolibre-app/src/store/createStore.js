/* eslint-disable no-undef */
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory } from 'history';
import sagas from './sagas';
import reducers from './reducers';
import {  persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import storage from 'redux-persist/lib/storage'
import {APP_NAME} from '../utils/constants';
const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel2
  };

export const history = createBrowserHistory();
const persistedReducer = persistReducer(persistConfig, reducers);


export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = applyMiddleware(sagaMiddleware);

 // const composeEnhancers =
 //   __DEV__ && typeof window === 'object' ? composeWithDevTools : compose;
 const env = process.env.NODE_ENV
  const devTool = composeWithDevTools({ name: APP_NAME })
 const enhancer = env !== 'production' ? devTool(middlewares) : middlewares

  const store = createStore(persistedReducer, enhancer);
  // TODO remove
 // __DEV__ && persistor.purge();
  sagaMiddleware.run(sagas);
  return store;
}
