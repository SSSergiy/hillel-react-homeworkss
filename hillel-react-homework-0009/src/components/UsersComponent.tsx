import { useEffect } from 'react';

// import { fetchUsers } from '../redux/reducers/users';
import Card from './CardComponent';

import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../redux/actions/actions';

function Users() {
  const dispatch = useDispatch();
  const { users, limit, skip, isLoading } = useSelector(
    (state) => state.userReducer
  );
  // console.log(users);

  useEffect(() => {
    dispatch(fetchUsers(limit, skip));
  }, [dispatch, limit, skip]);

  const handleScroll = (e) => {
    const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;
    if (Math.ceil(scrollTop + clientHeight) === Math.ceil(scrollHeight)) {
      dispatch(fetchUsers(limit+3, skip));
    }
  };

  return (
    <div
      onScroll={handleScroll}
      style={{ overflow: 'scroll', height: '300px' }}
    >
      {users.map((user) => (
        <Card user={user} key={user.id} />
      ))}
      {isLoading && <p>Loading...</p>}
    </div>
  );
}
export default Users;

// const users = useSelector((state) => state.userReducer.users);
// const dispatch = useDispatch();

// useEffect(() => {
//   dispatch(fetchUsers());
// }, []);

// const handleScroll = (event) => {
//   const { scrollTop, clientHeight, scrollHeight } = event.target;
//   if (Math.ceil(scrollTop + clientHeight) === Math.ceil(scrollHeight)) {
//     dispatch(fetchUsers());
//   }
// };
