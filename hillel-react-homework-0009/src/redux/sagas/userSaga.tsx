import {
  call,
  put,
  takeLatest,
  throttle as throttleSaga,
} from 'redux-saga/effects';
import {
  GET_USERS_FAILED,
  GET_USERS_REQUESTED,
  GET_USERS_SUCCESS,
  LOAD_MORE_USERS_REQUESTED,
  LOAD_MORE_USERS_SUCCESS,
} from '../types';

const apiUrl = 'https://jsonplaceholder.typicode.com/users';

function* getApi() {

  try {
    const response = yield call(fetch, apiUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = yield response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

function* fetchUsers() {
  try {
    const users = yield call(getApi);
    yield put({ type: GET_USERS_SUCCESS, users: users });
  } catch (e) {
    yield put({ type: GET_USERS_FAILED, message: e.message });
  }
}

function* loadMoreUsers() {
  try {
    const users = yield call(getApi);
    yield put({
      type: LOAD_MORE_USERS_SUCCESS,
      users: users,
      currentPage: currentPage + 1,
    });
  } catch (e) {
    console.log(e);
  }
}
// function* watchLoadMore() {
//   yield throttle(5000, 'scroll', function* () {
//     const windowHeight = window.innerHeight;
//     const documentHeight = document.body.scrollHeight;
//     const scrolled = window.scrollY;

//     if (windowHeight + scrolled >= documentHeight) {
//       yield call(fetchUsers);
//     }
//   });
// }

function* userSaga() {
  yield takeLatest(GET_USERS_REQUESTED, fetchUsers);
  yield throttleSaga(5000, LOAD_MORE_USERS_REQUESTED, loadMoreUsers);
  // yield watchLoadMore();
}

export default userSaga;
