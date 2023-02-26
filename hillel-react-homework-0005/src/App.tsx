// import { useState, useCallback } from 'react';
// import { v4 as uuidv4 } from 'uuid';
// import './App.css';
import Api from './api/Api';
import CustomButton from './components/CustomButton/CustomButton';
import { titles } from './translations/translations';

import List from '@mui/material/List';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

import { AppBar, Box, Toolbar } from '@mui/material/';

export default function App() {
  const [stateButtons, setStateButtons] = useState({
    Peoples: true,
    Planets: false,
    Starships: false
  });

  return (
    <Box>
      <AppBar>
        <Toolbar sx={{display:"flex",justifyContent:"space-around"}}>
          {titles.map((itemMap) => (
            <CustomButton
              key={uuidv4()}
              itemMaps={stateButtons}
              title={itemMap.title}
              stateButtons={() =>
                setStateButtons({
                  ...stateButtons,
                  [titles.filter(
                    (itemFilter) => itemFilter.title !== itemMap.title
                  )[0].title]: false,
                  [titles.filter(
                    (itemFilter) => itemFilter.title !== itemMap.title
                  )[1].title]: false,
                  [itemMap.title]: !stateButtons[itemMap.title]
                })
              }
            />
          ))}
        </Toolbar>
      </AppBar>
      <List dense sx={{ marginTop: 10 }}>
        <Api stateCategories={stateButtons} />
      </List>
    </Box>
  );
}
