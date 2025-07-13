import React from "react";

const Searchbar = ({
  type = "text",
  placeholder,
  required = false,
  value,
  name,
  handleInputChange,
  rightIcon,
}) => {
  return (
    <div className="w-full relative">
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleInputChange}
        required={required}
        className={`w-full bg-black text-white placeholder-gray-400
        border border-white rounded-full py-2 px-5 pr-10 text-sm
        outline-none transition-all duration-300
        focus:border-orange-500 focus:ring-2 focus:ring-orange-500 focus:shadow-[0_0_10px_2px_rgba(255,115,0,0.7)]`}
      />
      {rightIcon && (
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
          {rightIcon}
        </div>
      )}
    </div>
  );
};

export default Searchbar;
