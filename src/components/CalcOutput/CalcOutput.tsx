import './CalcOutput.scss';
import * as React from 'react';
import { AppContext } from '../../context/context';
import { CalcOutputProps } from './models';
import { useContext } from 'react';

// static contextType = ThemeContext;
const CalcBody: React.FC<CalcOutputProps> = ({}) => {
  const contextType = useContext(AppContext);
  const { expr, answer } = contextType;
  return (
    <div className="calcOutput">
      <div className="example-output">
        <span className="example">{expr}</span>
      </div>
      <div className="result">{answer}</div>
    </div>
  );
};

export default CalcBody;
