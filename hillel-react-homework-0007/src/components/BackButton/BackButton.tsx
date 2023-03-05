import { useNavigate } from 'react-router-dom';
import { Button, ButtonGroup } from '@mui/material'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

function BackButton() {
  let navigate = useNavigate();



  return (
   
      <Button variant="contained"
        color="success"
        onClick={() => navigate(-1)} startIcon={<ArrowBackIosIcon />} >BackButton</Button>
        // startIcon={<ArrowBackIosIcon />}
    // <button onClick={handleClick}>Bagtsgstgstgck</button>
  );
}

export default BackButton;