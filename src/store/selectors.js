import { createSelector } from 'reselect';

const getState = state => state.reducer.data;
const getLeft = state => state.reducer.selectItem.leftBlock;
const getRight = state => state.reducer.selectItem.rightBlock;
const getElectedItem = state => state.reducer.elected;

export const newGetData = createSelector([getState], all => all);
export const left = createSelector([getLeft], left => left);
export const right = createSelector([getRight], right => right);
export const newGetElectedItem = createSelector(
  [getElectedItem],
  elected => elected
);
