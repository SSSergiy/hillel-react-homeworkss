import BackButton from '../../components/BackButton/BackButton'
import './_LoginPage.scss'
import { Button, ButtonGroup, Checkbox } from '@mui/material'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useRef } from "react";
import { motion } from "framer-motion";
import { useFollowPointer } from "./use-follow-pointer";

function LoginPage() {
	const [isChecked, setIsChecked] = useState(false)

	const handleCheckboxChange = (event) => {
		setIsChecked(event.target.checked)
	}
	const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);
	return (
		<div className="homePages white">
			 <motion.div
      ref={ref}
      className="box"
      animate={{ x, y }}
      transition={{
        type: "spring",
        damping: 3,
        stiffness: 50,
        restDelta: 0.001
      }}
    />
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
