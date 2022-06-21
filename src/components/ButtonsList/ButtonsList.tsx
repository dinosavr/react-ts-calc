import './ButtonsList.scss';
import * as React from 'react';
import { ButtonsListProps } from './models';
import Button from '../buttons/Button/Button';
import Wrapper from '../Wrapper';
import { calcButtonsData } from '../../data/constants';
import { IButtonProps } from '../../data/models';

const getListButtons: ButtonsListProps = calcButtonsData.map((item: IButtonProps) => (
  <Wrapper className="wrapper-btn">
    <Button className={`btn d-block m-auto ${item.className}`}>{item.text}</Button>
  </Wrapper>
));

const ButtonsList = () => {
  return <div className="btn-list">{getListButtons}</div>;
};

export default ButtonsList;
