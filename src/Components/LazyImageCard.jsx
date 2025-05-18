// components/LazyMasonryImage.jsx
import React from "react";
import LazyLoad from "react-lazyload";

const LazyMasonryImage = ({ src, alt, onClick }) => {
  return (
    <LazyLoad height={200} offset={100} once>
      <img
        src={src}
        alt={alt}
        onClick={onClick}
        style={{ width: "100%", display: "block", cursor: "pointer", borderRadius: "6px" }}
        loading="lazy"
      />
    </LazyLoad>
  );
};

export default LazyMasonryImage;
