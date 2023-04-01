import React, { useEffect } from "react";
import { getCategories } from "../features/categories/categoriesSlice";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import CategoryCard from "../components/CategoryCard";
import { Link } from "react-router-dom";

export default function Categories() {
  const { categoriesResult } = useAppSelector((store) => store.categoriesSlice);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <div className="text-center m-5">
      <Link
        to="/categories/add"
        className="pb-10px bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
      >
        Create
      </Link>

      <table className="table-fixed px-3">
        <thead>
          <tr>
            <th>Label</th>
            <th>Description</th>
            <th>title</th>
          </tr>
        </thead>
        <tbody>
          {categoriesResult?.categories.map((category) => {
            return <CategoryCard category={category} />;
          })}
        </tbody>
      </table>
    </div>
  );
}
