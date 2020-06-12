import {createSelector} from 'reselect';
import config from './PostsListConfig';

const sliceSelector = state => state[config.sliceName];

export const getPostsSelector = createSelector(
  sliceSelector,
  slice => {
    return slice.posts;
  },
);

export default {
  getPostsSelector,
};
