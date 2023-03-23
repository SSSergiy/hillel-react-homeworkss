import { FETCH_USERS, setUsers } from '../actions/actions';

import { call, put, takeEvery } from 'redux-saga/effects';

const fetchUsersFromApi = (limit, skip) =>
  fetch(
    `https://jsonplaceholder.typicode.com/todos?_limit=${limit}&_skip=${skip}`
  );

function* fetchUserWorker(action) {
  const { limit, skip } = action.payload;

  const data = yield call(fetchUsersFromApi, limit, skip );
  const json = yield call(() => new Promise((res) => res(data.json())));
  yield put(setUsers(json));
}

export function* userWatcher() {
  yield takeEvery(FETCH_USERS, fetchUserWorker);
}
