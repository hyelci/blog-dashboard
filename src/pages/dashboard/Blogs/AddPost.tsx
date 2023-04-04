import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  CreatePostRequest,
  CreateTagRequest,
} from "../../../models/category.interface";
import FormRow from "../../../components/FormRow";
import { createPost } from "../../../features/posts/postsSlice";
import { Select, Label, Textarea } from "flowbite-react";
import { getCategories } from "../../../features/categories/categoriesSlice";
import { getTags } from "../../../features/tags/tagsSlice";

const initialState: CreatePostRequest = {
  title: "",
  categoryIds: [],
  tagIds: [],
  content: {
    blocks: [
      {
        type: "unstyled",
        text: "",
        key: "foo",
      },
    ],
  },
};

const AddPost = () => {
  const { categoriesResult } = useAppSelector((store) => store.categoriesSlice);
  const { tagsResult } = useAppSelector((store) => store.tagsSlice);
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

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const categoryValue = e.target.value;
    setValue({ ...value, categoryIds: [categoryValue] });
  };

  const handleTagChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const tagValue = e.target.value;
    setValue({ ...value, tagIds: [tagValue] });
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const textareaValue = e.target.value;
    setValue({
      ...value,
      content: {
        blocks: [{ ...value.content.blocks[0], text: textareaValue }],
      },
    });
  };

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  useEffect(() => {
    dispatch(getTags());
  }, []);

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

        <div id="select">
          <div className="mb-2 block">
            <Label htmlFor="categories" value="Select your category" />
          </div>

          <Select
            onChange={handleCategoryChange}
            id="categories"
            required={true}
          >
            {categoriesResult?.categories.map((option: any) => {
              return <option value={option.id}>{option.label}</option>;
            })}
          </Select>
        </div>

        <div id="select">
          <div className="mb-2 block">
            <Label htmlFor="tags" value="Select your tag" />
          </div>

          <Select onChange={handleTagChange} id="tags" required={true}>
            {tagsResult?.tags.map((tag: any) => {
              return <option value={tag.id}>{tag.label}</option>;
            })}
          </Select>
        </div>

        <div id="textarea">
          <div className="mb-2 block">
            <Label htmlFor="text" value="Your text" />
          </div>
          <Textarea
            id="text"
            placeholder="Leave a text..."
            required={true}
            rows={4}
            onChange={handleTextareaChange}
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
