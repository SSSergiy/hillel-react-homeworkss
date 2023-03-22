import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../redux/reducers/users';
import Card from './CardComponent';

function Users() {
  const users = useSelector((state) => state.userReducer.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const handleScroll = (event) => {
    const { scrollTop, clientHeight, scrollHeight } = event.target;
    if (Math.ceil(scrollTop + clientHeight) === Math.ceil(scrollHeight)) {
      dispatch(fetchUsers());
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
    </div>
  );
}
export default Users;
