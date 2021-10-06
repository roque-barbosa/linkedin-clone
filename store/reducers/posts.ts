import { HYDRATE } from "next-redux-wrapper";
import { POSTS_UPDATE_LIST } from '../actions/posts'
const initialState: any[] = [];

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload.posts;
    case POSTS_UPDATE_LIST:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;