import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import { editInfo } from "../../features/categories/categoriesSlice";
import FormRow from "../../components/FormRow";

const EditCategory = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(editInfo(id as string));
  }, []);

  return (
    <div>
      <form action="">
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
    </div>
  );
};

export default EditCategory;
