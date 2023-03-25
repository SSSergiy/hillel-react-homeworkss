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