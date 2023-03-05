import { ThemeContext,LanguageContext } from '../../LanguageProvider/LanguageProvider'
import { useContext } from 'react'
import { data } from '../../translations/transletor.json'
import { Button, ButtonGroup } from '@mui/material'
import Switch from '@mui/material/Switch';

const ThemeToggle = () => {
  const { language } = useContext(LanguageContext)
  const { theme, toggleTheme } = useContext(ThemeContext)
	return (
		// <Button onClick={toggleTheme} 	variant="contained"
		// color="success">
		// 	{theme === 'dark' ? data[language].decor[0].titleDark : data[language].decor[0].titleLight}
		// </Button>
	<>
				<span>
					<Switch
					onChange={toggleTheme}
					inputProps={{ 'aria-label': 'controlled' }}
					/>
					{theme === 'dark' ? data[language].decor[0].titleDark : data[language].decor[0].titleLight}
				
				</span>
	</>
	)
}
export default ThemeToggle
