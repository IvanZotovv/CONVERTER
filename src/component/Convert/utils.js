import { selectRightValute, selectLeftValute } from '../../store/actions';

export const rubles = [
  {
    CharCode: 'RUR',
    Name: 'Рубли',
    Value: 1
  }
];

export const getItem = (item, list) =>
  [item].includes('RUR') ? rubles : list.filter(i => i.CharCode === item);

export const selectVal = (side, value, dispatch) =>
  [side].includes('right')
    ? dispatch(selectRightValute(value))
    : dispatch(selectLeftValute(value));

export const charCodeValue = item =>
  item.length > 0 ? item[0].CharCode : 'RUR';

export const getExchengeDevide = (left, right) =>
  left.length > 0 && right.length > 0 ? left[0].Value / right[0].Value : null;

export const getExchengeMultiply = (left, right) =>
  left.length > 0 && right.length > 0 ? right[0].Value / left[0].Value : null;

export const chooseObj = (side, event, left, right) =>
  [side].includes('left')
    ? {
        leftInput: event.target.value,
        rightInput: event.target.value / getExchengeMultiply(left, right)
      }
    : {
        leftInput: event.target.value * getExchengeMultiply(left, right),
        rightInput: event.target.value
      };
