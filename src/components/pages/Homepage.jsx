import React from "react";
import { useLanguage } from "../../context/LanguageContext";

const HomePage = () => {
  const { t } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto">
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">{t("home.about")}</h2>
        <div className="w-full h-0.5 bg-blue-700 mb-6"></div>

        <p className="mb-4">{t("home.intro")}</p>
        <p className="mb-4">{t("home.firstStep")}</p>
        <p className="mb-4">{t("home.webPath")}</p>

        <h3 className="text-xl font-semibold mt-6 mb-3">
          {t("home.courseTitle")}
        </h3>
        <div className="flex flex-wrap gap-4 mb-6">
          <TechBadge name="React" url="https://react.dev/" />
          <TechBadge name="Redux" url="https://redux.js.org/" />
          <TechBadge
            name="JavaScript"
            url="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          />
          <TechBadge
            name="HTML, CSS"
            url="https://developer.mozilla.org/en-US/docs/Web/HTML"
          />
          <TechBadge name="TypeScript" url="https://www.typescriptlang.org/" />
          <TechBadge name="Node.js" url="https://nodejs.org/en" />
          <TechBadge name="MongoDB" url="https://www.mongodb.com/" />
          <TechBadge name="MySQL" url="https://www.mysql.com/" />
        </div>

        <h3 className="text-xl font-semibold mt-6 mb-3">
          {t("techStack.languages")}
        </h3>
        <h3 className="text-xl font-semibold mt-4 mb-3">
          {t("techStack.frameworks")}
        </h3>
        <h3 className="text-xl font-semibold mt-4 mb-3">
          {t("techStack.backend")}
        </h3>
        <h3 className="text-xl font-semibold mt-4 mb-3">
          {t("techStack.tools")}
        </h3>

        <h3 className="text-xl font-semibold mt-6 mb-3">
          {t("home.recentProjects")}
        </h3>
        <ul className="list-disc ml-6 mb-6">
          <li className="mb-2">{t("home.project1")}</li>
          <li className="mb-2">{t("home.project2")}</li>
          <li className="mb-2">{t("home.project3")}</li>
        </ul>

        <p className="mt-6">{t("home.invitation")}</p>
      </section>
    </div>
  );
};

const TechBadge = ({ name, url }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center px-3 py-1 rounded-lg bg-blue-100 hover:bg-blue-200 text-blue-800 transition"
    >
      {name}
    </a>
  );
};

export default HomePage;
