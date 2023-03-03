import { LanguageContext } from '../../LanguageProvider/LanguageProvider'
import { useContext } from 'react'

function ChangeLanguageContextComponent() {
	const { language, toggleLanguage } = useContext(LanguageContext)

	return (
		<div>
			{/* <p>{language === 'en' ? 'Hello' : 'Привет'}</p> */}
			<button onClick={toggleLanguage}>Toggle Language EN or UK</button>
		</div>
	)
}

export default ChangeLanguageContextComponent
