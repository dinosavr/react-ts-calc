import { ReactNode } from 'react';

export interface WrapperProps {
  children: ReactNode | undefined;
  id?: string;
  className?: string;
}
