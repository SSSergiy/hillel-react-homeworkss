import { Button } from '@mui/material'
import { CREATE_TODO } from '../../store/constants'
import {useDispatch, useSelector} from "react-redux"



export const CaseCreatorButton = () => {


  const stateTodoList = useSelector(state => state.todoList)
	const dispatch = useDispatch();
  const creatorTodo = () => {
    dispatch({type:CREATE_TODODO})
  }
  console.log(stateTodoList);
	return (
		<div> 
     <Button onClick={creatorTodo} variant="contained">Add Task</Button>
		</div>
	) 
};