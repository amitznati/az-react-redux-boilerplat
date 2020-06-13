import React from 'react';

export default function PostsListMainView({posts, fetchPosts}) {
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
