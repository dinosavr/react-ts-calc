import './CalcBody.scss';
import * as React from 'react';
import { CalcBodyProps } from './models';
import CalcOutput from '../CalcOutput/CalcOutput';
import ButtonsList from '../ButtonsList/ButtonsList';

const CalcBody: React.FC<CalcBodyProps> = ({}) => {
  return (
    <div className="calcWrapper">
      <div className="calcBody">
        <CalcOutput></CalcOutput>
        <ButtonsList></ButtonsList>        
      </div>
    </div>
  );
};

export default CalcBody;
