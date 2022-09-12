import { createContext, FC, ReactElement, useState } from 'react';

// import { useLocalStorage } from '../../hooks/useLocalStorage';
// import { axiosApiInstance } from '../../api/apiRequest';
// import { BACKEND_TOKEN } from '../../constants/localStorage';

export const ThemeContext = createContext({});

interface Props {
  children: ReactElement;
}

export const ThemeProvider: FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState('dark');

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};
