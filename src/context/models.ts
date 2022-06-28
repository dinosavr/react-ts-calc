import { ReactNode } from "react";

export interface IAppContextProviderProps {
  expr?: string;
  setExpr?: React.Dispatch<React.SetStateAction<string>>;
  answer?: string;
  setAnswer?: React.Dispatch<React.SetStateAction<string>>;
}
