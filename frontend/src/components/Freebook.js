import React, { useState, useEffect } from "react";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";

function Freebook() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        // console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log("Error : ", error);
      }
    };
    getBook();
  }, []);

  const filterData = book.filter((data) => data.category === "Free");

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="album py-5 bg-body-tertiary ">
        <div className="container">
          <h2>Free Offered Courses</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            provident aliquid corrupti placeat iusto rerum, magnam voluptatibus
            nemo esse sapiente! Lorem ipsum dolor sit amet consectetur
            adipisicing elit.
          </p>
          <div>
            <Slider {...settings}>
              {filterData.map((item) => (
                <Cards item={item} key={item.id} />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}

export default Freebook;
