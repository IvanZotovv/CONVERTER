import {
  GET_DATA,
  ELECTED_ITEM,
  SELECT_FROM_LEFT_ITEM,
  SELECT_FROM_RIGHT_ITEM
} from './actyonType';

const initialState = {
  data: {},
  elected: [],
  selectItem: {
    leftBlock: [
      {
        CharCode: 'RUR',
        Nominal: 100,
        Name: 'Рубли',
        Value: 1
      }
    ],
    rightBlock: [
      {
        CharCode: 'RUR',
        Nominal: 100,
        Name: 'Рубли',
        Value: 1
      }
    ]
  }
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
    case SELECT_FROM_LEFT_ITEM: {
      return {
        ...state,
        selectItem: {
          leftBlock: action.payload,
          rightBlock: state.selectItem.rightBlock
        }
      };
    }
    case SELECT_FROM_RIGHT_ITEM: {
      return {
        ...state,
        selectItem: {
          leftBlock: state.selectItem.leftBlock,
          rightBlock: action.payload
        }
      };
    }
    default:
      break;
  }

  return state;
};
