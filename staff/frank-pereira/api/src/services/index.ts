import registerUser from "./user/registerUser.js";
import authenticateUser from "./user/authenticateUser.js";
import getUserUsername from "./user/getUserUsername.js";
import createPost from "./post/createPost.js";
import getPosts from "./post/getPosts.js";
import deletePost from "./post/deletePost.js";
deletePost;

const service = {
  registerUser,
  authenticateUser,
  getUserUsername,

  createPost,
  getPosts,
  deletePost,
};

export default service;
