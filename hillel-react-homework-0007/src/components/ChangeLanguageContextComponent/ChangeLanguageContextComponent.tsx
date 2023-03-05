import { LanguageContext } from '../../LanguageProvider/LanguageProvider'
import { data } from '../../translations/transletor.json'
import { useContext } from 'react'
import { Button,ButtonGroup } from '@mui/material'

function ChangeLanguageContextComponent() {
	const { language, toggleLanguage } = useContext(LanguageContext)

	return (
		<div>
			<Button variant="contained"
			color="success" onClick={toggleLanguage}>{data[language].decor[0].title} </Button>
		</div>
	)
}

export default ChangeLanguageContextComponent
