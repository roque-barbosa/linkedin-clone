export const GET_USER_DATA = "GET_USER_DATA";
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export const getUserData = () => {
  return {
    type: GET_USER_DATA,
  };
};

export const userLogin = (userData:any) => {
  return {
    type: LOGIN,
    payload: userData,
  };
};

export const userLogout = () => {
  return {
    type: LOGOUT,
  };
};