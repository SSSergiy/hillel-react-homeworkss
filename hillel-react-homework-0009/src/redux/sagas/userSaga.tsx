import { FETCH_USERS, setUsers } from '../actions/actions';

import { call, put, takeEvery } from 'redux-saga/effects';

const fetchUsersFromApi =  (limit, skip) =>
fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}&skip=${skip}`);

function* fetchUserWorker() {
  const data = yield call(fetchUsersFromApi,4,0);
  const json = yield call(() => new Promise((res) => res(data.json())));
  yield put(setUsers(json));
  console.log(json);
  
  
}

export function* userWatcher() {
  yield takeEvery(FETCH_USERS, fetchUserWorker);
}

// fetch('https://jsonplaceholder.typicode.com/todos');
// fetch('https://jsonplaceholder.typicode.com/todos?_limit=3&skip=3');