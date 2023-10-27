import React from "react";
import Button from "./Button";

function Content({
  title,
  description,
  description2,
  buttonText,
  wrapperClassName,
  contentClassName,
  buttonVariant,
  contentType,
}) {
  return (
    <div className={`${wrapperClassName}`}>
      <div className={`${contentClassName} `}>
        <h2
          className={`text-4xl  ${
            contentType === "secondary" ? "text-white" : "text-primary-color"
          }  font-bold mb-6 drop-shadow-sm`}
        >
          {title}
        </h2>
        <p
          className={`${
            contentType === "secondary" ? "text-white" : "text-black"
          }  text-base font-medium mb-6`}
        >
          {description}
        </p>
        {description2 && (
          <p
            className={`${
              contentType === "secondary" ? "text-white" : "text-black"
            }  text-base font-medium mb-6`}
          >
            {description2}
          </p>
        )}
        {buttonText && (
          <Button
            variant={`${
              contentType === "secondary" ? "secondary" : buttonVariant
            }`}
          >
            {buttonText}
          </Button>
        )}
      </div>
    </div>
  );
}

export default Content;
