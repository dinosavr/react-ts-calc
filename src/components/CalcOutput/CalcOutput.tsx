import './CalcOutput.scss';
import * as React from 'react';
import { AppContext } from '../../context/context';
import { CalcOutputProps } from './models';
import { useContext } from 'react';
import { SQRT } from '../../services/data/constants';

const CalcBody: React.FC<CalcOutputProps> = ({}) => {
  const contextType = useContext(AppContext);
  const { expr, answer } = contextType;
  let correctExpr = expr;
  correctExpr = correctExpr.replaceAll(SQRT, '&Sqrt;');
  function getInnerHtml() {
    return { __html: correctExpr };
  }
  let correctAnswer = answer;
  if(correctAnswer === 'NaN') correctAnswer = 'Error'

  const classBySize = (strLength: Number) => {
         let textSizeCorrect = 'result'
         if(strLength > 16) textSizeCorrect +=' result-fs-40'; 
         return textSizeCorrect;
  }
  return (
    <div className="calcOutput">
      <div className="example-output">
        <span className="example" dangerouslySetInnerHTML={getInnerHtml()}></span>
      </div>
      <div className={classBySize(correctAnswer.length)}>{correctAnswer}</div>
    </div>
  );
};

export default CalcBody;
