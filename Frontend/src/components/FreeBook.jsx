import React from "react";
import {useState, useEffect} from "react";
import axios from "axios";
import Slider from "react-slick";
import Card from "./Card";

const FreeBook = () => {
  const[FreeBook, setFreeBook] = useState([]);
  useEffect(() => {
    try{
      const getBooks = async () => {
        try {
          const response = await axios.get("http://localhost:3000/book");
          console.log(response.data);
          setFreeBook(response.data);
        } catch (error) {
          console.log(error);
        }
      };
      getBooks();
    }catch(e){
      console.log(e)
    }
  },[]);

  const filterData = FreeBook.filter((item) => {
    return item.type === "Free";
  });

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
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 0,
          dots: true
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false
        }
      }
    ]
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-8 lg:px-20">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 md:mb-5">
          Free Offered Courses
        </h1>
        <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
          Free offered books are given at no cost through libraries, schools, or
          websites. They include classics and educational materials, helping
          people learn and encouraging reading.
        </p>
      </div>
      
      <div className="slider-container max-w-screen-2xl container mx-auto px-4 md:px-8 lg:px-20 my-10 md:my-16 lg:my-20">
        <Slider {...settings}>
          {filterData.map((item) => (
            <div key={item.id} className="px-2 sm:px-3 md:px-4 lg:px-5">
              <Card item={item} />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default FreeBook;