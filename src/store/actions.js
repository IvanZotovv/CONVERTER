import { GET_DATA, LOAD_DATA } from './actyonType';

export const setData = dataFromAPI => ({
  type: GET_DATA,
  payload: dataFromAPI
});

export const loadData = () => ({
  type: LOAD_DATA
});
