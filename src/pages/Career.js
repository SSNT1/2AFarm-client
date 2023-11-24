import React from "react";

import CareerNavbar from "../components/CareerNavbar";
import { useTranslation } from "react-i18next";
import { jobsConfig } from "../configs/jobsConfig";
import CareerJobComponent from "../components/CareerJobComponent";
import KTSVG from "../utils/KTSVG";
import Footer from "../components/Footer";

function Career() {
  const { t: translate } = useTranslation();

  return (
    <div>
      <CareerNavbar ordersButtonText={translate("navbar_orders")} />

      <div className="pt-[55px]" />

      <div className="p-[15px] sm:p-[20px] lg:p-[40px] max-w-7xl mx-auto">
        <h2 className="text-primary-color text-center text-xl lg:text-2xl xl:text-3xl pb-[15px] md:pb-[20px] lg:pb-[40px]  font-bold">
          Ofertele noastre pentru joburi
        </h2>

        <div className="bg-gray-50   flex flex-col justify-center items-center lg:justify-between rounded-xl p-2 sm:p-10 ">
          <KTSVG
            svgClassName="h-full pb-[40px]"
            className="w-1/4 hidden lg:flex"
            path="/assets/job.svg"
          />

          <div className="w-full flex flex-col justify-between">
            <CareerJobComponent
              jobTitle={translate("career_job_1_title")}
              jobDescription={translate("career_job_1_description")}
              jobSalary={translate("career_job_salary")}
              jobTypeSalary={jobsConfig.pickingSalary}
            />

            <CareerJobComponent
              jobTitle={translate("career_job_1_title")}
              jobDescription={translate("career_job_1_description")}
              jobSalary={translate("career_job_salary")}
              jobTypeSalary={jobsConfig.pickingSalary}
            />

            <CareerJobComponent
              jobTitle={translate("career_job_1_title")}
              jobDescription={translate("career_job_1_description")}
              jobSalary={translate("career_job_salary")}
              jobTypeSalary={jobsConfig.pickingSalary}
            />

            {/* dadass */}
            <CareerJobComponent
              jobTitle={translate("career_job_1_title")}
              jobDescription={translate("career_job_1_description")}
              jobSalary={translate("career_job_salary")}
              jobTypeSalary={jobsConfig.pickingSalary}
            />

            <CareerJobComponent
              jobTitle={translate("career_job_1_title")}
              jobDescription={translate("career_job_1_description")}
              jobSalary={translate("career_job_salary")}
              jobTypeSalary={jobsConfig.pickingSalary}
            />

            <CareerJobComponent
              jobTitle={translate("career_job_1_title")}
              jobDescription={translate("career_job_1_description")}
              jobSalary={translate("career_job_salary")}
              jobTypeSalary={jobsConfig.pickingSalary}
            />
            <CareerJobComponent
              jobTitle={translate("career_job_1_title")}
              jobDescription={translate("career_job_1_description")}
              jobSalary={translate("career_job_salary")}
              jobTypeSalary={jobsConfig.pickingSalary}
            />

            <CareerJobComponent
              jobTitle={translate("career_job_1_title")}
              jobDescription={translate("career_job_1_description")}
              jobSalary={translate("career_job_salary")}
              jobTypeSalary={jobsConfig.pickingSalary}
            />

            <CareerJobComponent
              jobTitle={translate("career_job_1_title")}
              jobDescription={translate("career_job_1_description")}
              jobSalary={translate("career_job_salary")}
              jobTypeSalary={jobsConfig.pickingSalary}
            />
            <CareerJobComponent
              jobTitle={translate("career_job_1_title")}
              jobDescription={translate("career_job_1_description")}
              jobSalary={translate("career_job_salary")}
              jobTypeSalary={jobsConfig.pickingSalary}
            />

            <CareerJobComponent
              jobTitle={translate("career_job_1_title")}
              jobDescription={translate("career_job_1_description")}
              jobSalary={translate("career_job_salary")}
              jobTypeSalary={jobsConfig.pickingSalary}
            />

            <CareerJobComponent
              jobTitle={translate("career_job_1_title")}
              jobDescription={translate("career_job_1_description")}
              jobSalary={translate("career_job_salary")}
              jobTypeSalary={jobsConfig.pickingSalary}
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Career;
