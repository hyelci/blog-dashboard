import React, { useEffect } from "react";
import { getCategories } from "../features/categories/categoriesSlice";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import CategoryCard from "../components/CategoryCard";
import { Link } from "react-router-dom";
import { Table } from "flowbite-react";

export default function Categories() {
  const { categoriesResult } = useAppSelector((store) => store.categoriesSlice);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <div className="text-center">
      <Table className="m-4">
        <Table.Head>
          <Table.HeadCell>Label</Table.HeadCell>
          <Table.HeadCell>Description</Table.HeadCell>
          <Table.HeadCell>Title</Table.HeadCell>
        </Table.Head>
        <Table.Body>
          {categoriesResult?.categories.map((category) => {
            return <CategoryCard category={category} />;
          })}
        </Table.Body>
      </Table>
      <div className="my-5 flex flex-col items-center justify-center">
        <Link
          to="/categories/add"
          className=" bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          Create
        </Link>
      </div>
    </div>
  );
}
