import React from "react";

const Button = ({
  children,
  variant = "default",
  className = "",
  ...props
}) => {
  const baseStyle = "px-4 py-2 rounded-xl font-medium transition";
  const variants = {
    default: "bg-blue-200 text-white hover:bg-blue-700",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-100",
  };

  return (
    <button
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
