import { IButtonProps } from './models';

export const calcButtonsData: IButtonProps[] = [
  { text: 'С'},
  { text: 'S'},
  { text: '%'},
  { text: '/'},
  { text: '7'},
  { text: '8'},
  { text: '9'},
  { text: 'x'},
  { text: '4'},
  { text: '5'},
  { text: '6'},
  { text: '-'},
  { text: '1'},
  { text: '2'},
  { text: '3'},
  { text: '+'},
  { text: '00'},
  { text: '0'},
  { text: ','},
  { className: 'btn--selected', text: '='},
];

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
  PERCENT = '%',
  DIVISION = '/',
  MULTIPLICATION = 'X',
  SUBTRACTION = '-',
  SUMMATION = '+',
  DOUBLE_ZERO = '00',
  COMMA = ',',
  RESULT = '=',
}
