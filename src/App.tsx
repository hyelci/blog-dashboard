import React from "react";
import { Routes, Route } from "react-router-dom";
import SharedLayout from "./components/SharedLayout";
import Categories from "./pages/dashboard/Categories/Categories";
import AddCategories from "./pages/dashboard/Categories/AddCategories";
import EditCategory from "./pages/dashboard/Categories/EditCategory";
import AddTags from "./pages/dashboard/Tags/AddTags";
import Home from "./pages/Home";
import Tags from "./pages/Tags";
import Posts from "./pages/Posts";
import EditPost from "./pages/dashboard/Blogs/EditPost";
import AddPost from "./pages/dashboard/Blogs/AddPost";
import ViewCard from "./pages/ViewCard";


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
        <Route path="/tags">
          <Route index element={<Tags />}></Route>
          <Route path="/tags/add" element={<AddTags />}></Route>
        </Route>

        <Route path="/blogs">
          <Route index element={<Posts />}></Route>
          <Route path="/blogs/add" element={<AddPost />}></Route>
          <Route path="/blogs/:id" element={<EditPost />}></Route>
          <Route path="/blogs/view/:id" element={<ViewCard />}></Route>
        </Route>
                
      </Route>
    </Routes>
  );
}

export default App;
