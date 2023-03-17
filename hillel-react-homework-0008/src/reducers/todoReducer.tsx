import { CHANGE_TODO, CREATE_TODO } from '../store/constants';

const initialState = {
  todoList: [
    {
      title: 'Smth very important',
      id: 1,
      done: false
    },
    {
      title: 'Another very important thing',
      id: 2,
      done: false
    },
    {
      title: 'Ordinary thing',
      id: 3,
      done: true
    }
  ]
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TODO:
      return {
        ...state,
        todoList: [...state.todoList, action.payload]
      };
    case CHANGE_TODO:
      return {
        ...state,
        todoList: state.todoList.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              done: !item.done
            };
          }
          return item;
        })
      };
    default:
      return state;
  }
};
