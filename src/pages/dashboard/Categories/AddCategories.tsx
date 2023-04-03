import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import FormRow from "../../../components/FormRow";
import { createCategory } from "../../../features/categories/categoriesSlice";
import { CreateCategoryRequest } from "../../../models/category.interface";

const initialState: CreateCategoryRequest = {
  label: "",
  description: "",
  title: "",
  displayPosition: 1,
};

const AddCategories = () => {
  const [value, setValue] = useState<CreateCategoryRequest>(initialState);
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!value.label) {
      alert("Please fill in the inputs");
      return;
    }

    dispatch(createCategory(value));
  };

  const handleCategoryInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const inputValue = e.target.value;
    setValue({ ...value, [name]: inputValue });
  };

  return (
    <div className="w-full max-w-xs">
      <form
        action=""
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl my-10">Add Category</h2>
        <div className="form-center">
          {/* {label} */}

          <FormRow
            type="text"
            name="label"
            visibleLabel="Label"
            value={value.label}
            handleChange={handleCategoryInput}
          />

          {/* {post count} */}
          <FormRow
            type="text"
            name="description"
            value={value.description}
            handleChange={handleCategoryInput}
          />

          <FormRow
            type="text"
            name="title"
            value={value.title}
            handleChange={handleCategoryInput}
          />
        </div>

        <div>
          <button
            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mx-5 my-2"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCategories;
