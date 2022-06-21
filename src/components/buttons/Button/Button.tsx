import './Button.scss';
import * as React from 'react';
// import classNames from 'classnames';
import { ButtonProps } from './models';

const Button: React.FC<ButtonProps> = ({ children, id, className }) => {
  return (
    <button id={id} className={className}>
      <span>{ children }</span>
    </button>
  );
};

export default Button;
