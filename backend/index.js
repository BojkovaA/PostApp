const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const postRoutes = require("./routes");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use("/api/posts", postRoutes);

mongoose
  .connect("mongodb://localhost:27017/postsdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connection successful");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
