import React, { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { education } from "../../data/education";
import Button from "../ui/Button";

// Определение пути к сертификатам:
const certificateUrls = {
  "itcareer.jpg": "/certificates/itcareer.jpg",
  "futuretraining.jpg": "/certificates/futuretraining.jpg",
  "berlitz.jpg": "/certificates/berlitz.jpg",
  "diplom.jpg": "/certificates/diplom.jpg",
  "trainico.jpg": "/certificates/trainico.jpg",
};

const EducationPage = () => {
  const { t } = useLanguage();
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const handleCertificateClick = (certificate) => {
    console.log("Открытие сертификата:", certificate);
    setSelectedCertificate(certificate);
  };

  const handleCloseModal = () => {
    setSelectedCertificate(null);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">{t("education.title")}</h2>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 bg-white rounded-lg shadow">
          <thead>
            <tr className="bg-blue-700 text-white">
              <th className="p-3 text-left">{t("education.period")}</th>
              <th className="p-3 text-left">{t("education.institution")}</th>
              <th className="p-3 text-left">{t("education.specialty")}</th>
              <th className="p-3 text-center"></th>
            </tr>
          </thead>
          <tbody>
            {education.map((item) => (
              <tr
                key={item.id}
                className="border-t border-gray-300 hover:bg-gray-50"
              >
                <td className="p-3">{item.period}</td>
                <td className="p-3">{item.institution}</td>
                <td className="p-3">{item.specialty}</td>
                <td className="p-3 text-center">
                  {item.certificate && (
                    <Button
                      variant="default"
                      className="text-sm"
                      onClick={() => handleCertificateClick(item.certificate)}
                    >
                      {item.certificate.includes("diplom")
                        ? t("education.diploma")
                        : t("education.certificate")}
                    </Button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for certificate display */}
      {selectedCertificate && (
        <div
          className="fixed inset-0 flex items-center justify-center p-4 z-50"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <div className="bg-white rounded-lg p-4 max-w-2xl max-h-screen overflow-auto shadow-xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-gray-800">
                {selectedCertificate.includes("diplom")
                  ? t("education.diploma")
                  : t("education.certificate")}
              </h3>
              <button
                onClick={handleCloseModal}
                className="text-gray-500 hover:text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-full p-1"
              >
                ✕
              </button>
            </div>
            <div className="bg-white p-2 rounded border border-gray-200">
              <img
                src={
                  certificateUrls[selectedCertificate] ||
                  "https://via.placeholder.com/600x400?text=Изображение+не+найдено"
                }
                alt="Certificate"
                className="max-w-full h-auto"
                onError={(e) => {
                  console.error("Ошибка загрузки изображения:", e);
                  e.target.src =
                    "https://via.placeholder.com/600x400?text=Изображение+не+найдено";
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EducationPage;

// import React, { useState } from "react";
// import { useLanguage } from "../../context/LanguageContext";
// import { education } from "../../data/education";
// import Button from "../ui/Button";

// const EducationPage = () => {
//   const { t } = useLanguage();
//   const [selectedCertificate, setSelectedCertificate] = useState(null);

//   const handleCertificateClick = (certificate) => {
//     setSelectedCertificate(certificate);
//   };

//   const handleCloseModal = () => {
//     setSelectedCertificate(null);
//   };

//   return (
//     <div className="max-w-4xl mx-auto">
//       <h2 className="text-2xl font-semibold mb-4">{t("education.title")}</h2>

//       <div className="overflow-x-auto">
//         <table className="w-full border-collapse border border-gray-300 bg-white rounded-lg shadow">
//           <thead>
//             <tr className="bg-blue-700 text-white">
//               <th className="p-3 text-left">{t("education.period")}</th>
//               <th className="p-3 text-left">{t("education.institution")}</th>
//               <th className="p-3 text-left">{t("education.specialty")}</th>
//               <th className="p-3 text-center"></th>
//             </tr>
//           </thead>
//           <tbody>
//             {education.map((item) => (
//               <tr
//                 key={item.id}
//                 className="border-t border-gray-300 hover:bg-gray-50"
//               >
//                 <td className="p-3">{item.period}</td>
//                 <td className="p-3">{item.institution}</td>
//                 <td className="p-3">{item.specialty}</td>
//                 <td className="p-3 text-center">
//                   {item.certificate && (
//                     <Button
//                       variant="default"
//                       className="text-sm"
//                       onClick={() => handleCertificateClick(item.certificate)}
//                     >
//                       {item.certificate.includes("diplom")
//                         ? t("education.diploma")
//                         : t("education.certificate")}
//                     </Button>
//                   )}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Modal for certificate display */}
//       {selectedCertificate && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
//           <div className="bg-white rounded-lg p-4 max-w-2xl max-h-screen overflow-auto">
//             <div className="flex justify-between items-center mb-4">
//               <h3 className="text-xl font-semibold">
//                 {selectedCertificate.includes("diplom")
//                   ? t("education.diploma")
//                   : t("education.certificate")}
//               </h3>
//               <button
//                 onClick={handleCloseModal}
//                 className="text-gray-500 hover:text-gray-700"
//               >
//                 ✕
//               </button>
//             </div>
//             <img
//               src={`/src/components/assets/certificates/${selectedCertificate}`}
//               alt="Certificate"
//               className="max-w-full h-auto"
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default EducationPage;
