import { createContext, useEffect, useState } from 'react'

export const LanguageContext = createContext()

export const LanguageProvider = ({ children }) => {
	const [language, setLanguage] = useState('en')

	const toggleLanguage = () => {
		useEffect(
			setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'uk' : 'en')),
			[language]
		)
	}

	return (
		<LanguageContext.Provider value={{ language, toggleLanguage }}>
			{children}
		</LanguageContext.Provider>
	)
}
