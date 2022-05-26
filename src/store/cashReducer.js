const initialState = {
  cash: 0
}

const ADD_CASH = 'ADD_CASH';
const GET_CASH = 'GET_CASH';

export const cashReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CASH:
      return {...state, cash: state.cash + action.payload};
    case GET_CASH:
      return {...state, cash: state.cash - action.payload};
    default:
      return state;
  }
}

export const addCashAC = (payload) => ({type: ADD_CASH, payload});
export const getCashAC = (payload) => ({type: GET_CASH, payload});