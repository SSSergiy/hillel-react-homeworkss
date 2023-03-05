import './_HomePage.scss'
import { Button, ButtonGroup, Toolbar } from '@mui/material'
import { Link } from 'react-router-dom'

function HomePage() {
	return (
		<div className="homePage">
			<Toolbar className="toolbar">
				<ButtonGroup variant="contained" className="buttongrup">
					<Link to={'/login-page'}>
						<Button color="success" className="button-LOG IN">
							LOG IN
						</Button>
					</Link>
				</ButtonGroup>
			</Toolbar>
		</div>
	)
}

export default HomePage
