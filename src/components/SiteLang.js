import React, { useState } from "react";
import roFlag from "../assets/flags/ro.png";
import enFlag from "../assets/flags/en.png";

function SiteLang({ anchorClassName, dropdownClassName }) {
  const [showLang, setShowLang] = useState(false);
  const [activeLang, setActiveLang] = useState("ro");

  const handleShowLang = () => {
    setShowLang(!showLang);
  };

  const getSiteLang = () => {
    if (activeLang === "en") {
      return enFlag;
    }
    return roFlag;
  };

  return (
    <div>
      <a href="#lang" onClick={handleShowLang} className={`${anchorClassName}`}>
        <img
          src={getSiteLang()}
          alt="flag"
          className="w-7 h-7 rounded-full cursor-pointer"
        />
      </a>
      {showLang && (
        <div
          onClick={() => setActiveLang("en")}
          className={`${dropdownClassName}`}
        >
          <img
            src={`${activeLang === "ro" ? enFlag : roFlag}`}
            alt="en"
            className="w-7 h-7 rounded-full cursor-pointer"
          />
        </div>
      )}
    </div>
  );
}

export default SiteLang;
