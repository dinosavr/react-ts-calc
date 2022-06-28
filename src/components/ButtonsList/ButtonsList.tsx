import './ButtonsList.scss';
import * as React from 'react';
import { ButtonsListProps } from './models';
import Button from '../buttons/Button/Button';
import Wrapper from '../Wrapper';
import { calcButtonsData } from '../../services/data/constants';
import { IButtonProps } from '../../services/data/models';

let initialStr = '';
const getTypeButton = (value: string): void => {
  initialStr += value;
  console.log(initialStr);
};

const getListButtons: ButtonsListProps = calcButtonsData.map(
  ({ className, text, onClick }: IButtonProps, index: Number) => (
    <Wrapper key={`${index}`} className="wrapper-btn">
      <Button
        className={`btn d-block m-auto ${className ? className : ''}`}
        value={text}
        onClick={onClick ? onClick : getTypeButton}>
        {text}
      </Button>
    </Wrapper>
  ),
);

const ButtonsList = () => {
  return <div className="btn-list">{getListButtons}</div>;
};

export default ButtonsList;
