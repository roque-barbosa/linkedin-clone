import { HYDRATE } from "next-redux-wrapper";
import { GET_USER_DATA, LOGIN, LOGOUT } from '../actions/user'

const initialState = null;


const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload.userData;

    case GET_USER_DATA:
      return action.payload.userData;

    case LOGIN:
      const newState = { ...action.payload };
      return newState;
      
    case LOGOUT:
      return initialState;

    default:
      return state;
  }
};

export default reducer;