import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Login from "./Login";
import { useAuth } from "../context/AuthProvider";
import Goout from "./Goout";

function Navbar() {
  const [authUser] = useAuth();
  console.log(authUser);

  let location = useLocation();
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <nav
        className={`navbar ${
          sticky ? "navbar-dark" : ""
        } fixed-top navbar-expand-lg ${
          sticky ? "bg-dark" : "bg-body-tertiary"
        } `}
      >
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold" to="/">
            BookStore
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
                <Link
                  className={`nav-link ${
                    location.pathname === "/" ? "active" : ""
                  }  `}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li
                className={`nav-item ${
                  location.pathname === "/course" ? "active" : ""
                }  `}
              >
                <Link
                  className="nav-link"
                  to={authUser ? `/course` : `/signup`}
                >
                  Course
                </Link>
              </li>

              <li
                className={`nav-item ${
                  location.pathname === "/contact" ? "active" : ""
                }  `}
              >
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
              <li
                className={`nav-item ${
                  location.pathname === "/about" ? "active" : ""
                }  `}
              >
                <a className="nav-link" href="/">
                  About
                </a>
              </li>
            </ul>

            {authUser ? (
              <Goout />
            ) : (
              <button
                type="button"
                className="btn btn-primary m-2"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Login
              </button>
            )}
          </div>
        </div>
      </nav>
      <Login />
    </>
  );
}

export default Navbar;
