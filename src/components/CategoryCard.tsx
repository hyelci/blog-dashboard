import { CategoryDetails } from "../models/category.interface";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { removeCategory } from "../features/categories/categoriesSlice";

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
      <button
        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mx-5 my-2"
        type="button"
        // onClick={() => dispatch(editCategory(category.id))}
      >
        Edit
      </button>
    </tr>
  );
};

export default CategoryCard;
