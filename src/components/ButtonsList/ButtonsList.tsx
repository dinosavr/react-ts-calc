import './ButtonsList.scss';
import * as React from 'react';
import Button from '../buttons/Button/Button';
import Wrapper from '../Wrapper';
import {
  calcButtonsData,
  calcMathOperation,
  CANCEL,
  COMMA,
  DIVISION,
  MULTIPLICATION,
  NUM_0,
  PERCENT,
  RESULT,
  SQRT,
  SUBTRACTION,
  SUMMATION,
} from '../../services/data/constants';
import { IButtonProps } from '../../services/data/models';
import { useContext, useEffect } from 'react';
import { AppContext } from '../../context/context';
import { calc } from '../../services/calc';

const ButtonsList = () => {
  const contextType = useContext(AppContext);
  const { expr, setExpr, setAnswer } = contextType;
  let exprInCalc = expr;

  // 5,2 - 2,288 -> 2,9200000000000004 // bug
  const keyDownHandler = (e: KeyboardEvent) => {
    const isNumber = !isNaN(Number(e.key));
    isNumber && handlerClick(e.key);
    e.key === 'Enter' && handlerClick(RESULT);
    (e.key === 'Escape' || e.key.toLowerCase() === 'c') && handlerClick(CANCEL);
    e.key.toLowerCase() === 's' && handlerClick(SQRT);
    e.key.toLowerCase() === '%' && handlerClick(PERCENT);
    e.key.toLowerCase() === '/' && handlerClick(DIVISION);
    e.key.toLowerCase() === '*' && handlerClick(MULTIPLICATION);
    e.key.toLowerCase() === '-' && handlerClick(SUBTRACTION);
    e.key.toLowerCase() === '+' && handlerClick(SUMMATION);
  };

  useEffect(() => {
    document.addEventListener('keydown', keyDownHandler);
  }, []);

  const handlerClick = (value: string): void => {
    const isNumber = !isNaN(Number(value));
    const exprInCalcArr = exprInCalc.trim().split(' ');
    const tmpExprInCalcArr = [...exprInCalcArr];
    const lastEl = tmpExprInCalcArr.pop();
    const lastOperationMayBe = tmpExprInCalcArr.pop();
    const baseOfPercent = tmpExprInCalcArr.pop();
    const isHasOperation = calcMathOperation.indexOf(lastEl) > -1;
    const isLastElHasComma = lastEl.indexOf(COMMA) > -1;

    if (value === CANCEL) expr !== String(NUM_0) ? setExpr(NUM_0) : setAnswer(NUM_0);
    else if (value === RESULT) setAnswer(calc(exprInCalc));
    else if (isNumber && lastEl.slice(-1) !== ')')
      setExpr(exprInCalc === String(NUM_0) ? value : (exprInCalc += value));
    else if (value === COMMA)
      !isHasOperation && !isLastElHasComma && setExpr((exprInCalc += value));
    else if (value === SQRT) !isHasOperation && setExpr(`${SQRT}(${exprInCalc})`);
    else if (value === PERCENT) {
      if (!isHasOperation) {
        let percentRes = String((parseFloat(baseOfPercent) / 100) * parseFloat(lastEl));
        exprInCalc = `${[
          ...tmpExprInCalcArr,
          baseOfPercent,
          lastOperationMayBe,
          percentRes,
        ].join(' ')}`;
        setExpr(exprInCalc);
      }
    } else if (!isNumber) {
      !isHasOperation
        ? (exprInCalc += ` ${value} `)
        : (exprInCalc = `${exprInCalcArr
            .splice(0, exprInCalcArr.length - 1)
            .join(' ')} ${value} `);
      setExpr(exprInCalc);
    }
  };

  return (
    <div className="btn-list">
      {calcButtonsData.map(
        ({ className, text, innerHtml, onClick }: IButtonProps, index: Number) => (
          <Wrapper key={`${index}`} className="wrapper-btn">
            <Button
              className={`btn d-block m-auto ${className ? className : ''}`}
              value={text}
              innerHtml={innerHtml}
              onClick={onClick ? onClick : handlerClick}>
              {text}
            </Button>
          </Wrapper>
        ),
      )}
    </div>
  );
};

export default ButtonsList;
