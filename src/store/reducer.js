import { GET_DATA, ELECTED_ITEM } from './actyonType';

const initialState = {
  data: {},
  elected: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA: {
      return {
        ...state,
        data: action.payload
      };
    }
    case ELECTED_ITEM: {
      return {
        ...state,
        elected: state.elected.concat(action.payload)
      };
    }
    default:
      break;
  }

  return state;
};
