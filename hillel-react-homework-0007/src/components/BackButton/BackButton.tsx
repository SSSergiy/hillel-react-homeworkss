import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

function BackButton() {
	let navigate = useNavigate()

	return (
		<Button
			variant="contained"
			color="success"
			onClick={() => navigate(-1)}
			startIcon={<ArrowBackIosIcon />}
		>
			BackButton
		</Button>
	)
}

export default BackButton
