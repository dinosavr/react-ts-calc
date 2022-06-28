import './ButtonsList.scss';
import * as React from 'react';
import Button from '../buttons/Button/Button';
import Wrapper from '../Wrapper';
import { calcButtonsData, CANCEL, COMMA,  NUM_0, PERCENT, RESULT, SUBTRACTION, SUMMATION } from '../../services/data/constants';
import { IButtonProps } from '../../services/data/models';
import { useContext } from 'react';
import { AppContext } from '../../context/context';
import { calc } from '../../services/calc';

const ButtonsList = () => {
  const contextType = useContext(AppContext);
  const { expr, setExpr, answer, setAnswer } = contextType;
  let exprInCalc = expr;
  let answerInCalc = answer;

  const getTypeButton = (value: string): void => {
    if (value === CANCEL) {
      exprInCalc = NUM_0;
      setExpr(exprInCalc);
    } else if (value === RESULT) {
      answerInCalc = calc(exprInCalc) 
      setAnswer(answerInCalc)
    } 
    else if (Number(value) || value === COMMA) {
      exprInCalc += value;
      setExpr(exprInCalc);
    }         
    else {
      if(isNaN(Number(value)) ) value = ` ${value} `;
      exprInCalc += value;
      setExpr(exprInCalc);
    }
  };

  return (
    <div className="btn-list">
      {calcButtonsData.map(
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
      )}
    </div>
  );
};

export default ButtonsList;
