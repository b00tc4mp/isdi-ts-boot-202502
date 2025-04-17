import { Post, User } from "../../data/models/index.js";
import validate from "../../validations.js";
import errors from "../../errors/index.js";
const { SystemError, NotFoundError } = errors;

const createPost = (
  userId: string,
  description: string,
  image: string
): Promise<void> => {
  validate.id(userId);
  validate.description(description);
  validate.image(image);

  return (async () => {
    let user;

    try {
      user = await User.findById(userId);
    } catch (error) {
      throw new SystemError((error as Error).message);
    }

    if (!user) throw new NotFoundError("user not found");

    try {
      await Post.create({ author: userId, description, image });
    } catch (error) {
      throw new SystemError((error as Error).message);
    }
  })();
};

export default createPost;
