import { FETCH_USERS, FETCH_USERS_SUCCESS } from '../actions/actions';

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

// const defaultState = {
//   users: [],
// };

// export const SET_USERS = 'SET_USERS';
// export const FETCH_USERS = 'FETCH_USERS';

// export default function userReducer(state = defaultState, action) {
//   switch (action.type) {
//     case SET_USERS:
//       return { ...state, users: action.payload };
//   }
//   return state;
// }

// export const setUsers = (payload) => ({ type: SET_USERS, payload });
// export const fetchUsers = () => ({ type: FETCH_USERS });
