import React from "react";
import KTSVG from "../utils/KTSVG";
import { useTranslation } from "react-i18next";
import { clientConfig } from "../configs/clientConfig";
import GoogleMaps from "./GoogleMaps";

function Contact() {
  const { t: translate } = useTranslation();

  return (
    <div className="p-[5px] sm:p-[20px] lg:p-[40px]">
      <h2 className="text-primary-color text-center text-xl lg:text-2xl xl:text-3xl py-[10px] md:pb-0 mb-0 md:mb-[20px] lg:mb-[40px]  font-bold">
        {translate("contact_section_title")}
      </h2>
      <div className="bg-gray-50 max-w-7xl mx-auto flex flex-row justify-center items-center lg:justify-between rounded-xl p-2 sm:p-10 ">
        <KTSVG
          className="w-2/4 h-full  hidden lg:flex"
          path="/assets/support.svg"
        />

        <div className=" w-full lg:w-2/5 flex flex-col justify-between">
          <div className="bg-white drop-shadow-sm p-4 mb-2 md:mb-4">
            <h3 className="text-primary-color text-xl font-semibold mb-2">
              {translate("contact_subsection_1_title")}
            </h3>
            <p className="text-sm xl:text-base font-medium">
              <span className="text-primary-color mr-2 text-[18px]">
                <i class="fa fa-envelope-o" aria-hidden="true" />
              </span>
              {clientConfig.email}
            </p>

            <p className="text-sm xl:text-base font-medium">
              <span className="text-primary-color mr-2 text-[18px]">
                <i class="fa fa-phone" aria-hidden="true" />
              </span>
              {clientConfig.primaryPhoneNumber}
            </p>

            <p className="text-sm xl:text-base font-medium">
              <span className="text-primary-color mr-2 text-[18px]">
                <i class="fa fa-phone-square" aria-hidden="true" />
              </span>
              {clientConfig.secondaryPhoneNumber}
            </p>

            <p className="text-sm xl:text-base font-medium">
              <span className="text-primary-color mr-2 text-[18px]">
                <i class="fa fa-map-marker" aria-hidden="true" />
              </span>
              {clientConfig.addressLocation}
            </p>
          </div>

          <div className="bg-white drop-shadow-sm p-4 mb-2 md:mb-4">
            <h3 className="text-primary-color text-xl font-semibold mb-2">
              {translate("contact_subsection_2_title")}
            </h3>
            <p className="text-sm xl:text-base font-medium">
              Nr.Ord.Reg.Com.:{" "}
              <span className="font-semibold">{clientConfig.orderNumber}</span>
            </p>

            <p className="text-sm xl:text-base font-medium">
              CUI: <span className="font-semibold">{clientConfig.CUI}</span>
            </p>

            <p className="text-sm xl:text-base font-medium">
              {translate("contact_subsection_2_account")}:{" "}
              <span className="font-semibold">{clientConfig.bankAccount}</span>
            </p>

            <p className="text-sm xl:text-base font-medium">
              {clientConfig.bankName}
            </p>

            <p className="text-sm xl:text-base font-medium">
              {translate("contact_subsection_2_treasury_account")}:{" "}
              <span className="font-semibold">
                {clientConfig.treasuryAccount}
              </span>
            </p>
          </div>

          <div className="bg-white drop-shadow-sm p-4 ">
            <h3 className="text-primary-color text-xl font-semibold mb-2">
              {translate("contact_subsection_3_title")}
            </h3>
            <p className="text-sm xl:text-base font-medium">
              <span className="text-primary-color mr-2 text-[18px]">
                <i class="fa fa-handshake-o" aria-hidden="true" />
              </span>
              {clientConfig.department_email_1}
            </p>

            <p className="text-sm xl:text-base font-medium">
              <span className="text-primary-color mr-2 text-[18px]">
                <i class="fa fa-balance-scale" aria-hidden="true" />
              </span>
              {clientConfig.department_email_2}
            </p>

            <p className="text-sm xl:text-base font-medium">
              <span className="text-primary-color mr-2 text-[18px]">
                <i class="fa fa-credit-card-alt" aria-hidden="true" />
              </span>
              {clientConfig.department_email_3}
            </p>

            <p className="text-sm xl:text-base font-medium">
              <span className="text-primary-color mr-2 text-[18px]">
                <i class="fa fa-truck" aria-hidden="true" />
              </span>
              {clientConfig.department_email_4}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-5">
        <GoogleMaps
          height={400}
          width={"100%"}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2855.322727795014!2d23.895384976581383!3d44.30331551014094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4752d6f84da788b3%3A0x7967f1e59987ec23!2s2A%20FARM!5e0!3m2!1sro!2sro!4v1699870969394!5m2!1sro!2sro"
          title="map-location"
        />
      </div>
    </div>
  );
}

export default Contact;
