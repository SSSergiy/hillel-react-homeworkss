import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { CHANGE_TODO } from '../../store/constants';

export const CaseListItem = ({ stateItem }) => {
  const dispatch = useDispatch();
  const changeTodo = () => {
    dispatch({
      type: CHANGE_TODO,
      payload: 
        {id:stateItem.id}
      
    });

  
  };

  return (
    <List onClick={changeTodo}>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon color='secondary'>
            {stateItem.done ? (
              <CheckCircleOutlineIcon className='secondary' />
            ) : (
              <HighlightOffIcon className='secondary-color' />
            )}
          </ListItemIcon>
          <ListItemText primary={stateItem.title} />
        </ListItemButton>
      </ListItem>
    </List>
  );
};
