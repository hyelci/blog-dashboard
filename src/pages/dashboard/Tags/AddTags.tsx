import FormRow from "../../../components/FormRow";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { CreateTagRequest } from "../../../models/category.interface";
import { createTag } from "../../../features/tags/tagsSlice";

const initialState: CreateTagRequest = {
  label: "",
  language: "",
  slug: "",
};

const AddTags = () => {
  const [value, setValue] = useState<CreateTagRequest>(initialState);
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!value.label) {
      alert("Please fill in the inputs");
      return;
    }

    dispatch(createTag(value));
  };

  const handleCategoryInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const inputValue = e.target.value;
    setValue({ ...value, [name]: inputValue });
  };

  return (
    <div>
      <form
        action=""
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl my-10">Add Tag</h2>
        <div className="form-center">
          {/* {label} */}

          <FormRow
            type="text"
            name="label"
            visibleLabel="Label"
            value={value.label}
            handleChange={handleCategoryInput}
          />

          {/* {slug} */}
          <FormRow
            type="text"
            name="slug"
            value={value.slug}
            handleChange={handleCategoryInput}
          />

          <FormRow
            type="text"
            name="language"
            value={value.language}
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

export default AddTags;
