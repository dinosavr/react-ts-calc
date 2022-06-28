import './CalcOutput.scss';
import * as React from 'react';
import { ThemeContext } from '../../context/context';
import { CalcOutputProps } from './models';
import { useContext } from 'react';

// static contextType = ThemeContext;
const CalcBody: React.FC<CalcOutputProps> = ({}) => {
  const contextType = useContext(ThemeContext);
  return (
    <div className="calcOutput">
      <div className="example-output">
        <span className="example">{contextType.expr}</span>
      </div>
      <div className="result">{contextType.answer}</div>
    </div>
  );
};

export default CalcBody;
