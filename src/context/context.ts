import * as React from 'react';
import { IAppContextProviderProps } from './models';

// const AppContext = React.createContext('Calc');
export const ThemeContext = React.createContext<IAppContextProviderProps | null>(null);

/* export const AppContextProvider = ({ children }: IAppContextProviderProps) => {
  return <AppContext.
}; */
