import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CaseListItem } from './components/caseListItem/caseListItem';
import { CREATE_TODO } from './store/constants';

export function App() {
  const stateTodoList = useSelector((state) => state.todoList);

  const dispatch = useDispatch();
  const [getValue, setValue] = useState('');

  const todoItem = {
    title: getValue,
    id: Date.now(),
    done: true,
  };

  const creatorTodo = (value = {}) => {
    dispatch({ type: CREATE_TODO, payload: value });
    setValue('');
  };

  return (
    <>
      {' '}
      <div className="center">
        <div className="App">
          <TextField
            id="outlined-basic"
            label="describe the task"
            variant="outlined"
            value={getValue}
            onChange={(e) => setValue(e.target.value)}
          />
          <Button
            size="large"
            onClick={() => creatorTodo(todoItem)}
            variant="contained"
            endIcon={<AddCircleIcon />}
          >
            Add Task
          </Button>
        </div>
      </div>
      {stateTodoList.map((item) => (
        <CaseListItem key={item.id} stateItem={item} />
      ))}
    </>
  );
}
