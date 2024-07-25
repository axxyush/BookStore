import React, { useState, useEffect } from "react";
import Cards from "./Cards";
import { Link } from "react-router-dom";
import axios from "axios";

function Course() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("https://bookstore-ucwf.onrender.com/book");
        // console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log("Error : ", error);
      }
    };
    getBook();
  }, []);
  return (
    <>
      <div className="px-4 py-5 my-5 text-center">
        <h2 className="display-5 fw-bold text-body-emphasis">
          We are delighted to have you <b className="text-danger">Here :)</b>
        </h2>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            Quickly design and customize responsive mobile-first sites with
            Bootstrap, the world’s most popular front-end open source toolkit,
            featuring Sass variables and mixins, responsive grid system,
            extensive prebuilt components, and powerful JavaScript plugins.
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <Link to="/">
              <button
                type="button"
                className="btn btn-danger btn-lg px-4 gap-3"
              >
                Back
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="album py-5 bg-body-tertiary">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {book.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Course;
