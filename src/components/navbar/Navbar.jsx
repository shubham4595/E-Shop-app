import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../images/pro.png";
function Navbar() {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg bg-body-tertiary shadow-lg p-3 mb-5 bg-body rounded`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to={"/"}>
            <img src={logo} alt="logo" width="60px" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link fst-bold"
                  aria-current="page"
                  to={"/productlist"}
                >
                  ProductList
                </NavLink>
              </li>
              <li className="nav-item fst-bold">
                <NavLink className="nav-link" to={"/about"}>
                  About
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
