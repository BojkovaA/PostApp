const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const postRoutes = require("./routes");
require("dotenv").config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use("/api/posts", postRoutes);

mongoose
  .connect(process.env.MONGO_URL, {
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
