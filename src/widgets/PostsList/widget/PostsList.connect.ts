import { connect } from "react-redux";
import { getInstance } from "../../../sdk";
import PostsListComponent from "./PostsList.component";

const postsListApi = getInstance().PostsListApi;

const mapStateToProps = () => {
  return {
    posts: postsListApi.getPostsSelector(),
  };
};

const mapDispatchToProps = () => ({
  fetchPosts: postsListApi.fetchPosts,
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsListComponent);
