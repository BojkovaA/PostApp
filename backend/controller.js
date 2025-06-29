const Post = require("./model/Post");

exports.addPost = async (req, res) => {
  try {
    const post = new Post(req.body);
    await post.save();
    res.status(201).json(post);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getPosts = async (req, res) => {
  const posts = await Post.find();
  res.json(posts);
};

exports.getPost = async (req, res) => {
  const { id } = req.params;
  const post = await Post.findById(id);
  res.json(post);
};

// Избриши игра
exports.deletePost = async (req, res) => {
  const { id } = req.params;
  await Post.findByIdAndDelete(id);
  res.json({ message: "Post deleted" });
};
