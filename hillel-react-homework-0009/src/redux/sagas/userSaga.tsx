import { FETCH_USERS, setUsers } from '../../redux/reducers/users';

import { call, put, takeEvery } from 'redux-saga/effects';

const fetchUsersFromApi = () =>
  fetch('https://jsonplaceholder.typicode.com/users?_limit=10');

function* fetchUserWorker() {
  const data = yield call(fetchUsersFromApi);
  const json = yield call(() => new Promise((res) => res(data.json())));
  yield put(setUsers(json));
}

export function* userWatcher() {
  yield takeEvery(FETCH_USERS, fetchUserWorker);
}
