import BackButton from '../../components/BackButton/BackButton'
import './_LoginPage.scss'
import { Button, ButtonGroup, Checkbox } from '@mui/material'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function LoginPage() {
	const [isChecked, setIsChecked] = useState(false)

	const handleCheckboxChange = (event) => {
		setIsChecked(event.target.checked)
	}

	return (
		<div className="homePages white">
			<BackButton />

			<h1 className="white">Confirm Login</h1>
			<Checkbox
				checked={isChecked}
				onChange={handleCheckboxChange}
				color="secondary"
			/>
			<ButtonGroup variant="contained" className="buttongrup">
				{isChecked ? (
					<Link to={'/login-page/app-page'}>
						<Button color="success" className="button-LOG IN">
							LOG IN
						</Button>
					</Link>
				) : (
					<Button disabled className="button-LOG IN">
						LOG IN
					</Button>
				)}
			</ButtonGroup>
		</div>
	)
}

export default LoginPage
