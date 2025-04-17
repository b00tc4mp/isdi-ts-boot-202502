import { Post, User } from "../../data/models/index.js";
import validate from "../../validations.js";
import { PostType } from "../types.js";
import errors from "../../errors/index.js";
const { SystemError, NotFoundError } = errors;

const getPosts = (userId: string): Promise<PostType[]> => {
  validate.id(userId);

  return (async () => {
    try {
      const [user, posts] = await Promise.all([
        User.exists({ _id: userId }),
        Post.find(),
      ]);

      if (!user) throw new NotFoundError("not found user");
      if (posts.length === 0) new NotFoundError("posts not found");

      return posts.map<PostType>((post) => ({
        id: post._id.toString(),
        author: post.author.toString(),
        description: post.description,
        image: post.image,
        date: post.date,
      }));
    } catch (error) {
      throw new SystemError((error as Error).message);
    }
  })();
};

export default getPosts;
