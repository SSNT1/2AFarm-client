import React from "react";
import Content from "./Content";

function SectionReverse({
  title,
  description,
  description2,
  buttonText,
  sectionImage,
  type,
  contentType,
}) {
  const getSectionImage = () => {
    if (sectionImage) {
      return sectionImage;
    }

    return "https://media.istockphoto.com/id/1138288756/photo/light-lime-defocused-blurred-motion-abstract-background.webp?b=1&s=170667a&w=0&k=20&c=vXukPMnWmjgNeOnvB7Bs7kneUK5BL-m-huCT84H4oNw=";
  };

  return (
    <div
      className={`p-[60px] flex ${
        type === "reverse" ? "flex-row-reverse" : "flex-row"
      }  justify-between items-center`}
    >
      <div className="w-1/3 h-full mr-16">
        <Content
          contentType={contentType}
          title={title}
          description={description}
          description2={description2}
          buttonText={buttonText}
        />
      </div>

      <img
        alt="pills"
        src={`${getSectionImage()}`}
        className={`${
          type === "reverse" ? "mr-16" : ""
        } w-4/6 h-[520px] object-cover`}
      />
    </div>
  );
}

export default SectionReverse;
