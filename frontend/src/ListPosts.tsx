import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

interface Post {
  _id: string;
  title: string;
  description: string;
  body: string;
}

const ListPosts: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  const fetchPosts = async () => {
    try {
      const res = await axios.get<Post[]>("http://localhost:5000/api/posts");
      setPosts(res.data);
    } catch (error) {
      console.error("Error fetching posts", error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const deletePost = async (id: string) => {
    try {
      await axios.delete(`http://localhost:5000/api/posts/${id}`);
      fetchPosts();
    } catch (error) {
      console.error("Error deleting post", error);
    }
  };

  return (
    <div>
      <h1>Posts</h1>
      {posts.length === 0 && <p>No posts found.</p>}
      {posts.map((post) => (
        <div
          key={post._id}
          style={{ border: "1px solid #ccc", margin: "10px 0", padding: 10 }}
        >
          <h3>
            <Link to={`/posts/${post._id}`}>{post.title}</Link>
          </h3>
          <p>{post.description}</p>
          <button onClick={() => deletePost(post._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ListPosts;
