import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore } from 'redux';
import { todoReducer } from '../reducers/todoReducer';
export const store = createStore(todoReducer, composeWithDevTools());
