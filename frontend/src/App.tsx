import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ListPosts from "./ListPosts";
import Details from "./Details";
import CreatePost from "./CreatePost";

const App: React.FC = () => {
  return (
    <Router>
      <nav style={{ padding: 10, borderBottom: "1px solid #ccc" }}>
        <Link to="/" style={{ marginRight: 10 }}>
          Home
        </Link>
        <Link to="/create">Create Post</Link>
      </nav>

      <Routes>
        <Route path="/" element={<ListPosts />} />
        <Route path="/posts/:id" element={<Details />} />
        <Route path="/create" element={<CreatePost />} />
      </Routes>
    </Router>
  );
};

export default App;
