import { CategoryDetails } from "../models/category.interface";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  deleteCategory,
  removeCategory,
} from "../features/categories/categoriesSlice";
import { Link } from "react-router-dom";
import { Table } from "flowbite-react";

interface CategoryCardProps {
  category: CategoryDetails;
}

const CategoryCard = ({ category }: CategoryCardProps): JSX.Element => {
  const dispatch = useAppDispatch();
  return (
    <Table.Row key={category.id}>
      <Table.Cell>{category.label}</Table.Cell>
      <Table.Cell>{category.description}</Table.Cell>
      <Table.Cell>{category.title}</Table.Cell>
      <Table.Cell>
        <button
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mx-5 my-2"
          type="button"
          onClick={() => dispatch(deleteCategory(category.id))}
        >
          Delete
        </button>
        <Link
          to={"/categories/" + category.id}
          className="font-medium text-blue-600 hover:underline dark:text-blue-500"
        >
          Edit
        </Link>
      </Table.Cell>
    </Table.Row>
  );
};

export default CategoryCard;
