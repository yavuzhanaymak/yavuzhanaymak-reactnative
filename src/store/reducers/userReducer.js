import {LOGIN, LOGOUT, CREATE_USER} from '../actions/user';

const initialState = {
  userInfo: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        userInfo: action.userInfo,
      };
    case LOGOUT:
      return {
        ...state,
        userInfo: action.userInfo,
      };
    case CREATE_USER:
      return {
        ...state,
        userInfo: action.userInfo,
      };
    default:
      return state;
  }
};

export default userReducer;
