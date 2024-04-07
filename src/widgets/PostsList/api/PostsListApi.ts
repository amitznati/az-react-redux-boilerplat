import { BaseApi, SimpleServices } from "@sdk";
import selectors from "./PostsListSelectors";

export const ActionTypes = {
  UPDATE_POSTS: "UPDATE_POSTS",
  FETCH_POSTS: "FETCH_POSTS",
};
export default class PostsListApi extends BaseApi {
  updatePosts = (posts: Array<string>) => {
    this.dispatchStoreAction(ActionTypes.UPDATE_POSTS, posts);
  };

  getPostsSelector = () => {
    return selectors.getPostsSelector(this.store.getState());
  };

  fetchPosts = async () => {
    return this.serviceRequest(
      SimpleServices.getDummyPosts,
      {},
      ActionTypes.FETCH_POSTS,
    );
  };
}
