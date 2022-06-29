import { IButtonProps} from './models';

export const INITIAL_EXPR = '2 * 3 - 2';

export enum calcNumButtons {
  NUM_0 = '0',
  NUM_1 = '1',
  NUM_2 = '2',
  NUM_3 = '3',
  NUM_4 = '4',
  NUM_5 = '5',
  NUM_6 = '6',
  NUM_7 = '7',
  NUM_8 = '8',
  NUM_9 = '9',
}
export enum calcActionButtons {
  CANCEL = 'C',
  SQRT = 'Sqrt',
  PERCENT = '%',
  DIVISION = '/',
  MULTIPLICATION = 'x',
  SUBTRACTION = '-',
  SUMMATION = '+',
  DOUBLE_ZERO = '00',
  COMMA = ',',
  RESULT = '=',
}

export const {NUM_0, NUM_1, NUM_2, NUM_3, NUM_4, NUM_5, NUM_6, NUM_7, NUM_8, NUM_9} = calcNumButtons;
export const {CANCEL, SQRT, PERCENT, DIVISION, MULTIPLICATION, SUBTRACTION, SUMMATION, DOUBLE_ZERO, COMMA, RESULT} = calcActionButtons;

export const calcButtonsData: IButtonProps[] = [
  { text: CANCEL},
  { className: 'btn--symbol', text: SQRT, innerHtml: '&Sqrt;'},
  { text: PERCENT},
  { text: DIVISION},
  { text: NUM_7},
  { text: NUM_8},
  { text: NUM_9},
  { text: MULTIPLICATION},
  { text: NUM_4},
  { text: NUM_5},
  { text: NUM_6},
  { text: SUBTRACTION},
  { text: NUM_1},
  { text: NUM_2},
  { text: NUM_3},
  { text: SUMMATION},
  { text: DOUBLE_ZERO},
  { text: NUM_0},
  { text: COMMA},
  { className: 'btn--selected', text: RESULT},
];

