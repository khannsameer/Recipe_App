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
    <div className="w-full flex justify-center mb-10">
      <div className="w-full max-w-sm relative nebula-input px-4">
        <input
          ref={inputRef}
          type={type}
          name={name}
          value={value}
          required={required}
          onChange={handleInputChange}
          onFocus={handleFocus}
          placeholder={placeholder}
        />
        <span
          ref={particleRef}
          className="nebula-particle absolute inset-0 opacity-0 pointer-events-none"
        ></span>
        {rightIcon && (
          <div className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-400">
            {rightIcon}
          </div>
        )}
      </div>
    </div>
  );
};

export default Searchbar;
