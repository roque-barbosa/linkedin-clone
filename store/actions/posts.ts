export const POSTS_UPDATE_LIST = "POSTS_UPDATE_LIST";

export const postsUpdateList = (posts:any) => {
  return {
    type: POSTS_UPDATE_LIST,
    payload: posts,
  };
};