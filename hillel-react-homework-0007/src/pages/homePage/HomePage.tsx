import { imgResursMasonry } from '../../imagesResurses/imgResursMasonry'
import './_HomePage.scss'
import { Masonry } from '@mui/lab'
import { Button, ButtonGroup, Toolbar } from '@mui/material'
import {Box,Paper} from '@mui/material'
// import { motion } from "framer-motion";
import { styled } from '@mui/material/styles'
import { Link } from 'react-router-dom'
import { motion, Variants } from "framer-motion";



const cardVariants: Variants = {
  offscreen: {
    y: 300
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

const hue = (h) => `hsl(${h}, 100%, 50%)`;

function Card({ image}) {
  const background = `linear-gradient(306deg, ${hue(79)}, ${hue(80)})`;

  return (
    <motion.div
      className="card-container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <div className="splash" style={{ background }} />
      <motion.div className="card" variants={cardVariants}>
        <img src={image} alt="food" />
      </motion.div>
    </motion.div>
  );
}

function HomePage() {
	// const Label = styled(Paper)(({ theme }) => ({
	// 	backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
	// 	...theme.typography.body2,
	// 	padding: theme.spacing(0.5),
	// 	textAlign: 'center',
	// 	color: theme.palette.text.secondary,
	// 	borderBottomLeftRadius: 0,
	// 	borderBottomRightRadius: 0,
	// }))
	return (
		<div className="homePage">
			<Toolbar className="toolbar">
					<Link to={'/login-page'}>
					<motion.div
      className="box"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
						>
				<ButtonGroup variant="contained" className="buttongrup">
						<Button color="success" className="button-LOG IN">
							LOG IN
						</Button>
				</ButtonGroup>
							
		</motion.div>
					</Link>
			</Toolbar>
			<section>
				<center>
					<h1>Star Wars</h1>
				</center>
				<ul>
					<li>
						<p>
							Welcome to our home page where you can dive into the exciting
							world of <strong>Star Wars</strong>! Our app provides information
							about the people, planets and starships that are found in this
							famous cosmic sphere.
						</p>
					</li>

					<li>
						<p>
							All about favorite characters such as <b>Luke Skywalker</b>,{' '}
							<b>Han Solo</b> and
							<b>Princess Leia</b> are typed in, as well as new characters that
							have appeared in recent films. Explore planets like Tatooine, Hoth
							and Coruscant and learn more about them than ever before.
						</p>
					</li>

					<li>
						<p>
							If you are passionate about<strong> starships</strong> then you
							will not be disappointed! We received detailed information about
							famous ships such as the Millennium Falcon, Darth Vader
							Interceptor and Star Destroyer.
						</p>
					</li>

					<li>
						<p>
							Our app is the complete reference for any{' '}
							<strong>Star Wars</strong> fan. Don't wait and start your exciting
							journey through the galaxy right now!
						</p>
					</li>
				</ul>
			</section>
			{/* <Box sx={{ width: '100%', minHeight: 829, margin: '0 auto' }}>
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
			</Box> */}
{imgResursMasonry.map(({img},index) => (
    <Card image={img}   key={index} />
  ))}

		</div>
	)
}

export default HomePage
