import React, {Component} from 'react';
import PostsListMainView from './components/PostsList.mainView';
import {mapComponentProps} from './PostsList.propsMappar';
export default class PostsListComponent extends Component {
  componentDidMount() {
    const {fetchPosts} = this.props;
    fetchPosts();
  }
  render() {
    return <PostsListMainView {...mapComponentProps(this.props)} />;
  }
}
