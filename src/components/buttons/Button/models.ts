import { ReactNode } from 'react';

export interface ButtonProps {
  children: ReactNode | undefined;
  id?: string;
  className?: string;
  value?: string;
  disabled?: boolean;
  active?: boolean;
  submit?: boolean;
  onClick?: (value: string) => void;
}
