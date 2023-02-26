import Button from '@mui/material/Button';
import ListItem from '@mui/material/ListItem';
import Stack from '@mui/material/Stack';

const TitleComponent = (props) => {
  return (
    <ListItem >
      <Stack direction='row' spacing={2}>
        <Button
          variant='contained'
          color='success'
          style={{ width: 350 }}
          onClick={props.handleClick}
        >
          {props.itemName}
        </Button>
      </Stack>
    </ListItem>
  );
};

export default TitleComponent;
