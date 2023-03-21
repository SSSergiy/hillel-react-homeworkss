// import { call, put, takeEvery } from "redux-saga/effects";
// import { GET_USERS_FAILED, GET_USERS_REQUESTED, GET_USERS_SUCCESS } from '../types'

// const apiUrl = "https://jsonplaceholder.typicode.com/users";

// function* getApi() {
//   try {
//     const response = yield call(fetch, apiUrl, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json"
//       }
//     });
//     const data = yield response.json();
//     return data;
//   } catch (error) {
//     throw error;
//   }
// }

// function* fetchUsers(action) {
//   try {
//     const users = yield call(getApi);
//     yield put({ type: GET_USERS_SUCCESS, users: users });
//   } catch (e) {
//     yield put({ type: GET_USERS_FAILED, message: e.message });
//   }
// }

// function* userSaga() {
//   yield takeEvery(GET_USERS_REQUESTED, fetchUsers);
// }

// export default userSaga;


// const apiUrl = "https://jsonplaceholder.typicode.com/albums/1/photos";


import { call, put, takeLatest } from "redux-saga/effects";
import { GET_USERS_FAILED, GET_USERS_REQUESTED, GET_USERS_SUCCESS, LOAD_MORE_USERS_REQUESTED, LOAD_MORE_USERS_SUCCESS } from '../types'
import { throttle as throttleSaga } from 'redux-saga/effects';

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
    yield put({ type: LOAD_MORE_USERS_SUCCESS, users: users });
  } catch (e) {
    console.log(e);
  }
}

function* userSaga() {
  yield takeLatest(GET_USERS_REQUESTED, fetchUsers);
  yield throttleSaga(
    5000, // interval in milliseconds
    LOAD_MORE_USERS_REQUESTED, // action type
    loadMoreUsers
  );
}

export default userSaga; 








// import { call, put, takeLatest } from "redux-saga/effects";
// import { GET_USERS_FAILED, GET_USERS_REQUESTED, GET_USERS_SUCCESS, LOAD_MORE_USERS_REQUESTED } from '../types'
// import { throttle as throttleSaga } from 'redux-saga/effects';

// const apiUrl = "https://jsonplaceholder.typicode.com/users";

// function* getApi() {
//   try {
//     const response = yield call(fetch, apiUrl, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json"
//       }
//     });
//     const data = yield response.json();
//     return data;
//   } catch (error) {
//     throw error;
//   }
// }

// function* fetchUsers() {
//   try {
//     const users = yield call(getApi);
//     yield put({ type: GET_USERS_SUCCESS, users: users });
//   } catch (e) {
//     yield put({ type: GET_USERS_FAILED, message: e.message });
//   }
// }


// function* loadMoreUsers() {
//   try {
//   const users = yield call(getApi);
//   yield put({ type: LOAD_MORE_USERS_SUCCESS, users: users });
//   } catch (e) {
//   console.log(e);
//   }
//   }

//   function* userSaga() {
//     yield takeLatest(GET_USERS_REQUESTED, fetchUsers);
//     yield throttleSaga(
//       5000, // interval in milliseconds
//       LOAD_MORE_USERS_REQUESTED, // action type
//       loadMoreUsers
//       );
//     }
    
//     export default userSaga;


    // function* userSaga() {
    //   yield throttleSaga(
    //     5000, // interval in milliseconds
    //     GET_USERS_REQUESTED, // action type
    //     fetchUsers
    //   );
    // }
    
    // export default userSaga;




// import { call, put, throttle } from "redux-saga/effects";
// import { GET_USERS_FAILED, GET_USERS_REQUESTED, GET_USERS_SUCCESS } from '../types'
// import { throttle as throttleSaga } from 'redux-saga/effects';

// const apiUrl = "https://jsonplaceholder.typicode.com/users";

// function* getApi() {
//   try {
//     const response = yield call(fetch, apiUrl, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json"
//       }
//     });
//     const data = yield response.json();
//     return data;
//   } catch (error) {
//     throw error;
//   }
// }

// function* fetchUsers() {
//   try {
//     const users = yield call(getApi);
//     yield put({ type: GET_USERS_SUCCESS, users: users });
//   } catch (e) {
//     yield put({ type: GET_USERS_FAILED, message: e.message });
//   }
// }

// function* userSaga() {
//   yield throttle(
//     5000, // интервал в миллисекундах
//     GET_USERS_REQUESTED, // тип экшена
//     fetchUsers
//   );
// }

// export default userSaga;



// import { call, put, throttle } from "redux-saga/effects";
// import { GET_USERS_FAILED, GET_USERS_REQUESTED, GET_USERS_SUCCESS } from '../types'
// import throttleAction from 'redux-saga-throttle-action';

// const apiUrl = "https://jsonplaceholder.typicode.com/users";

// function* getApi() {
//   try {
//     const response = yield call(fetch, apiUrl, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json"
//       }
//     });
//     const data = yield response.json();
//     return data;
//   } catch (error) {
//     throw error;
//   }
// }

// function* fetchUsers() {
//   try {
//     const users = yield call(getApi);
//     yield put({ type: GET_USERS_SUCCESS, users: users });
//   } catch (e) {
//     yield put({ type: GET_USERS_FAILED, message: e.message });
//   }
// }

// function* userSaga() {
//   yield throttleAction(
//     5000, // интервал в миллисекундах
//     GET_USERS_REQUESTED, // тип экшена
//     fetchUsers
//   );
// }

// export default userSaga;