import './CalcOutput.scss';
import * as React from 'react';
import { CalcOutputProps } from './models';
import Button from '../buttons/Button/Button';

const CalcBody: React.FC<CalcOutputProps> = ({}) => {
  return (
    <div className="calcOutput">
      <div className="example-output">
        <span className="example">(56 + 45 - 26) * 23</span>
      </div>
      <div className="result">600</div>
    </div>
  );
};

export default CalcBody;
