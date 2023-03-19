import { call, put, takeEvery } from "redux-saga/effects";
import { GET_USERS_FAILED, GET_USERS_REQUESTED, GET_USERS_SUCCESS } from '../types'

const apiUrl = "https://jsonplaceholder.typicode.com/users";

function* getApi() {
  try {
    const response = yield call(fetch, apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = yield response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

function* fetchUsers(action) {
  try {
    const users = yield call(getApi);
    yield put({ type: GET_USERS_SUCCESS, users: users });
  } catch (e) {
    yield put({ type: GET_USERS_FAILED, message: e.message });
  }
}

function* userSaga() {
  yield takeEvery(GET_USERS_REQUESTED, fetchUsers);
}

export default userSaga;