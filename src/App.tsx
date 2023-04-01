import React from "react";
import { Routes, Route } from "react-router-dom";
import SharedLayout from "./components/SharedLayout";
import Categories from "./pages/Categories";
import AddCategories from "./pages/dashboard/AddCategories";
import EditCategory from "./pages/dashboard/EditCategory";
import Home from "./pages/Home";


function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />}></Route>

        <Route path="/categories">
          <Route index element={<Categories />}></Route>
          <Route path="/categories/add" element={<AddCategories />}></Route>
          <Route path="/categories/:id" element={<EditCategory />}></Route>
        </Route>
                
      </Route>
    </Routes>
  );
}

export default App;
