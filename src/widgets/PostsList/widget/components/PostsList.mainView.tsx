type Post = {
    id: number;
    title: string;
}

type PostsListMainViewProps = {
    posts: Post[];
    fetchPosts: () => void;
}
export default function PostsListMainView({posts, fetchPosts}: PostsListMainViewProps) {
  return (
    <div>
      <button onClick={fetchPosts}>Refresh Posts</button>
      <ul>
        {posts.map(post => {
          return (
            <li key={post.id}>
              {post.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
