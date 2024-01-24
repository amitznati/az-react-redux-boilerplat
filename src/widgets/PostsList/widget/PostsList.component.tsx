import { Component } from "react";
import PostsListMainView from "./components/PostsList.mainView";
import { mapComponentProps } from "./PostsList.propsMappar";
export default class PostsListComponent extends Component {
  render() {
    return <PostsListMainView {...mapComponentProps(this.props)} />;
  }
}
