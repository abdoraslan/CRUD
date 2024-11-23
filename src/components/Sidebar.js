import React from "react";
import "../components/Sidebar.css";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <ul className="sidebar">
      <li>
        <Link className="link" to="/">
          get All Cars
        </Link>
      </li>
    </ul>
  );
};

export default Sidebar;
