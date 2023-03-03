import { LanguageContext } from './LanguageProvider/LanguageProvider'
import Api from './api/Api'
import ChangeLanguageContextComponent from './components/ChangeLanguageContextComponent/ChangeLanguageContextComponent'
import CustomButton from './components/CustomButton/CustomButton'
import { data } from './translations/transletor.json'
import { CategoryState } from './types/type'
import { AppBar, Box, Toolbar } from '@mui/material'
import List from '@mui/material/List'
import { useContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

export default function App(): JSX.Element {
	const { language} = useContext(LanguageContext)

	const [stateButtons, setStateButtons] = useState<CategoryState>({
		[data[language].decor[0].titleButtons[0].title]: true,
		[data[language].decor[0].titleButtons[1].title]: false,
		[data[language].decor[0].titleButtons[2].title]: false,
	})

	const renderButton = data[language].decor[0].titleButtons.map((itemMap) => (
		<CustomButton
			key={uuidv4()}
			itemMaps={stateButtons}
			title={itemMap.title}
			stateButtons={(): void => changeButtons(itemMap)}
		/>
	))
	function changeButtons(itemMap) {
		const newButtonsState = {}
		data[language].decor[0].titleButtons.forEach((itemFilter) => {
			newButtonsState[itemFilter.title] =
				itemFilter.title === itemMap.title
					? !stateButtons[itemMap.title]
					: false
		})
		setStateButtons(newButtonsState)
	}

	return (
		<Box>
			<AppBar>
				<Toolbar sx={{ display: 'flex', justifyContent: 'space-around' }}>
					{renderButton}
					<ChangeLanguageContextComponent />
				</Toolbar>
			</AppBar>
			<List dense sx={{ marginTop: 15 }}>
				<Api stateCategories={stateButtons} />
			</List>
		</Box>
	)
}
