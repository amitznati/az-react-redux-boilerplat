import {createSelector} from 'reselect';
import config from './PostsListConfig';

const sliceSelector = (state: any) => state[config.sliceName];

export const getPostsSelector = createSelector(
  sliceSelector,
  slice => {
    return slice.posts;
  },
);

const PostsListSelectors = {
  getPostsSelector,
};

export default PostsListSelectors;
