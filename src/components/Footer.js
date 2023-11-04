import React from "react";
import ANPC1 from "../assets/anpc/ANPC-1.png";
import ANPC2 from "../assets/anpc/ANPC-2.png";

function Footer() {
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
                Termeni Legali
              </h5>
              <p className="cursor-pointer hover:underline">
                Termeni si Conditii
              </p>
              <p className="cursor-pointer hover:underline">Regulament</p>
              <p className="cursor-pointer hover:underline">
                Protectia Consumatorului
              </p>
            </div>

            <div className="flex flex-col text-white  mb-5 lg:mb-0">
              <h5 className="text-green-200 font-medium  mb-[7px]">
                Confidentialitate
              </h5>
              <p className="cursor-pointer hover:underline">
                Politica de confidentialitate
              </p>
              <p className="cursor-pointer hover:underline">
                Politica privind fisierele cookie
              </p>
            </div>

            <div className="flex flex-col text-white">
              <h5 className="text-green-200 font-medium mb-[7px]">2A Farm</h5>
              <p className="cursor-pointer hover:underline">
                Vanzari Medicamente
              </p>
              <p className="cursor-pointer hover:underline">Parteneri</p>
              <p className="cursor-pointer hover:underline">Contacteaza-ne</p>
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
            <img src={ANPC1} width={200} alt="anpc1" />
          </a>

          <a
            href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=RO"
            target="_blank"
            rel="noreferrer"
          >
            <img src={ANPC2} width={200} alt="anpc2" className="mt-5" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
