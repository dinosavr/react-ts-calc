import { ReactNode } from 'react';

export interface ButtonProps {
  children: ReactNode | undefined;
  id?: string;
  className?: string;
  disabled?: boolean;
  active?: boolean;
  submit?: boolean;
}
