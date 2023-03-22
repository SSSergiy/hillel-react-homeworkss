import * as type from '../types';

const initialState = {
  users: [],
  loading: false,
  error: null,
  currentPage: 1,
};

export default function users(state = initialState, action) {
  switch (action.type) {
    case type.GET_USERS_REQUESTED:
      return {
        ...state,
        loading: true,
      };

    case type.GET_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.users,
      };
    
      case type.LOAD_MORE_USERS_REQUESTED:
      return {
        ...state,
        users: [...state.users, ...action.payload.users],
        currentPage: action.payload.currentPage,
      };

    case type.GET_USERS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      };

    default:
      return state;
  }
}
