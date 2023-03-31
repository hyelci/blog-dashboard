import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import FormRow from "../../components/FormRow";
import { createCategory } from "../../features/categories/categoriesSlice";
import { CreateCategoryRequest } from "../../models/category.interface";

const initialState: CreateCategoryRequest = {
  label: "",
  description: "",
  title: "",
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
    <form action="" onSubmit={handleSubmit}>
      <h3>Add Category</h3>
      <div className="form-center">
        {/* {label} */}

        <FormRow
          type="text"
          name="label"
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
  );
};

export default AddCategories;
