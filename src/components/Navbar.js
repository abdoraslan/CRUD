import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-secondary">
      <div className="container-fluid px-5 d-flex justify-content-between">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src="https://www.pngmart.com/files/22/Car-Logo-PNG-HD-Isolated.png"
            alt=""
            style={{ height: 30 }}
          />
          <h5 className="ms-1 " style={{ color: "#EC8526" }}>
            Turbo
          </h5>
        </Link>
        <div>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
