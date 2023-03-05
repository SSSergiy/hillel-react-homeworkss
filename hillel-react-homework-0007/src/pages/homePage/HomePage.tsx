import './_HomePage.scss'
import { AppBar, Box, Button, ButtonGroup, Toolbar } from '@mui/material'
import { Link, } from "react-router-dom";
import BackButton from "../../components/BackButton/BackButton"

function HomePage() {
	return (
		<div className="homePage">
			<Box className="boxez">
				<AppBar className="apbar">
					<Toolbar className="toolbar">
						<ButtonGroup variant="contained" className="buttongrup">
							<Link to={"/login-page"}>
							
							<Button color="success" className="button-LOG IN">LOG IN</Button>
							</Link>
							<Button color="success" className="button-LOG AUT">LOG AUT</Button>
						</ButtonGroup>
					</Toolbar>
				</AppBar>
			</Box>
		</div>
	)
}

export default HomePage
