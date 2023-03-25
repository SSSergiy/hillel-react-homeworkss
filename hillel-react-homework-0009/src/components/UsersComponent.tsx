import { useState, useEffect } from 'react';
import Card from './CardComponent';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../redux/actions/actions';

function Users() {
  const dispatch = useDispatch();
  const { users, limit, skip, isLoading } = useSelector(
    (state) => state.userReducer
  );
  const [limitCount, setLimitCount] = useState(3);

  useEffect(() => {
    dispatch(fetchUsers(limit, skip));
  }, [dispatch, limit, skip]);

  const handleScroll = (e) => {
    const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;
    if (Math.ceil(scrollTop + clientHeight) === Math.ceil(scrollHeight)) {
      dispatch(fetchUsers(limit + limitCount, skip));
      setLimitCount((prevCount) => prevCount + 3);
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