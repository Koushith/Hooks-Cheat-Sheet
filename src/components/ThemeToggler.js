import React, { useContext } from 'react';

import ThemeContext from '../context/ThemeContext';

const ThemeToggler = () => {
  const [themeMode, setThemeMode] = useContext(ThemeContext);
  return (
    <div onClick={() => (themeMode === 'light' ? 'dark' : 'light')}>
      <span>{themeMode === 'light' ? 'Turn Off' : 'lights On'}</span>
    </div>
  );
};

export default ThemeToggler;
