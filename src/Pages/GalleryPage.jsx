import React from "react";
import MasonryImageList from "../Components/MasonryImageList";
import one from '../assets/pre/one.webp'
import two from '../assets/pre/two.webp'
import three from '../assets/pre/three.webp'
import four from '../assets/pre/four.webp'
import five from '../assets/pre/five.webp'
import six from '../assets/pre/six.webp'
import seven from '../assets/pre/seven.webp'
import eight from '../assets/pre/eight.webp'
import nine from '../assets/pre/nine.webp'
import ten1 from '../assets/pre/11.webp'
import ten2 from '../assets/pre/12.webp'
import ten3 from '../assets/pre/13.webp'
import ten4 from '../assets/pre/14.webp'
import ten5 from '../assets/pre/15.webp'
// import ten6 from '../assets/pre/16.webp'
import ten7 from '../assets/pre/17.webp'
// import ten8 from '../assets/pre/18.webp'
import ten9 from '../assets/pre/19.webp'
import twenty from '../assets/pre/20.webp'
import twenty1 from '../assets/pre/21.webp'
import twenty2 from '../assets/pre/22.webp'
// import twenty3 from '../assets/pre/23.webp'
import twenty4 from '../assets/pre/24.webp'

const itemData = [
  {
    img: one,
    title: "bride and groom",
  },
  {
    img: two,
    title: "bride and groom",
  },
  {
    img: three,
    title: "bride and groom",
  },
  {
    img: four,
    title: "bride and groom",
  },
  {
    img: five,
    title: "bride and groom",
  },
  {
    img: six,
    title: "bride and groom",
  },
  {
    img: seven,
    title: "bride and groom",
  },
  {
    img: eight,
    title: "bride and groom",
  },
  {
    img: nine,
    title: "bride and groom",
  },

  {
    img: ten1,
    title: "bride and groom",
  },
  {
    img: ten2,
    title: "bride and groom",
  },
  {
    img: ten3,
    title: "bride and groom",
  },
  {
    img: ten4,
    title: "bride and groom",
  },
  {
    img: ten5,
    title: "bride and groom",
  },
  // {
  //   img: ten6,
  //   title: "bride and groom",
  // },
  {
    img: ten7,
    title: "bride and groom",
  },
  // {
  //   img: ten8,
  //   title: "bride and groom",
  // },
  {
    img: ten9,
    title: "bride and groom",
  },
  {
    img: twenty,
    title: "bride and groom",
  },
  {
    img: twenty1,
    title: "bride and groom",
  },
  {
    img: twenty2,
    title: "bride and groom",
  },
  // {
  //   img: twenty3,
  //   title: "bride and groom",
  // },
  {
    img: twenty4,
    title: "bride and groom",
  },
  
];

const GalleryPage = () => {
  return (
    <div>
      <h1
        className="text-2xl md:text-3xl lg:text-5xl m-4 font-medium text-center mt-6"
        style={{ fontFamily: "Playwrite DK Loopet, cursive" }}
      >
        Pre Wedding Collection
      </h1>
      <MasonryImageList itemData={itemData} />
    </div>
  );
};

export default GalleryPage;
