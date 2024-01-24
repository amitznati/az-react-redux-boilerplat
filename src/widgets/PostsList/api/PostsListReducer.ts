import { ActionTypes } from "./PostsListApi";
const initialState: any = {
  posts: [],
};
const SUCCESS = "_SUCCESS";
const reducer = (state = initialState, action: any) => {
  let newState = { ...state };
  const payload = action && action.payload;
  const type = action && action.type;
  switch (type) {
    case `${ActionTypes.FETCH_POSTS}${SUCCESS}`:
      newState = {
        ...state,
        posts: [...payload],
      };
      break;
    default:
      return newState;
  }
  return newState;
};

export default reducer;
