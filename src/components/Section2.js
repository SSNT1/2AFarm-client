import React from "react";
import Content from "./Content";

function Section2({
  backgroundImage,
  title,
  type,
  description,
  buttonText,
  wrapperClassName,
  contentType,
}) {
  const getBackgroundImage = () => {
    if (backgroundImage) {
      return `bg-[url('https://images.pexels.com/photos/5998512/pexels-photo-5998512.jpeg?cs=srgb&dl=pexels-pavel-danilyuk-5998512.jpg&fm=jpg')]`;
    }

    return "bg-gradient-to-r from-cyan-500 to-blue-500";
  };

  return (
    <div
      className={`flex ${
        type === "reverse" ? "justify-start" : "justify-end"
      } ${getBackgroundImage()} bg-center bg-cover bg-no-repeat 
      h-[800px] duration-500  ${wrapperClassName}`}
      style={{
        backgroundImage: `${backgroundImage ? `url(${backgroundImage})` : ""}`,
      }}
    >
      <Content
        contentType={contentType}
        wrapperClassName={`bg-white bg-opacity-70 backdrop-blur-sm w-1/3 
        mx-[60px] min-h-full flex flex-col justify-center items-center`}
        contentClassName="p-16 flex flex-col justify-center items-start"
        title={title}
        description={description}
        buttonText={buttonText}
      />
    </div>
  );
}

export default Section2;
