import { CategoryDetails } from "../models/category.interface";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { removeCategory } from "../features/categories/categoriesSlice";
import { Link } from "react-router-dom";

interface CategoryCardProps {
  category: CategoryDetails;
}

const CategoryCard = ({ category }: CategoryCardProps): JSX.Element => {
  const dispatch = useAppDispatch();
  return (
    <tr key={category.id}>
      <td>{category.label}</td>
      <td>{category.description}</td>
      <td>{category.title}</td>
      <button
        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mx-5 my-2"
        type="button"
        onClick={() => dispatch(removeCategory(category.id))}
      >
        Delete
      </button>
      <Link
        to={"/categories/" + category.id}
        className="my-10 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
      >
        Edit
      </Link>
    </tr>
  );
};

export default CategoryCard;
