export const FETCH_USERS = 'FETCH_USERS';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';

export const fetchUsers = (limit, skip) => ({
  type: FETCH_USERS,
  payload: { limit, skip },
});

export const setUsers = (users) => ({
  type: FETCH_USERS_SUCCESS,
  payload: { users },
})


fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}&skip=${skip}`)





Изменить функцию fetchUsersFromApi, чтобы она принимала limit и skip из параметров, а не захардкодила их:

javascript
Copy code
const fetchUsersFromApi = (limit, skip) =>
fetch(https://jsonplaceholder.typicode.com/todos?_limit=${limit}&skip=${skip});

Создать компонент для отображения пользователей и их подгрузки при скролле:

javascript
Copy code
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../redux/actions/users';

const UserList = () => {
const dispatch = useDispatch();
const { users, limit, skip, isLoading } = useSelector((state) => state.users);

useEffect(() => {
dispatch(fetchUsers(limit, skip));
}, [dispatch, limit, skip]);

const handleScroll = (e) => {
const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;
if (scrollTop + clientHeight >= scrollHeight && !isLoading) {
dispatch(fetchUsers(limit, skip + limit));
}
};

return (
<div onScroll={handleScroll} style={{ overflowY: 'scroll', maxHeight: '500px' }}>
{users.map((user) => (
<div key={user.id}>
<p>{user.title}</p>
</div>
))}
{isLoading && <p>Loading...</p>}
</div>
);
};

export default UserList;

Изменить редьюсер, чтобы обрабатывать новых пользователей и isLoading флаг:

javascript
Copy code
import { FETCH_USERS, FETCH_USERS_SUCCESS } from '../actions/users';

const initialState = {
users: [],
limit: 3,
skip: 0,
isLoading: false,
};

const usersReducer = (state = initialState, action) => {
switch (action.type) {
case FETCH_USERS:
return {
...state,
limit: action.payload.limit,
skip: action.payload.skip,
isLoading: true,
};
case FETCH_USERS_SUCCESS:
return {
...state,
users: [...state.users, ...action.payload.users],
isLoading: false,
};
default:
return state;
}
};

export default usersReducer;

Создать корневой сага для userWatcher и добавить его в роутер:

javascript
Copy code
import { all } from 'redux-saga/effects';
import { userWatcher } from './sagas/users';

export default function* rootSaga() {
yield all([userWatcher()]);
}

import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);