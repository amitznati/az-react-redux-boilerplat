import PostsListApi, {IPostsListApi as TIPostListApi} from "./api/PostsListApi";
import PostsListReducer from "./api/PostsListReducer";
import PostsListConfig from "./api/PostsListConfig";
import { WidgetType } from "../types";


export type IPostsListApi = TIPostListApi;
export const widget: WidgetType = {
  api: PostsListApi,
  reducer: PostsListReducer,
  config: PostsListConfig,
};

export default widget;
