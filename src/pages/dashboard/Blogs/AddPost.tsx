import { useState } from "react";
import { useAppDispatch } from "../../../app/hooks";
import {
  CreatePostRequest,
  CreateTagRequest,
} from "../../../models/category.interface";
import FormRow from "../../../components/FormRow";
import { createPost } from "../../../features/posts/postsSlice";

const initialState: CreatePostRequest = {
  title: "",
};

const AddPost = () => {
  const [value, setValue] = useState<CreatePostRequest>(initialState);
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    // if (!value.label) {
    //   alert("Please fill in the inputs");
    //   return;
    // }

    dispatch(createPost(value));
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
        <h2 className="text-2xl my-10">Add Post</h2>
        <div className="form-center">
          {/* {label} */}

          <FormRow
            type="text"
            name="title"
            visibleLabel="title"
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

export default AddPost;
