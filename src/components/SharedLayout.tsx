import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

export default function SharedLayout() {
  return (
    <div className="flex flex-row p-4">
      <div className="flex-none" style={{ width: 150 }}>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/categories">Categories</NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-initial">
        <Outlet />
      </div>
    </div>
  );
}
