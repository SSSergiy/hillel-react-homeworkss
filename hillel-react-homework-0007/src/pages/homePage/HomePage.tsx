import './_HomePage.scss'
import { Button, ButtonGroup, Toolbar } from '@mui/material'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import {Masonry} from '@mui/lab';
import { styled } from '@mui/material/styles';
import { imgResursMasonry }from "../../imagesResurses/imgResursMasonry"

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
