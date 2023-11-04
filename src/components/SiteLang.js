import React, { useState } from "react";

const languages = [
  {
    code: "ro",
    country_flag:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flag_of_Romania.svg/255px-Flag_of_Romania.svg.png",
  },
  {
    code: "en",
    country_flag:
      "https://cdn.britannica.com/25/4825-004-F1975B92/Flag-United-Kingdom.jpg",
  },
  {
    code: "it",
    country_flag:
      "https://www.worldometers.info/img/flags/small/tn_it-flag.gif",
  },
];

function SiteLang({
  wrapperClassName,
  dropdownClassName,
  dropdownImageClassName,
}) {
  const [showLang, setShowLang] = useState(false);
  const [defaultLang, setDefaultLang] = useState(languages[0]);

  const handleSelectCountry = (selectedCountry) => {
    setShowLang(false);
    setDefaultLang(selectedCountry);
  };

  const withoutSelectedLanguage = languages.filter((languages) => {
    return languages.country_flag !== defaultLang.country_flag;
  });

  return (
    <div>
      <div
        onClick={() => setShowLang((prev) => !prev)}
        className={`cursor-pointer ${wrapperClassName}`}
      >
        <img
          src={defaultLang.country_flag}
          alt="flag"
          className="w-9 h-9 px-[3px] py-[3px] rounded-full bg-primary-color bg-opacity-50"
        />
      </div>

      {showLang && (
        <div className={` ${dropdownClassName}`}>
          {withoutSelectedLanguage.map((language) => {
            return (
              <button
                key={language.code}
                onClick={() => handleSelectCountry(language)}
              >
                <img
                  src={language.country_flag}
                  alt="flag"
                  className={`w-9 h-9  px-[3px] py-[3px] hover:bg-primary-light-color rounded-full bg-center bg-cover bg-no-repeat ease-out duration-500} ${dropdownImageClassName}`}
                />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SiteLang;
