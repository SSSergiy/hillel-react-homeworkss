import { CustomButtonProps } from '../../types/type'
import Groups2Icon from '@mui/icons-material/Groups2'
import PublicIcon from '@mui/icons-material/Public'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'
import Button from '@mui/material/Button'
import { FC } from 'react'

const CustomButton: FC<CustomButtonProps> = ({
	title,
	itemMaps,
	stateButtons,
}) => {
	function iconElementFunc() {
		let iconElement
		if (title === 'People' || title === 'Люди') {
			iconElement = <Groups2Icon />
		} else if (title === 'Planets' || title === 'Планети') {
			iconElement = <PublicIcon />
		} else if (title === 'Starthips' || title === 'Зоряні кораблі') {
			iconElement = <RocketLaunchIcon />
		}
		return iconElement
	}

	return (
		<Button
			variant="contained"
			color="success"
			onClick={() => stateButtons()}
			disabled={itemMaps[title]}
			startIcon={iconElementFunc()}
		>
			{title}
		</Button>
	)
}

export default CustomButton
