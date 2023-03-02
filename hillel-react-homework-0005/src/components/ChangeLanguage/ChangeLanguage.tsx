import { useTranslation } from 'react-i18next';


export const ChangeLanguage = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <>
      <button onClick={() => changeLanguage('en')}>EN</button>
      <button onClick={() => changeLanguage('uk')}>UK</button>
    </>
  );
};
