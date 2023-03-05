import { Masonry } from '@mui/lab'
import { Button, ButtonGroup, Toolbar } from '@mui/material'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'
import { Link } from 'react-router-dom'
import { imgResursMasonry } from "../../imagesResurses/imgResursMasonry"
import './_HomePage.scss'

function HomePage() {
	const Label = styled(Paper)(({ theme }) => ({
		backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
		...theme.typography.body2,
		padding: theme.spacing(0.5),
		textAlign: 'center',
		color: theme.palette.text.secondary,
		borderBottomLeftRadius: 0,
		borderBottomRightRadius: 0,
	}));
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
			<section>
				<h1>star Wars</h1>
				<p>Welcome to our home page where you can dive into the exciting world of Star Wars! Our app provides information about the people, planets and starships that are found in this famous cosmic sphere.</p>

<p>All about favorite characters such as Luke Skywalker, Han Solo and Princess Leia are typed in, as well as new characters that have appeared in recent films. Explore planets like Tatooine, Hoth and Coruscant and learn more about them than ever before.</p>

<p>If you are passionate about starships then you will not be disappointed! We received detailed information about famous ships such as the Millennium Falcon, Darth Vader Interceptor and Star Destroyer.</p>

<p>Our app is the complete reference for any Star Wars fan. Don't wait and start your exciting journey through the galaxy right now!</p></section>
			<Box sx={{ width: "100%", minHeight: 829 ,margin:"0 auto"}}>
      <Masonry columns={3} spacing={2}>
        {imgResursMasonry.map((item, index) => (
          <div key={index}>
            <Label>{index + 1}</Label>
            <img
              src={`${item.img}?w=162&auto=format`}
              srcSet={item.img}
              alt={item.title}
              loading="lazy"
              style={{
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
                display: 'block',
                width: '100%',
              }}
            />
          </div>
        ))}
      </Masonry>
    </Box>
		</div>
	)
}

export default HomePage
