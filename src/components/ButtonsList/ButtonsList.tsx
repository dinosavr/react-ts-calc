import './ButtonsList.scss';
import * as React from 'react';
import Button from '../buttons/Button/Button';
import Wrapper from '../Wrapper';
import {
  calcButtonsData,
  calcMathOperation,
  CANCEL,
  COMMA,
  DOUBLE_ZERO,
  NUM_0,
  PERCENT,
  RESULT,
  SQRT,
  SUBTRACTION,
  SUMMATION,
} from '../../services/data/constants';
import { IButtonProps } from '../../services/data/models';
import { useContext } from 'react';
import { AppContext } from '../../context/context';
import { calc } from '../../services/calc';

const ButtonsList = () => {
  const contextType = useContext(AppContext);
  const { expr, setExpr, setAnswer } = contextType;
  let exprInCalc = expr;

  const actionsBtn = (value: string): void => {
    const isNumber = !isNaN(Number(value));
    const exprInCalcArr = exprInCalc.trim().split(' ');
    const tmpExprInCalcArr = [...exprInCalcArr];
    const lastEl = tmpExprInCalcArr.pop();
    const lastOperationMayBe = tmpExprInCalcArr.pop();
    const baseOfPercent = tmpExprInCalcArr.pop();
    const isHasOperation = calcMathOperation.indexOf(lastEl) > -1;

    if (value === CANCEL) expr !== String(NUM_0) ? setExpr(NUM_0) : setAnswer(NUM_0);
    else if (value === RESULT) setAnswer(calc(exprInCalc));
    else if (isNumber)
      setExpr(exprInCalc === String(NUM_0) ? value : (exprInCalc += value));
    else if (value === COMMA) !isHasOperation && setExpr((exprInCalc += value));
    else if (value === SQRT) !isHasOperation && setExpr(`${SQRT}(${exprInCalc})`);
    else if (value === PERCENT) {
      if (!isHasOperation) {
        let percentRes = String((parseFloat(baseOfPercent) / 100) * parseFloat(lastEl));
        exprInCalc = `${[...tmpExprInCalcArr, baseOfPercent, lastOperationMayBe, percentRes].join(' ')}`;
        setExpr(exprInCalc);
      }
    } else if (!isNumber) {
      console.log(isHasOperation, exprInCalcArr);
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
              onClick={onClick ? onClick : actionsBtn}>
              {text}
            </Button>
          </Wrapper>
        ),
      )}
    </div>
  );
};

export default ButtonsList;
