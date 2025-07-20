import React, { useRef } from "react";

const Searchbar = ({
  type = "text",
  placeholder = "Search for recipes...",
  required = false,
  value,
  name,
  handleInputChange,
  rightIcon,
}) => {
  const inputRef = useRef(null);
  const particleRef = useRef(null);

  const handleFocus = () => {
    const el = particleRef.current;
    if (!el) return;

    const x = (Math.random() - 0.5).toFixed(2);
    const y = (Math.random() - 0.5).toFixed(2);
    el.style.setProperty("--x", x);
    el.style.setProperty("--y", y);
    el.classList.remove("opacity-0");
    el.style.animation = "nebula-float 2s forwards ease-out";
  };

  return (
    // Removed the outer flex-center div — unnecessary
    <div className="relative w-full nebula-input">
      <input
        ref={inputRef}
        type={type}
        name={name}
        value={value}
        required={required}
        onChange={handleInputChange}
        onFocus={handleFocus}
        placeholder={placeholder}
        className="bg-black border border-gray-800 text-gray-300 text-md rounded-full focus:ring-1 focus:ring-slate-800 focus:border-slate-800 block w-full py-3 pl-5 pr-12 outline-none placeholder:text-sm shadow-xl"
      ></input>

      {rightIcon && (
        <div className="absolute inset-y-0 right-0 flex items-center pr-4 cursor-pointer">
          {rightIcon}
        </div>
      )}
    </div>
  );
};

export default Searchbar;
