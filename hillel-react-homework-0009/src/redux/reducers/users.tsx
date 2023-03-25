import { FETCH_USERS, FETCH_USERS_SUCCESS } from '../actions/actions';

const initialState = {
  users: [],
  limit: 3,
  skip: 0,
  isLoading: false,
};

const usersReducer = (state = initialState, action) => {
  console.log('REDUSER------', state);
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
        users: [...action.payload.users],

        isLoading: false,
      };
    default:
      return state;
  }
};

export default usersReducer;
