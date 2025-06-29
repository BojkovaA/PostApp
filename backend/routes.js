const express = require("express");
const router = express.Router();
const controller = require("./controller");

router.post("/", controller.addPost);
router.get("/", controller.getPosts);
router.get("/:id/details", controller.getPost);
router.delete("/:id", controller.deletePost);

module.exports = router;
