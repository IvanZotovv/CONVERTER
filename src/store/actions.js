import { GET_DATA, LOAD_DATA, ELECTED_ITEM } from './actyonType';

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
