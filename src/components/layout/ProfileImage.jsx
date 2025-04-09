// ProfileImage.jsx (безопасная версия)
import React from "react";
import profilePhoto from "@/assets/images/profile-photo.jpg";

const ProfileImage = () => {
  return (
    <div className="w-32 h-32 rounded-full bg-gray-300 relative overflow-hidden">
      <img
        src={profilePhoto}
        alt="Фото профиля"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default ProfileImage;

// import React, { useState, useRef, useEffect } from "react";

// const ProfileImage = () => {
//   const [imageUrl, setImageUrl] = useState("");
//   const [hasImage, setHasImage] = useState(false);
//   const fileInputRef = useRef(null);

//   // При монтировании компонента загружаем изображение из localStorage
//   useEffect(() => {
//     const savedImage = localStorage.getItem("profileImage");
//     if (savedImage) {
//       setImageUrl(savedImage);
//       setHasImage(true);
//       console.log("Изображение загружено из localStorage");
//     }
//   }, []);

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       if (!file.type.startsWith("image/")) {
//         alert("Пожалуйста, выберите файл изображения");
//         return;
//       }

//       const reader = new FileReader();
//       reader.onload = (event) => {
//         const dataUrl = event.target.result;
//         console.log("Изображение закодировано в base64");
//         setImageUrl(dataUrl);
//         setHasImage(true);
//         localStorage.setItem("profileImage", dataUrl);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleImageClick = () => {
//     if (!hasImage) {
//       fileInputRef.current.click();
//     }
//   };

//   const handleRemove = (e) => {
//     e.stopPropagation(); // Останавливаем всплытие события
//     setImageUrl("");
//     setHasImage(false);
//     localStorage.removeItem("profileImage");
//     console.log("Изображение удалено из localStorage");
//   };

//   return (
//     <div
//       className="w-32 h-32 rounded-full bg-gray-300 relative cursor-pointer"
//       onClick={handleImageClick}
//     >
//       {hasImage && (
//         <div className="absolute inset-0 z-10">
//           <img
//             src={imageUrl}
//             alt="Фото профиля"
//             className="w-full h-full rounded-full object-cover"
//           />
//         </div>
//       )}

//       {hasImage && (
//         <button
//           onClick={handleRemove}
//           className="absolute top-0 right-0 bg-red-500 hover:bg-red-600 text-white rounded-full w-6 h-6 z-20 flex items-center justify-center"
//         >
//           ✕
//         </button>
//       )}

//       {!hasImage && (
//         <div className="absolute inset-0 flex items-center justify-center">
//           <span>PHOTO</span>
//         </div>
//       )}

//       <input
//         type="file"
//         ref={fileInputRef}
//         onChange={handleImageChange}
//         accept="image/*"
//         className="hidden"
//       />
//     </div>
//   );
// };

// export default ProfileImage;
