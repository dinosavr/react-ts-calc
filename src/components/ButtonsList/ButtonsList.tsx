import './ButtonsList.scss';
import * as React from 'react';
import Button from '../buttons/Button/Button';
import Wrapper from '../Wrapper';
import {
  calcButtonsData,
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

  const getTypeButton = (value: string): void => {
    const isNumber = !isNaN(Number(value));
    if (value === CANCEL) (expr !== String(NUM_0)) ? setExpr(NUM_0) : setAnswer(NUM_0);
    else if (value === RESULT) setAnswer(calc(exprInCalc));
    else if (isNumber) {
      if(exprInCalc === String(NUM_0)) exprInCalc = '';
      setExpr((exprInCalc += value));
    }
    else if (value === COMMA) setExpr((exprInCalc += value));
    else if (value === SQRT) setExpr(`${SQRT}(${exprInCalc})`);
    else {
      if (!isNumber) exprInCalc += ` ${value} `;
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
