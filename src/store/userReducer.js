import axios from "axios";

const initialState = {
  users: []
}

const ADD_USER = 'ADD_USER';
const DELETE_USER = 'DELETE_USER';
const GET_BASE_USERS = 'GET_BASE_USERS';

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BASE_USERS:
      return {... state, users: [...state.users, ...action.payload]}; 
    case ADD_USER:
      return { ...state, users: [...state.users, action.payload] };
    case DELETE_USER:
      return { ...state, users: state.users.filter(item => item.id !== action.payload)}
    default:
      return state;
  }
}

export const addUserAC = (payload) => ({ type: ADD_USER, payload });
export const deleteUserAC = (payload) => ({ type: DELETE_USER, payload });
export const getBaseUsersAC = (payload) => ({ type: GET_BASE_USERS, payload });

export const fetchUsersThunk = () => {
  return dispatch => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => dispatch(getBaseUsersAC(res.data)));
  }
}