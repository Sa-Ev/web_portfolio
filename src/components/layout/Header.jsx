import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import ProfileImage from "@/components/layout/ProfileImage.jsx";

const Header = () => {
  const { t, language, setLanguage } = useLanguage();

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <header className="bg-white p-6 flex flex-col md:flex-row items-center">
      <div className="flex flex-col md:flex-row items-center">
        <div className="mr-6 mb-4 md:mb-0">
          <ProfileImage />
        </div>
        <div>
          <Link to="/" className="block hover:text-blue-700">
            <h1 className="text-3xl font-bold">{t("header.title")}</h1>
          </Link>
          <h2 className="text-xl mt-2">{t("header.profession")}</h2>
          <p className="mt-1 text-gray-600">{t("header.subtitle")}</p>
        </div>
      </div>
      <div className="ml-auto mt-4 md:mt-0">
        <select
          value={language}
          onChange={handleLanguageChange}
          className="p-2 border rounded"
        >
          <option value="ru">Русский</option>
          <option value="de">Deutsch</option>
          <option value="en">English</option>
        </select>
      </div>
    </header>
  );
};

export default Header;
