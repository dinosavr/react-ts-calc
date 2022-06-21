import './Wrapper.scss';
import * as React from 'react';
import { WrapperProps } from './models';

const Wrapper: React.FC<WrapperProps> = ({ children, id, className }) => {
  return (
    <div id={id} className={className}>
      {children}
    </div>
  );
};

export default Wrapper;
