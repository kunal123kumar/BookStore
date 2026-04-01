import React from "react";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar.jsx";
import axios from "axios";
import Card from "./Card.jsx";
import { Link } from "react-router-dom";

const CourseContent = () => {
  const [Data, setData] = useState([]);
  useEffect(() => {
    const getBooks = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/book`);
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBooks();
  }, []);
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-8 lg:px-20 py-16 md:py-24">
          {/* Main Content */}
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
              Read Beyond Limits.{" "}
              <span className="text-fuchsia-600 dark:text-fuchsia-400">
                Learn Without Boundaries
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-10">
              Explore a wide collection of free and paid books, thoughtfully
              curated to expand your knowledge, sharpen your skills, and spark
              your imagination. Whether you read for passion or purpose, there's
              something here for every curious mind.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/">
                <button className="px-8 py-4 bg-fuchsia-600 text-white rounded-lg font-semibold hover:bg-fuchsia-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Go to Back
                </button>
              </Link>
            </div>
          </div>

          {/* Visual Element */}
          {/* <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 opacity-50">
            <div className="h-40 bg-gradient-to-br from-purple-200 to-pink-200 rounded-lg"></div>
            <div className="h-40 bg-gradient-to-br from-pink-200 to-fuchsia-200 rounded-lg"></div>
            <div className="h-40 bg-gradient-to-br from-fuchsia-200 to-purple-200 rounded-lg"></div>
            <div className="h-40 bg-gradient-to-br from-purple-200 to-pink-200 rounded-lg"></div>
          </div> */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 gap-y-8">
            {Data.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseContent;
