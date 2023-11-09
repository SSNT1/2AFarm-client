import React from "react";
import Content from "./Content";

function FullBgWithContentComponent({
  backgroundImage,
  title,
  type,
  description,
  buttonText,
  wrapperClassName,
  contentType,
  contentBackground,
}) {
  const getBackgroundImage = () => {
    if (backgroundImage) {
      return `bg-[url('https://images.pexels.com/photos/5998512/pexels-photo-5998512.jpeg?cs=srgb&dl=pexels-pavel-danilyuk-5998512.jpg&fm=jpg')]`;
    }

    return "bg-gradient-to-r from-cyan-500 to-blue-500";
  };

  const getContentBackground = () => {
    if (contentBackground) {
      return contentBackground;
    }
    return "bg-white backdrop-blur-sm";
  };

  return (
    <div
      className={`flex justify-center ${
        type === "reverse" ? "lg:justify-start" : "lg:justify-end"
      } ${getBackgroundImage()} bg-center bg-cover bg-no-repeat 
       h-[420px] lg:h-[800px] duration-500  ${wrapperClassName}`}
      style={{
        backgroundImage: `${backgroundImage ? `url(${backgroundImage})` : ""}`,
      }}
    >
      <Content
        contentType={contentType}
        wrapperClassName={`${getContentBackground()} flex flex-col justify-center items-center
        min-h-full
        sm:w-2/4 lg:w-1/3 
        sm:mx-[60px]
        bg-opacity-5 sm:bg-opacity-70`}
        contentClassName="p-10 lg:p-10 xl:p-16 flex flex-col justify-center items-start"
        title={title}
        description={description}
        descriptionColor={"text-white md:text-black"}
        buttonText={buttonText}
      />
    </div>
  );
}

export default FullBgWithContentComponent;
