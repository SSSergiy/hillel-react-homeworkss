import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Button } from '@mui/material';

export function CaseCreatorButton() {
  return (
    <div>
      <Button variant="contained" endIcon={<AddCircleIcon />}>
        {' '}
        Add Task
      </Button>
    </div>
  );
}
