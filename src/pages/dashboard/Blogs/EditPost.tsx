import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { editPost, getPost } from "../../../features/posts/postsSlice";
import { PostDetails } from "../../../models/category.interface";
import FormRow from "../../../components/FormRow";

const EditPost = () => {
  const { selectedPost } = useAppSelector((store) => store.postsSlice);

  const [value, setValue] = useState<PostDetails | undefined>(selectedPost);

  const { id } = useParams();
  const dispacth = useAppDispatch();

  useEffect(() => {
    dispacth(getPost(id as string));
  }, [id]);

  useEffect(() => {
    setValue(selectedPost);
  }, [selectedPost]);

  const handleCategoryInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const inputValue = e.target.value;
    setValue({ ...value, [name]: inputValue } as PostDetails);
  };

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value) {
      dispacth(editPost(value));
    }
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div className="form-center">
          {/* {label} */}

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

export default EditPost;
