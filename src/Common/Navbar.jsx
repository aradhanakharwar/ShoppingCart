import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const items = useSelector((state) => state.cart);
  return (
    <div>
      <nav
        className="navbar nv-itm navbar-expand-lg fixed-top navbar-light"
        style={{ backgroundColor: "#d2cafc" }}
      >
        <Link className="navbar-brand" to="/">
          Shopping Store
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto"></ul>
          <span className="navbar-text nav-left">
            <Link className="nav-link " to="/">
              Home
            </Link>
            <Link className="nav-link" to="/cart">
              Cart
              {items.length === 0 ? (
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
              ) : (
                <span
                  className="badge badge-secondary"
                  style={{ margin: "3px" }}
                >
                  {items.length}
                </span>
              )}
            </Link>
          </span>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
