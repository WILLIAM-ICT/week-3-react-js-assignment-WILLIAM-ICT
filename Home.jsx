import { useState, useEffect } from 'react';
import { fetchPosts } from '../api/posts';
import Button from '../components/Button';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts().then(data => setPosts(data));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Posts</h1>
      {posts.map(post => (
        <div key={post.id} className="mb-4 p-4 border rounded">
          <h2 className="font-semibold">{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}
