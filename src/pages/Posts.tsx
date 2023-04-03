import { useAppDispatch, useAppSelector } from "../app/hooks";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Table } from "flowbite-react";
import { getPosts } from "../features/posts/postsSlice";
import PostCard from "../components/PostCard";

const Posts = () => {
  const { postsResult } = useAppSelector((store) => store.postsSlice);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <div className="text-center">
      <Table className="m-4">
        <Table.Head>
          <Table.HeadCell>Title</Table.HeadCell>
        </Table.Head>
        <Table.Body>
          {postsResult?.draftPosts?.map((post) => {
            return <PostCard post={post} />;
          })}
        </Table.Body>
      </Table>
      <div className="my-5 flex flex-col items-center justify-center">
        <Link
          to="/blogs/add"
          className=" bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          Create
        </Link>
      </div>
    </div>
  );
};

export default Posts;
