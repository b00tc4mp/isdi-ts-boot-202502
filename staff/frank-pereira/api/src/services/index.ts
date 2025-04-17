import registerUser from "./user/registerUser.js";
import authenticateUser from "./user/authenticateUser.js";
import getUserUsername from "./user/getUserUsername.js";
import createPost from "./post/createPost.js";
import getPosts from "./post/getPosts.js";

const service = {
  registerUser,
  authenticateUser,
  getUserUsername,

  createPost,
  getPosts,
};

export default service;
