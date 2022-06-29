import './Button.scss';
import * as React from 'react';
import { ButtonProps } from './models';

const Button: React.FC<ButtonProps> = ({ children, id, className, value, innerHtml, onClick }) => {
  const isInnerHtml = Boolean(innerHtml);
  function getInnerHtml() {
    return {__html: innerHtml};
  }

  return (
    <button id={id} className={className} value={value} onClick={onClick?(() => onClick(value)):(() => {})}>      
      {isInnerHtml
        ? <span className='innerText' dangerouslySetInnerHTML={getInnerHtml()}></span>
        : <span className='innerText'>{ children }</span>
      }
    </button>
  );
};

export default Button;
