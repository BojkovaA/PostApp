import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

interface Post {
  _id: string;
  title: string;
  description: string;
  body: string;
}

const Details: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    if (!id) return;

    fetch(`/api/posts/${id}/details`)
      .then((res) => res.json())
      .then((data) => setPost(data))
      .catch((err) => console.error("Error fetching post details:", err));
  }, [id]);

  if (!post) return <p>Loading post details...</p>;

  return (
    <div>
      <h2>{post.title}</h2
      <p>
        <strong>Description:</strong> {post.description}
      </p>
      <p>
        <strong>Body:</strong> {post.body}
      </p>
      <Link to="/">Back to Posts</Link>
    </div>
  );
};

export default Details;
