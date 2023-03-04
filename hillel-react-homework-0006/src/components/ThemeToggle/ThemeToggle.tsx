import React, { useContext } from 'react';
import { ThemeContext} from '../../LanguageProvider/LanguageProvider'
// import './dark-theme.css';
// import './light-theme.css';

 const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
      {theme === 'dark' ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
    </button>
  );
}
export default ThemeToggle