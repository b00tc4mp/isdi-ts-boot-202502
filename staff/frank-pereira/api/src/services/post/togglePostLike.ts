import mongoose from "mongoose";
import { Post, User } from "../../data/models/index.js";
import validate from "../../validations.js";
import errors from "../../errors/index.js";
const { SystemError, NotFoundError } = errors;

const { ObjectId } = mongoose.Types;

const togglePostLike = (userId: string, postId: string): Promise<void> => {
  validate.id(userId);
  validate.id(postId);

  return (async () => {
    let user, post;

    try {
      [user, post] = await Promise.all([
        User.findById(userId).lean(),
        Post.findById(postId),
      ]);
    } catch (error) {
      throw new SystemError((error as Error).message);
    }

    if (!user) throw new NotFoundError("user not found");
    if (!post) throw new NotFoundError("post not found");

    const { likes } = post;

    const index = likes.findIndex(
      (userObjectId) => userObjectId.toString() === userId
    );

    index < 0 ? likes.push(new ObjectId(userId)) : likes.splice(index, 1);

    try {
      await post.save();
    } catch (error) {
      throw new SystemError((error as Error).message);
    }
  })();
};

export default togglePostLike;
