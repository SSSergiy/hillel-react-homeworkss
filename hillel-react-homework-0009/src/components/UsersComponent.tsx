import { useState } from 'react';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../redux/actions/users';
import Card from './CardComponent';
import { loadMoreUsers } from "../redux/actions/users"
import { GET_USERS_REQUESTED } from '../redux/types'

export function Users() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const loading = useSelector((state) => state.users.loading);
  const error = useSelector((state) => state.users.error);
  
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    dispatch({ type: GET_USERS_REQUESTED });
  }, [dispatch]);
 
  const handleScroll = (event) => {
    const { scrollTop, clientHeight, scrollHeight } = event.target;
    if (Math.ceil(scrollTop + clientHeight) === Math.ceil(scrollHeight)) {
      dispatch(loadMoreUsers( currentPage + 1));
      setCurrentPage(currentPage + 1);
    console.log("posle")

    }
  };
  
  return (
    <div onScroll={handleScroll} style={{overflow: "scroll", height: "300px"}}>
        {loading && <p>Loading...</p>}
        {users.length > 0 &&
          users.map((user) => <Card user={user} key={user.id} />)}
        {users.length === 0 && !loading && <p>No users :( </p>}
        {error && !loading && <p>{error}</p>}
      </div>
  );
}


// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getUsers } from '../redux/actions/users';
// import Card from './CardComponent';
// import { loadMoreUsers } from "../redux/actions/users"
// import { GET_USERS_REQUESTED } from '../redux/types'

// function Users() {
//   const dispatch = useDispatch();
//   const users = useSelector((state) => state.users.users);
//   // const users = useSelector((state) => state.users.users);
//   const loading = useSelector((state) => state.users.loading);
//   const error = useSelector((state) => state.users.error);

//   useEffect(() => {
//     dispatch({ type: GET_USERS_REQUESTED });
//   }, [dispatch]);

//   const handleScroll = (event) => {
//     const { scrollTop, clientHeight, scrollHeight } = event.target;
//     if (scrollTop + clientHeight === scrollHeight) {
//       dispatch(loadMoreUsers(currentPage + 1)); // pass in the current page number + 1
//     }
//   };
  
//   return (
//     <><div onScroll={handleScroll}>
//       {users.loading && <p>Loading...</p>}
//       {users.length > 0 &&
//         users.map((user) => <Card user={user} key={user.id} />)}
//       {users.length === 0 && !loading && <p>No users :( </p>}
//       {error && !loading && <p>{error}</p>}
//       </div>


//     </>
//   );
// }
// export default Users;

// useEffect(() => {
//   dispatch(getUsers());
// }, [dispatch]);

// const handleScroll = (event) => {
//   const { scrollTop, clientHeight, scrollHeight } = event.target;
//   if (scrollTop + clientHeight === scrollHeight) {
//   dispatch(loadMoreUsers());
//   }
//   };
// {/* <div onScroll={handleScroll}>
// {users.map((user) => (
// <div key={user.id}>{user.name}</div>
// ))}
// </div> */}