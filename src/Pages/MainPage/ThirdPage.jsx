import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import one from '../../assets/pre/one.webp'
import two from '../../assets/pre/two.webp'
import three from '../../assets/pre/three.webp'
import four from '../../assets/pre/four.webp'
import five from '../../assets/pre/five.webp'
import six from '../../assets/pre/six.webp'
import seven from '../../assets/pre/seven.webp'
import eight from '../../assets/pre/eight.webp'
import nine from '../../assets/pre/nine.webp'
import LazyImageCard from "../../Components/LazyImageCard";

const ThirdPage = () => {
  return (
    <div className="max-w-[1300px] p-2 m-auto">
      <h1
        className="text-2xl md:text-3xl lg:text-5xl m-4 font-medium text-center mt-10"
        style={{ fontFamily: "Playwrite DK Loopet, cursive" }}
      >
        Pre Wedding Clicks
      </h1>
      <div className="flex w-[100%] flex-wrap items-center">
        <div className="w-1/4">
          <div className="w-[90%] m-auto">
            <div className="p-2 shadow-lg rounded-lg bg-white mb-4">
              
              <LazyImageCard src={one} alt="pre-wedding 1" heightClass="h-[120px] md:h-[240px] sm:h-[150px] xs:h-[120px]" />

            </div>
            <div className="p-2 shadow-lg rounded-lg bg-white mb-4">
              <img
                className="w-full h-[200px] md:h-[200px] sm:h-[110px] xs:h-[100px] object-cover rounded-lg shadow-md"
                src={two}
                alt="pre-wedding 2"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        <div className="w-1/4">
          <div className="w-[90%] m-auto">
            <div className="p-2 shadow-lg rounded-lg bg-white mb-4">
              <img
                className="w-full h-[150px] md:h-[350px] sm:h-[210px] xs:h-[140px] object-cover rounded-lg shadow-md"
                src={three}
                alt="pre-wedding 3"
                loading="lazy"
              />
            </div>
            <div className="p-2 shadow-lg rounded-lg bg-white mb-4">
              <img
                className="w-full h-[60px] md:h-[160px] sm:h-[60px] xs:h-[40px] object-cover rounded-lg shadow-md"
                src={four}
                alt="pre-wedding 4"
                loading="lazy"
              />
            </div>
            <div className="p-2 shadow-lg rounded-lg bg-white mb-4">
              <img
                className="w-full h-[160px] md:h-[160px] sm:h-[50px] xs:h-[50px] object-cover rounded-lg shadow-md"
                src={five}
                alt="pre-wedding 5"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        <div className="w-1/4">
          <div className="w-[90%] m-auto">
            <div className="p-2 shadow-lg rounded-lg bg-white mb-4">
              <img
                className="w-full h-[220px] md:h-[320px] sm:h-[170px] xs:h-[90px] object-cover rounded-lg shadow-md"
                src={six}
                alt="pre-wedding 6"
                loading="lazy"
              />
            </div>
            <div className="p-2 shadow-lg rounded-lg bg-white mb-4">
              <img
                className="w-full h-[200px] md:h-[400px] sm:h-[200px] xs:h-[150px] object-cover rounded-lg shadow-md"
                src={seven}
                alt="pre-wedding 7"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        <div className="w-1/4">
          <div className="w-[90%] m-auto">
            <div className="p-2 shadow-lg rounded-lg bg-white mb-4">
              <img
                className="w-full h-[200px] md:h-[200px] sm:h-[90px] xs:h-[100px] object-cover rounded-lg shadow-md"
                src={eight}
                alt="pre-wedding 8"
                loading="lazy"
              />
            </div>
            <div className="p-2 shadow-lg rounded-lg bg-white mb-4">
              <img
                className="w-full h-[140px] md:h-[140px] sm:h-[50px] xs:h-[40px] object-cover rounded-lg shadow-md"
                src={nine}
                alt="pre-wedding 9"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <Link to="/gallery">
          <button className="px-6 py-1 bg-black text-white rounded-lg shadow-md hover:bg-black transition-all font-semibold cursor-pointer">
            View Gallery
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ThirdPage;
