export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const CREATE_USER = 'CREATE_USER';

export const login = (email, password) => {
  return async dispatch => {
    let result = {somethingNotNull: 'something'};
    let error = null;
    if (email !== '' && password !== '') {
      try {
        // login
      } catch (e) {
        error = e;
      }
    }
    dispatch({
      type: LOGIN,
      userInfo: result,
    });

    return {result, error};
  };
};

export const logon = (email, password) => {
  return async dispatch => {
    if (email !== '' && password !== '') {
      try {
        //logon
      } catch (e) {
        if (e.code === 'auth/email-already-in-use') {
          return 0;
        }

        if (e.code === 'auth/invalid-email') {
          return 1;
        }
      }
    }
    dispatch(login(email, password));
  };
};

export const logout = () => {
  return async dispatch => {
    //log out
    dispatch({
      type: LOGOUT,
      userInfo: null,
    });
  };
};

export const createUser = (name, surname, phone, birthDate) => {
  return async dispatch => {
    //create
    const result = {};
    dispatch({
      type: CREATE_USER,
      userInfo: result,
    });
    return result;
  };
};
