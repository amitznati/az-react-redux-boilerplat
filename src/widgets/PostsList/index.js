import PostsListApi from './api/PostsListApi';
import PostsListReducer from './api/PostsListReducer';
import PostsListConfig from './api/PostsListConfig';

export const widget = {
  api: PostsListApi,
  reducer: PostsListReducer,
  config: PostsListConfig,
};

export default widget;
