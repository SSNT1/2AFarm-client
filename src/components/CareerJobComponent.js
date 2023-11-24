import React from "react";
import Button from "./Button";

function CareerJobComponent({
  jobTitle,
  jobDescription,
  jobSalary,
  wrapperClassName,
  jobTypeSalary,
}) {
  return (
    <div
      className={`${wrapperClassName} bg-white drop-shadow-sm p-4 mb-2 md:mb-4 `}
    >
      <div>
        <h3 className="text-primary-color text-xl font-semibold">{jobTitle}</h3>
        <p className="text-sm xl:text-base font-medium">{jobDescription}</p>
        <p className="text-sm xl:text-base font-medium ">
          {jobSalary} {jobTypeSalary}
        </p>
      </div>

      <div className="flex flex-row justify-between">
        <div />
        <Button variant="primary">APLICA</Button>
      </div>
    </div>
  );
}

export default CareerJobComponent;
