import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="max-w-screen-2xl mx-auto px-4 md:px-20 py-16 flex flex-col-reverse md:flex-row items-center gap-12">
      
      {/* Left Content */}
      <div className="w-full md:w-1/2 flex flex-col justify-center space-y-6 md:space-y-8">
        <h1 className="text-4xl font-bold mt-6 md:mt-0">
          Hello, welcome here to learn something
          <span className="text-fuchsia-500"> new everyday !!!</span>
        </h1>
        <p className="text-xl leading-relaxed">
         Every page opens a new adventure! Discover stories that spark your imagination and inspire your curiosity. Find your next great read today.
        </p>

        {/* Email + Button */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 gap-3 mt-2 ">
          <Link to="/aboutus">
          <a className="btn btn-outline btn-primary w-full sm:w-auto lg:w-[400px]">More Information</a>
          </Link>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end mb-8 md:mb-0">
        <img
          src="/booktree.com.png"
          alt="Banner"
          className="w-full max-w-md object-cover"
        />
      </div>

    </section>
  );
};

export default Banner;
