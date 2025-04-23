import { Post, User } from "../../data/models/index.js";
import validate from "../../validations.js";
import errors from "../../errors/index.js";
const { SystemError, NotFoundError, OwnershipError } = errors;

const deletePost = (userId: string, postId: string): Promise<void> => {
  validate.id(userId);
  validate.id(postId);

  return (async () => {
    let user;
    let post;

    try {
      user = await User.findById(userId);
    } catch (error) {
      throw new SystemError((error as Error).message);
    }

    if (!user) throw new NotFoundError("user not found");

    try {
      post = await Post.findById(postId);
    } catch (error) {
      throw new SystemError((error as Error).message);
    }

    if (!post) throw new NotFoundError("post not found");

    if (post.author.toString() !== userId) {
      throw new OwnershipError("this post dont belong to user");
    }

    try {
      await Post.deleteOne({ _id: postId });
    } catch (error) {
      throw new SystemError((error as Error).message);
    }
  })();
};

export default deletePost;
