import { Button } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';

export const CaseCreatorButton = () => {
  return (
    <div>
      <Button variant="contained" endIcon={<AddCircleIcon/>}> Add Task</Button>
    </div>
  );
};
