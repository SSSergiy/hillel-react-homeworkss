// import { useState, useCallback } from 'react';
// import { v4 as uuidv4 } from 'uuid';
// import './App.css';
import Api from './api/Api';
import Button from './components/Button/Button';
import { titles } from './translations/translations';

import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

export default function App() {
  const [stateButtons, setStateButtons] = useState({
    Peoples: true,
    Planets: false,
    Starships: false
  });

  return (
    <table>
      <thead>
        <tr>
          <td>
            {titles.map((itemMap) => (
              <Button
                key={uuidv4()}
                itemMaps={stateButtons}
                title={itemMap.title}
                stateButtons={() =>
                  setStateButtons({
                    ...stateButtons,
                    [titles.filter((itemFilter) => itemFilter.title !== itemMap.title)[0].title]: false,
                    [titles.filter((itemFilter) => itemFilter.title !== itemMap.title)[1].title]: false,
                    [itemMap.title]: !stateButtons[itemMap.title]
                  })
                 }
              />
            ))}
          </td>
        </tr>
      </thead>
      <Api stateCategories={stateButtons} />
    </table>
  );
}