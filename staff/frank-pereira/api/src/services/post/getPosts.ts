import { Post, User } from "../../data/models/index.js";
import validate from "../../validations.js";
import { PostType } from "../types.js";
import errors from "../../errors/index.js";
import { PopulatedPostDocType } from "../../data/types.js";
const { SystemError, NotFoundError } = errors;

const getPosts = (userId: string): Promise<PostType[]> => {
  validate.id(userId);

  return (async () => {
    let user, posts;

    try {
      [user, posts] = await Promise.all([
        User.exists({ _id: userId }),
        Post.find()
          .populate("author", "username")
          .lean<PopulatedPostDocType[]>(),
      ]);
    } catch (error) {
      throw new SystemError((error as Error).message);
    }

    if (!user) throw new NotFoundError("not found user");
    if (posts.length === 0) new NotFoundError("posts not found");

    return posts.map<PostType>((post) => {
      const { likes } = post;

      return {
        id: post._id.toString(),
        author: {
          id: post.author._id.toString(),
          username: post.author.username,
        },
        description: post.description,
        image: post.image,
        date: post.date,
        liked: likes.some((userObjectId) => userObjectId.toString() === userId),
        likes: likes.length,
      };
    });
  })();
};

export default getPosts;
