import {
  GET_DATA,
  LOAD_DATA,
  ELECTED_ITEM,
  SELECT_FROM_LEFT_ITEM,
  SELECT_FROM_RIGHT_ITEM
} from './actyonType';

export const setData = dataFromAPI => ({
  type: GET_DATA,
  payload: dataFromAPI
});

export const loadData = () => ({
  type: LOAD_DATA
});

export const electedItem = item => ({
  type: ELECTED_ITEM,
  payload: item
});

export const selectLeftValute = el => ({
  type: SELECT_FROM_LEFT_ITEM,
  payload: el
});

export const selectRightValute = el => ({
  type: SELECT_FROM_RIGHT_ITEM,
  payload: el
});
