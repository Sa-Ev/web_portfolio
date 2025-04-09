import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { work } from "@/data/work";

const WorkPage = () => {
  const { t } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">{t("work.title")}</h2>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 bg-white rounded-lg shadow">
          <thead>
            <tr className="bg-blue-700 text-white">
              <th className="p-3 text-left">{t("work.period")}</th>
              <th className="p-3 text-left">{t("work.place")}</th>
              <th className="p-3 text-left">{t("work.position")}</th>
            </tr>
          </thead>
          <tbody>
            {work.map((item) => (
              <tr
                key={item.id}
                className="border-t border-gray-300 hover:bg-gray-50"
              >
                <td className="p-3">{item.period}</td>
                <td className="p-3">{item.place}</td>
                <td className="p-3">{item.position}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WorkPage;
