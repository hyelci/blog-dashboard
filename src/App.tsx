import React from "react";
import { Routes, Route } from "react-router-dom";
import SharedLayout from "./components/SharedLayout";
import Categories from "./pages/Categories";
import Home from "./pages/Home";
function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />}></Route>
        <Route path="/categories" element={<Categories />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
