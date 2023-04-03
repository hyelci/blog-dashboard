import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  editCategory,
  getCategory,
} from "../../../features/categories/categoriesSlice";
import FormRow from "../../../components/FormRow";
import { CategoryDetails } from "../../../models/category.interface";

const EditCategory = () => {
  const { selectedCategory } = useAppSelector((store) => store.categoriesSlice);

  const [value, setValue] = useState<CategoryDetails | undefined>(
    selectedCategory
  );

  const { id } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCategory(id as string));
  }, [id]);

  useEffect(() => {
    if (selectedCategory) {
      const { displayPosition, ...rest } = selectedCategory;
      setValue(rest);
    }
  }, [selectedCategory]);

  const handleCategoryInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const inputValue = e.target.value;
    setValue({ ...value, [name]: inputValue } as CategoryDetails);
  };

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value) {
      dispatch(editCategory(value));
    }
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div className="form-center">
          {/* {label} */}

          <FormRow
            type="text"
            name="label"
            value={value?.label}
            handleChange={handleCategoryInput}
          />

          {/* {post count} */}
          <FormRow
            type="text"
            name="description"
            value={value?.description}
            handleChange={handleCategoryInput}
          />

          <FormRow
            type="text"
            name="title"
            value={value?.title}
            handleChange={handleCategoryInput}
          />
        </div>

        <div>
          <button
            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mx-5 my-2"
            type="submit"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditCategory;
