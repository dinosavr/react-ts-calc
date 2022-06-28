import { ReactNode } from "react";

export interface IAppContextProviderProps {
  expr?: String;
  setExpr?: React.Dispatch<React.SetStateAction<String>>;
  answer?: String;
  setAnswer?: React.Dispatch<React.SetStateAction<String>>;
}

/* export interface IAppContextProviderProps {
  children: ReactNode | undefined;
} */