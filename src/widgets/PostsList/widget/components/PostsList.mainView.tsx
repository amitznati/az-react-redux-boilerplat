import {Button, Card} from "../../../../common-components";

type Post = {
    id: number;
    title: string;
    body: string;
}

type PostsListMainViewProps = {
    posts: Post[];
    fetchPosts: () => void;
}
export default function PostsListMainView({posts, fetchPosts}: PostsListMainViewProps) {
  return (
    <div>
      <Button className="m-4" color="primary" onClick={fetchPosts}>Refresh Posts</Button>
      <ul>
        {posts.map(post => {
          return (
            <li key={post.id}>
                <Card className="m-4">
                    <Card.Body>
                        <Card.Title>{post.title}</Card.Title>
                        {post.body}
                    </Card.Body>
                </Card>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
