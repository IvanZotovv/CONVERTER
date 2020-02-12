import { GET_DATA } from './actyonType';

const initialState = {
  data: {}
};

export const reducer = (state = initialState, action) => {
  console.log(action.payload);
  if (action.type === GET_DATA) {
    return {
      ...state,
      data: action.payload
    };
  }

  return state;
};
