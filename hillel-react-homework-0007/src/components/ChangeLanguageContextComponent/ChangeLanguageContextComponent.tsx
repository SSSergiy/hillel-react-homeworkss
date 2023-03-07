import { LanguageContext } from '../../LanguageProvider/LanguageProvider'
import { data } from '../../translations/transletor.json'
import { Button } from '@mui/material'
import { motion } from 'framer-motion'
import { useContext } from 'react'

function ChangeLanguageContextComponent() {
	const { language, toggleLanguage } = useContext(LanguageContext)

	return (
		<motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
			<Button variant="contained" color="success" onClick={toggleLanguage}>
				{data[language].decor[0].title}{' '}
			</Button>
		</motion.div>
	)
}

export default ChangeLanguageContextComponent
