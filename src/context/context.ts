import * as React from 'react';
import { IAppContextProviderProps } from './models';

export const AppContext = React.createContext<IAppContextProviderProps | null>(null);