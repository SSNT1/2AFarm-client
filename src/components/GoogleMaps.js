import React from "react";

function GoogleMaps({ src, title, height, width, className }) {
  return (
    <iframe
      title={title}
      className={className}
      src={src}
      width={width}
      height={height}
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    />
  );
}

export default GoogleMaps;
