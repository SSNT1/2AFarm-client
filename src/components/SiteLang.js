import React, { useCallback, useState } from "react";
import { languages } from "../lang/i18n";
import { useTranslation } from "react-i18next";

function SiteLang({
  wrapperClassName,
  dropdownClassName,
  dropdownImageClassName,
}) {
  const { i18n } = useTranslation();

  const [showLang, setShowLang] = useState(false);

  const handleSelectCountry = useCallback(
    (selectedCountry) => {
      i18n.changeLanguage(selectedCountry.code);
      setShowLang(false);
    },
    [i18n]
  );

  const selectedLanguageFromStorage = languages.find(
    (language) => language.code === i18n.language
  );

  if (!selectedLanguageFromStorage) {
    return null;
  }

  const withoutSelectedLanguage = languages.filter((languages) => {
    return languages.country_flag !== selectedLanguageFromStorage.country_flag;
  });

  return (
    <div>
      <div
        onClick={() => setShowLang((prev) => !prev)}
        className={`cursor-pointer ${wrapperClassName}`}
      >
        <img
          src={selectedLanguageFromStorage.country_flag}
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
