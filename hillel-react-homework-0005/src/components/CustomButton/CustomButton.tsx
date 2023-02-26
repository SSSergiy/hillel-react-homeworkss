import Button from '@mui/material/Button';

const CustomButton = (props) => {
  return (
    <Button
      variant='contained'
      color='success'
      onClick={() => props.stateButtons()}
      disabled={props.itemMaps[props.title]}
    >
      {props.title}
    </Button>
  );
};

export default CustomButton;
