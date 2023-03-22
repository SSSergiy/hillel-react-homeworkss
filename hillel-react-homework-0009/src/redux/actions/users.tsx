import * as type from '../types';


export function getUsers(users) {
  console.log(users);
  
  
  return {
    type: type.GET_USERS_REQUESTED,
    payload: users,
  };
}



export const loadMoreUsers = (page) => {
  console.log(page);
  
  return {
    type: type.LOAD_MORE_USERS_REQUESTED,
    payload: {
      page: page,
      // any other necessary parameters
    },
  };
};


