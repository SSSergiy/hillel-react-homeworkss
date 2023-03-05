import { useNavigate } from 'react-router-dom';
import { Button,ButtonGroup } from '@mui/material'

function BackButton() {
  let navigate = useNavigate();



  return (
    <ButtonGroup variant="contained" className="buttongrup">
      <Button className="button-LOG IN" onClick={() => navigate(-1)}>Bagtsgstgstgck</Button>
      </ButtonGroup>
    // <button onClick={handleClick}>Bagtsgstgstgck</button>
  );
}

export default BackButton;