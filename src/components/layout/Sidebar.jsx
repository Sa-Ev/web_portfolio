import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import { Phone, Mail } from "lucide-react";

const Sidebar = () => {
  const { t } = useLanguage();
  const location = useLocation();

  return (
    <div className="w-full md:w-64 bg-gray-800 text-white p-6">
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">{t("sidebar.contacts")}</h2>
        <div className="w-full h-0.5 bg-gray-600 mb-4"></div>
        <div className="flex items-center mb-2">
          <Phone size={16} className="mr-2" />
          <span>+4915787107875</span>
        </div>
        <div className="flex items-center">
          <Mail size={16} className="mr-2" />
          <span>sa-ev@gmx.net</span>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">{t("sidebar.skills")}</h2>
        <div className="w-full h-0.5 bg-gray-600 mb-4"></div>
        <p className="mb-2">{t("sidebar.frontEnd")}</p>
        <p className="mb-2">{t("sidebar.teamwork")}</p>
        <p className="mb-2">{t("sidebar.criticalThinking")}</p>
      </section>

      <section className="mb-8">
        <Link
          to="/"
          className={`block w-full py-2 px-4 mb-3 border-2 border-white rounded-xl font-medium hover:bg-white hover:text-gray-800 transition${
            location.pathname === "/" ? "bg-white text-gray-800" : ""
          }`}
        >
          {t("sidebar.home")}
        </Link>
        <Link
          to="/projects"
          className={`block w-full py-2 px-4 mb-3 border-2 border-white rounded-xl font-medium hover:bg-white hover:text-gray-800 transition ${
            location.pathname === "/projects" ? "bg-white text-gray-800" : ""
          }`}
        >
          {t("sidebar.projects")}
        </Link>
        <Link
          to="/work"
          className={`block w-full py-2 px-4 mb-3 border-2 border-white rounded-xl font-medium hover:bg-white hover:text-gray-800 transition ${
            location.pathname === "/work" ? "bg-white text-gray-800" : ""
          }`}
        >
          {t("sidebar.work")}
        </Link>
        <Link
          to="/education"
          className={`block w-full py-2 px-4 mb-3 border-2 border-white rounded-xl font-medium hover:bg-white hover:text-gray-800 transition ${
            location.pathname === "/education" ? "bg-white text-gray-800" : ""
          }`}
        >
          {t("sidebar.education")}
        </Link>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">{t("sidebar.languages")}</h2>
        <div className="w-full h-0.5 bg-gray-600 mb-4"></div>
        <p className="mb-1">{t("sidebar.russian")}</p>
        <p className="mb-1">{t("sidebar.ukrainian")}</p>
        <p className="mb-1">{t("sidebar.german")}</p>
        <p className="mb-1">{t("sidebar.english")}</p>
      </section>
    </div>
  );
};

export default Sidebar;
