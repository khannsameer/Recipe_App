import React, { useState } from "react";

const Searchbar = ({
  type = "text",
  placeholder = "Search...",
  required = false,
  value,
  name,
  handleInputChange,
  rightIcon,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative w-full max-w-2xl px-4 group">
      {/* Glowing background on focus */}
      <div
        className={`absolute inset-0 top-2 z-0 rounded-full scale-[0.97] blur-[25px] transition-opacity duration-500
        ${isFocused ? "opacity-80" : "opacity-0"}
        bg-gradient-to-l from-yellow-400 to-rose-500`}
      ></div>

      {/* Outer gradient border */}
      <div className="relative z-10 bg-gradient-to-l from-yellow-400 to-rose-500 p-[3px] rounded-full transition-all">
        {/* Inner dark input area */}
        <div className="bg-neutral-900 rounded-full w-full flex items-center px-4 py-4">
          <input
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={handleInputChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            required={required}
            className="w-full bg-transparent text-white placeholder-gray-400 text-base outline-none"
          />
          {rightIcon && (
            <div className="ml-2 text-gray-300 text-lg">{rightIcon}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
