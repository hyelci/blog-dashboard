import { useAppDispatch } from "../app/hooks";
import { TagDetails } from "../models/category.interface";
import { Table } from "flowbite-react";
import { removeTag } from "../features/tags/tagsSlice";

interface TagCardProps {
  tag: TagDetails;
}

const TagCard = ({ tag }: TagCardProps): JSX.Element => {
  const dispatch = useAppDispatch();

  return (
    <Table.Row key={tag.id}>
      <Table.Cell>{tag.label}</Table.Cell>
      <Table.Cell>{tag.slug}</Table.Cell>
      <Table.Cell>{tag.language}</Table.Cell>
      <Table.Cell>
        <button
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mx-5 my-2"
          type="button"
          onClick={() => dispatch(removeTag(tag.id))}
        >
          Delete
        </button>
      </Table.Cell>
    </Table.Row>
  );
};

export default TagCard;
