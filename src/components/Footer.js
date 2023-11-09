import React from "react";
import { toAbsoluteUrl } from "../helpers/assetHelper";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t: translate } = useTranslation();

  return (
    <div className="bg-primary-color text-[.75em]">
      <div
        className="flex flex-col items-center justify-between px-[60px] py-[40px] 
      lg:flex-row"
      >
        <div className="w-full lg:w-1/2 text-center lg:text-justify flex flex-col justify-between mb-10 lg:mb-0">
          <div
            className=" flex flex-col justify-center items-center mb-10
            lg:flex-row
            lg:items-start 
            lg:justify-between "
          >
            <div className="flex flex-col text-white  mb-5 lg:mb-0">
              <h5 className="text-green-200 font-medium  mb-[7px]">
                {translate("footer_section_1_title")}
              </h5>
              <p className="cursor-pointer hover:underline">
                {translate("footer_section_1_subtitle_1")}
              </p>
              <p className="cursor-pointer hover:underline">
                {" "}
                {translate("footer_section_1_subtitle_2")}
              </p>
              <p className="cursor-pointer hover:underline">
                {translate("footer_section_1_subtitle_3")}
              </p>
            </div>

            <div className="flex flex-col text-white  mb-5 lg:mb-0">
              <h5 className="text-green-200 font-medium  mb-[7px]">
                {translate("footer_section_2_title")}
              </h5>
              <p className="cursor-pointer hover:underline">
                {translate("footer_section_2_subtitle_1")}
              </p>
              <p className="cursor-pointer hover:underline">
                {translate("footer_section_2_subtitle_2")}
              </p>
            </div>

            <div className="flex flex-col text-white">
              <h5 className="text-green-200 font-medium mb-[7px]">
                {translate("footer_section_3_title")}
              </h5>
              <p className="cursor-pointer hover:underline">
                {translate("footer_section_3_subtitle_1")}
              </p>
              <p className="cursor-pointer hover:underline">
                {" "}
                {translate("footer_section_3_subtitle_2")}
              </p>
              <p className="cursor-pointer hover:underline">
                {" "}
                {translate("footer_section_3_subtitle_3")}
              </p>
            </div>
          </div>

          <h5 className="text-green-200 font-medium">
            © 2023 2A Farm Distribution
          </h5>
        </div>

        <div className="flex flex-col ">
          <a
            href="https://anpc.ro/ce-este-sal/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={toAbsoluteUrl("/assets/anpc/ANPC-1.png")}
              width={200}
              alt="anpc1"
            />
          </a>

          <a
            href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=RO"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={toAbsoluteUrl("/assets/anpc/ANPC-2.png")}
              width={200}
              alt="anpc2"
              className="mt-3"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
