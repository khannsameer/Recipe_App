import React, { useState } from "react";

const ImageWithSkeleton = ({ src, alt, className = "", ...props }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative w-full h-full">
      {/* Shimmer skeleton */}
      {!loaded && (
        <div className="absolute inset-0 bg-gray-800 overflow-hidden rounded-lg animate-pulse">
          <div className="shimmer" />
        </div>
      )}
      <img
        src={src}
        alt={alt || "Image"}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`w-full h-full object-cover rounded-lg transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        } ${className}`}
        {...props}
      />
    </div>
  );
};

export default ImageWithSkeleton;
