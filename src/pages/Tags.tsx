import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { getTags } from "../features/tags/tagsSlice";
import { Table } from "flowbite-react";
import TagCard from "../components/TagCard";
import { Link } from "react-router-dom";

const Tags = () => {
  const { tagsResult } = useAppSelector((store) => store.tagsSlice);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTags());
  }, []);

  return (
    <div>
      <Table className="m-4">
        <Table.Head>
          <Table.HeadCell>Label</Table.HeadCell>
          <Table.HeadCell>Slug</Table.HeadCell>
          <Table.HeadCell>Language</Table.HeadCell>
        </Table.Head>
        <Table.Body>
          {tagsResult?.tags.map((tag) => {
            return <TagCard tag={tag} />;
          })}
        </Table.Body>
      </Table>
      <div className="my-5 flex flex-col items-center justify-center">
        <Link
          to="/tags/add"
          className=" bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          Create
        </Link>
      </div>
    </div>
  );
};

export default Tags;
