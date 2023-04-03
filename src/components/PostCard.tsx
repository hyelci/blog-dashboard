import { useAppDispatch } from "../app/hooks";
import { PostDetails } from "../models/category.interface";
import { Table } from "flowbite-react";
import { Link } from "react-router-dom";
import { deletePost } from "../features/posts/postsSlice";

interface PostCardProps {
  post: PostDetails;
}

const PostCard = ({ post }: PostCardProps): JSX.Element => {
  const dispatch = useAppDispatch();

  return (
    <Table.Row key={post.id}>
      <Table.Cell>{post.title}</Table.Cell>
      <Table.Cell>
        <button
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mx-5 my-2"
          type="button"
          onClick={() => dispatch(deletePost(post.id))}
        >
          Delete
        </button>
        <Link
          to={"/blogs/" + post.id}
          className="font-medium text-blue-600 hover:underline dark:text-blue-500"
        >
          Edit
        </Link>
      </Table.Cell>
    </Table.Row>
  );
};

export default PostCard;
