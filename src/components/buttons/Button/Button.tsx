import './Button.scss';
import * as React from 'react';
// import classNames from 'classnames';
import { ButtonProps } from './models';

const Button: React.FC<ButtonProps> = ({ children, id, className, value, onClick }) => {
  return (
    <button id={id} className={className} value={value} onClick={onClick?(() => onClick(value)):(() => {})}>
      <span>{ children }</span>
    </button>
  );
};

export default Button;
