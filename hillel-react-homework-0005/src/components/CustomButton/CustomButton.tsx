import Button from '@mui/material/Button';
import { FC } from 'react';
interface CustomButtonProps {
  title: string;
  itemMaps: { [key: string]: boolean };
  stateButtons: () => void;
  }
const CustomButton: FC<CustomButtonProps> = ({ title, itemMaps, stateButtons }) => {
  return (
    <Button
      variant='contained'
      color='success'
      onClick={() => stateButtons()}
      disabled={itemMaps[title]}
    >
      {title}
    </Button>
  );
};

export default CustomButton;
