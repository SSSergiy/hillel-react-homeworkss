import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import createSagaMiddleware from 'redux-saga';


import userReducer from './reducers/users.js';
import rootSaga from './sagas/index';


const rootReducer = combineReducers({
  userReducer,
});

const sagaMiddleware = createSagaMiddleware();

const enhancer = compose(
  applyMiddleware(sagaMiddleware),
  composeWithDevTools()
);

const store = createStore(rootReducer, enhancer);

sagaMiddleware.run(rootSaga);
export default store;
// const enhancer = compose(
//   applyMiddleware(sagaMiddleware),
//   composeWithDevTools()
// );

// const rootReducer = combineReducers({
//   userReducer,
// });
// const store = createStore(rootReducer, enhancer);
// sagaMiddleware.run(rootSaga);

// export default store;
